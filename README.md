# GTM Context Engine 🚀

> **AI-Powered Go-To-Market Strategy Generator**
> Analyze any company domain and generate comprehensive outbound sales strategies in minutes.

[![Built with Claude](https://img.shields.io/badge/Built%20with-Claude%20AI-blue)](https://anthropic.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

The GTM Context Engine is an intelligent platform that analyzes company domains and automatically generates battle-tested GTM playbooks. Inspired by enterprise sales intelligence platforms like Octave HQ, it combines AI-powered research with proven sales frameworks to deliver actionable strategies.

### What It Does

Input a company domain → Get a complete GTM playbook including:

- **ICP Segments** - Ideal customer profiles with qualification criteria
- **Buyer Personas** - Detailed personas with pain points, objections, and messaging tone
- **Use Cases** - Specific problems solved with value quantification
- **Value Propositions** - Core and persona-specific value props
- **Competitive Positioning** - Battlecards and positioning statements
- **Messaging Playbooks** - Ready-to-use email sequences, LinkedIn messages, and cold call scripts
- **Qualification Framework** - Scoring criteria for lead qualification
- **Outbound Motion** - Strategic plays with triggers and conversion expectations
- **Implementation Roadmap** - Week-by-week rollout plan

## Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Anthropic API key ([Get one here](https://console.anthropic.com/))

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/claude-gtm-engine.git
cd claude-gtm-engine

# Install dependencies
npm install

# Build the project
npm run build

# Set up your API key
export ANTHROPIC_API_KEY="your-api-key-here"

# Or create a .env file
cp .env.example .env
# Edit .env and add your API key
```

### Basic Usage

```bash
# Analyze a company
npm run analyze stripe.com

# With options
npm run analyze notion.so -- --format markdown --verbose

# Using the CLI directly
node dist/cli.js analyze salesforce.com --industry healthcare
```

## CLI Commands

### `gtm analyze <domain>`

Generate a complete GTM playbook for a company domain.

**Arguments:**
- `<domain>` - Company domain (e.g., stripe.com, notion.so)

**Options:**
- `-i, --industry <industry>` - Focus on specific industry vertical
- `-c, --competitor <domain>` - Focus positioning against specific competitor
- `-p, --persona <title>` - Generate deep dive for specific persona title
- `-f, --format <format>` - Output format: `yaml`, `markdown`, or `json` (default: yaml)
- `-m, --model <model>` - AI model to use (default: claude-sonnet-4-5-20250929)
- `-v, --verbose` - Enable verbose logging

**Examples:**

```bash
# Basic analysis
gtm analyze stripe.com

# Focus on healthcare industry
gtm analyze salesforce.com --industry healthcare

# Generate markdown output
gtm analyze notion.so --format markdown

# Competitive positioning against a specific competitor
gtm analyze asana.com --competitor monday.com

# Use more powerful model for complex analysis
gtm analyze oracle.com --model claude-opus-4-5-20251101 --verbose
```

### `gtm init`

Display setup instructions and configuration options.

```bash
gtm init
```

## Configuration

Configure the engine via environment variables or `.env` file:

```bash
# Required
ANTHROPIC_API_KEY=your_api_key_here

# Optional
ANTHROPIC_MODEL=claude-sonnet-4-5-20250929  # AI model
OUTPUT_FORMAT=yaml                            # yaml, markdown, or json
OUTPUT_DIR=./outputs                          # Output directory
MAX_CONCURRENT_REQUESTS=3                     # Rate limiting
```

## Output Structure

The GTM playbook is generated in your chosen format with this structure:

```
outputs/
  └── gtm-playbook-{domain}-{date}.yaml
```

### Sample Output Sections

#### 1. Company Profile
```yaml
company_name: Stripe
domain: stripe.com
one_liner: Payment infrastructure for the internet
category: Payment Processing
business_model: B2B SaaS
stage: Scale
primary_offering: Payment API and financial services
key_differentiators:
  - Developer-first API design
  - Global payment support
  - Comprehensive financial tooling
```

#### 2. ICP Segments
```yaml
segment_name: Fast-Growing SaaS Companies
company_characteristics:
  industry: [SaaS, E-commerce, Marketplaces]
  company_size: 50-500 employees
  revenue_range: $5M-$50M ARR
  tech_maturity: High
  geographic_focus: [North America, Europe]
buying_triggers:
  - Scaling payment operations beyond 1000 transactions/day
  - Expanding to international markets
  - Replacing legacy payment infrastructure
```

#### 3. Buyer Personas
```yaml
persona_name: The Growth-Focused VP Sales
job_titles:
  - VP of Sales
  - Chief Revenue Officer
  - Head of Revenue Operations
pain_points:
  - pain: Manual deal tracking consuming 10+ hours per week
    intensity: High
    current_solution: Spreadsheets and fragmented tools
```

#### 4. Messaging Playbooks

**Email Sequence Example:**
```yaml
touch_1:
  subject_line: "Quick question about [Company]'s payment stack"
  body: |
    Hi [First Name],

    I noticed [Company] recently expanded to Europe—congrats on the growth!

    Quick question: how are you handling multi-currency payments and local
    payment methods? Most companies at your stage hit friction with their
    current processor around 5K transactions/day.

    Worth a 15-min conversation?
  cta: "Open to a brief call this week?"
```

## Programmatic Usage

Use the GTM Engine in your own applications:

```typescript
import { GTMOrchestrator, AnalysisConfig } from 'claude-gtm-engine';

const config: AnalysisConfig = {
  domain: 'stripe.com',
  output_format: 'json',
  industry_focus: 'fintech',
};

const orchestrator = new GTMOrchestrator(config);
const { playbook, outputPath } = await orchestrator.execute();

console.log('Generated playbook:', playbook);
console.log('Saved to:', outputPath);
```

## Architecture

```
src/
├── types/              # TypeScript type definitions
│   └── gtm.types.ts   # GTM playbook structure
├── utils/              # Utility modules
│   ├── config.ts      # Configuration loader
│   ├── logger.ts      # Logging utilities
│   └── ai-client.ts   # Anthropic API client
├── modules/            # Core modules
│   ├── researcher.ts       # Company research & web search
│   ├── gtm-analyzer.ts     # AI-powered GTM analysis
│   ├── output-formatter.ts # Output generation
│   └── orchestrator.ts     # Main orchestrator
├── cli.ts              # CLI interface
└── index.ts            # Main entry point
```

## How It Works

### 1. Research Phase

The engine conducts comprehensive research across multiple dimensions:

**Company Deep Dive:**
- Products, services, and features
- Pricing and business model
- Company size, funding, and growth
- Technology stack
- Recent news and launches

**Competitive Analysis:**
- Direct and indirect competitors
- Market positioning
- Competitive advantages/weaknesses
- Industry trends

**Customer Intelligence:**
- Current customer base
- Success stories and testimonials
- Common pain points
- Target industries and verticals

### 2. Analysis Phase

Using Claude AI, the engine synthesizes research into:

- **ICP Segments** - Identifies 2-4 ideal customer profiles
- **Buyer Personas** - Creates 3-5 detailed personas
- **Use Cases** - Develops 5-8 specific use cases
- **Value Props** - Generates core and persona-specific propositions
- **Competitive Positioning** - Builds battlecards and positioning
- **Messaging** - Creates email, LinkedIn, and call scripts
- **Qualification** - Develops scoring framework
- **Strategy** - Recommends outbound motion and plays

### 3. Output Phase

The playbook is formatted and saved in your chosen format:

- **YAML** - Structured, machine-readable
- **Markdown** - Human-readable, shareable
- **JSON** - API-compatible, programmable

## Use Cases

### For Sales Teams
- Generate messaging for new market segments
- Create persona-based email campaigns
- Develop competitive battlecards
- Build qualification frameworks

### For Marketing Teams
- Develop positioning statements
- Create persona-based content strategies
- Identify key value propositions
- Plan market entry strategies

### For Founders
- Understand target customer profiles
- Develop go-to-market strategy
- Create initial sales playbooks
- Analyze competitive landscape

### For Agencies
- Accelerate client onboarding
- Generate market intelligence
- Create campaign strategies
- Deliver strategic consulting

## Advanced Features

### Industry-Focused Analysis

Target specific verticals:

```bash
gtm analyze salesforce.com --industry healthcare
```

This tailors all personas, messaging, and use cases to the specified industry.

### Competitive Positioning

Focus on a specific competitor:

```bash
gtm analyze asana.com --competitor monday.com
```

Generates displacement messaging and head-to-head battlecards.

### Model Selection

Choose the AI model based on your needs:

```bash
# Faster, cost-effective (default)
gtm analyze company.com --model claude-sonnet-4-5-20250929

# Most powerful, for complex analysis
gtm analyze company.com --model claude-opus-4-5-20251101
```

## Best Practices

### 1. Research Quality
- Use the exact company domain (not www or subdomains)
- For better results, analyze well-established companies with public information
- Enable `--verbose` to see research progress

### 2. Output Customization
- Use YAML for CRM imports and automation
- Use Markdown for team sharing and documentation
- Use JSON for programmatic access

### 3. Iteration
- Start with basic analysis
- Refine with industry or competitor focus
- Generate multiple versions for different segments

### 4. Implementation
- Review and customize messaging for your brand voice
- Validate personas against actual customer data
- Test qualification criteria with your sales team
- Implement plays iteratively, starting with highest priority

## API Integration

### Search API (Optional)

For production use, integrate with a professional search API:

1. **Google Custom Search API**
   - Best for comprehensive results
   - Requires API key and Search Engine ID

2. **SerpAPI**
   - Easy integration
   - Good for production

3. **Bing Search API**
   - Cost-effective
   - Good coverage

Update `src/modules/researcher.ts` to integrate your preferred API.

## Limitations & Considerations

- **Research Quality**: Results depend on publicly available information
- **AI Variability**: Output may vary slightly between runs
- **Rate Limits**: Anthropic API has rate limits; use appropriate model
- **Accuracy**: Always validate generated content against your knowledge
- **Customization**: Generated content is a starting point; customize for your needs

## Roadmap

- [ ] Integration with CRM systems (Salesforce, HubSpot)
- [ ] Real-time company data enrichment
- [ ] Multi-language support
- [ ] Team collaboration features
- [ ] Version control for playbooks
- [ ] A/B testing framework for messaging
- [ ] Integration with sales engagement platforms
- [ ] Analytics dashboard

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/claude-gtm-engine/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/claude-gtm-engine/discussions)

## Acknowledgments

- Built with [Anthropic Claude](https://anthropic.com) AI
- Inspired by enterprise GTM platforms like Octave HQ
- Based on proven B2B sales frameworks (MEDDIC, SPICED, BANT)

## Example Companies to Try

```bash
# SaaS Companies
gtm analyze stripe.com
gtm analyze notion.so
gtm analyze figma.com
gtm analyze slack.com

# With industry focus
gtm analyze salesforce.com --industry healthcare
gtm analyze hubspot.com --industry manufacturing

# With competitive focus
gtm analyze asana.com --competitor monday.com
gtm analyze zoom.us --competitor webex.com
```

---

**Built with ❤️ using Claude AI**

For questions, feedback, or support, please open an issue on GitHub.