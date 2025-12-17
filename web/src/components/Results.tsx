import { useState } from 'react';
import './Results.css';

interface ResultsProps {
  result: any;
  mode: 'analyze' | 'playbook';
  onReset: () => void;
}

function Results({ result, mode, onReset }: ResultsProps) {
  const [activeTab, setActiveTab] = useState<'summary' | 'full'>('summary');

  const downloadJSON = () => {
    const dataStr = JSON.stringify(result.playbook, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${mode === 'analyze' ? 'gtm-analysis' : 'octave-playbook'}-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const renderSummary = () => {
    if (mode === 'analyze' && result.summary) {
      return (
        <div className="summary-grid">
          <div className="summary-card">
            <div className="summary-label">Company</div>
            <div className="summary-value">{result.summary.company}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">ICP Segments</div>
            <div className="summary-value">{result.summary.icpSegments}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Buyer Personas</div>
            <div className="summary-value">{result.summary.buyerPersonas}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Use Cases</div>
            <div className="summary-value">{result.summary.useCases}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Competitors</div>
            <div className="summary-value">{result.summary.competitors}</div>
          </div>
        </div>
      );
    } else if (mode === 'playbook' && result.summary) {
      return (
        <div className="summary-grid">
          <div className="summary-card">
            <div className="summary-label">Playbook Title</div>
            <div className="summary-value">{result.summary.title}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Type</div>
            <div className="summary-value">{result.summary.type}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Personas</div>
            <div className="summary-value">{result.summary.personas}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Qualifying Questions</div>
            <div className="summary-value">{result.summary.qualifyingQuestions}</div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Key Insights</div>
            <div className="summary-value">{result.summary.keyInsights}</div>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderFullData = () => {
    return (
      <div className="full-data">
        <pre className="json-preview">
          {JSON.stringify(result.playbook, null, 2)}
        </pre>
      </div>
    );
  };

  return (
    <div className="results-container fade-in">
      <div className="results-header">
        <div>
          <h2>✓ {mode === 'analyze' ? 'GTM Analysis' : 'Playbook'} Generated Successfully!</h2>
          <p>Your strategy is ready to review and implement.</p>
        </div>
        <div className="results-actions">
          <button onClick={downloadJSON} className="btn btn-secondary">
            Download JSON
          </button>
          <button onClick={onReset} className="btn btn-primary">
            New Analysis
          </button>
        </div>
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'summary' ? 'active' : ''}`}
          onClick={() => setActiveTab('summary')}
        >
          Summary
        </button>
        <button
          className={`tab ${activeTab === 'full' ? 'active' : ''}`}
          onClick={() => setActiveTab('full')}
        >
          Full Data
        </button>
      </div>

      <div className="results-content">
        {activeTab === 'summary' ? renderSummary() : renderFullData()}
      </div>

      {result.outputPath && (
        <div className="output-info">
          <strong>Output saved to:</strong> {result.outputPath}
        </div>
      )}
    </div>
  );
}

export default Results;
