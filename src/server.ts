import express from 'express';
import cors from 'cors';
import path from 'path';
import { GTMOrchestrator } from './modules/orchestrator';
import { OctaveOrchestrator } from './modules/octave-orchestrator';
import { AnalysisConfig, PlaybookConfig, PlaybookType } from './types';
import { logger } from './utils/logger';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../web/dist')));
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Strategic GTM Analysis endpoint
app.post('/api/analyze', async (req, res) => {
  try {
    const {
      domain,
      industry,
      competitor,
      persona,
      format = 'yaml',
      model,
    } = req.body;

    if (!domain) {
      return res.status(400).json({ error: 'Domain is required' });
    }

    logger.info(`Starting GTM analysis for domain: ${domain}`);

    const analysisConfig: AnalysisConfig = {
      domain,
      industry_focus: industry,
      competitor_focus: competitor,
      persona_depth: persona,
      output_format: format as 'yaml' | 'markdown' | 'json',
      model,
    };

    const orchestrator = new GTMOrchestrator(analysisConfig);
    const { playbook, outputPath } = await orchestrator.execute();

    res.json({
      success: true,
      playbook,
      outputPath,
      summary: {
        company: playbook.company_profile.company_name,
        icpSegments: playbook.icp_segments.length,
        buyerPersonas: playbook.buyer_personas.length,
        useCases: playbook.use_cases.length,
        competitors: Object.keys(playbook.competitive_positioning.competitive_matrix).length,
      },
    });
  } catch (error: any) {
    logger.error('Analysis failed', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate GTM playbook',
    });
  }
});

// Octave-style Playbook endpoint
app.post('/api/playbook', async (req, res) => {
  try {
    const {
      domain,
      type,
      focus,
      format = 'markdown',
      model,
    } = req.body;

    if (!domain) {
      return res.status(400).json({ error: 'Domain is required' });
    }

    if (!type || !focus) {
      return res.status(400).json({ error: 'Type and focus are required' });
    }

    const validTypes: PlaybookType[] = ['practitioner', 'sector', 'milestone', 'competitive', 'account'];
    if (!validTypes.includes(type as PlaybookType)) {
      return res.status(400).json({
        error: `Invalid playbook type. Must be one of: ${validTypes.join(', ')}`,
      });
    }

    logger.info(`Starting Octave playbook generation for domain: ${domain}, type: ${type}`);

    const playbookConfig: PlaybookConfig = {
      domain,
      playbook_type: type as PlaybookType,
      target_focus: focus,
      output_format: format as 'markdown' | 'json',
      model,
    };

    const orchestrator = new OctaveOrchestrator(playbookConfig);
    const { playbook, outputPath } = await orchestrator.execute();

    res.json({
      success: true,
      playbook,
      outputPath,
      summary: {
        title: playbook.playbook_title,
        type: playbook.playbook_type,
        personas: playbook.value_propositions_by_persona.length,
        qualifyingQuestions: playbook.qualifying_questions.length,
        keyInsights: playbook.key_insights.length,
      },
    });
  } catch (error: any) {
    logger.error('Playbook generation failed', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Failed to generate playbook',
    });
  }
});

// Serve React app for all other routes (SPA routing)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../web/dist/index.html'));
  });
}

app.listen(PORT, () => {
  logger.info(`🚀 GTM Context Engine API server running on port ${PORT}`);
  logger.info(`📊 Health check: http://localhost:${PORT}/api/health`);
  if (process.env.NODE_ENV !== 'production') {
    logger.info(`🌐 Frontend should be running on http://localhost:5173 (or configured port)`);
  }
});
