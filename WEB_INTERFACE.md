# Web Interface Guide

The GTM Context Engine now includes a beautiful web interface for generating GTM strategies and playbooks without using the command line.

## Quick Start

### Development Mode

1. **Install all dependencies:**
   ```bash
   npm install
   cd web && npm install && cd ..
   ```

2. **Start both servers:**
   ```bash
   npm run dev:web
   ```
   
   This starts:
   - Backend API server on `http://localhost:3001`
   - Frontend development server on `http://localhost:5173`

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Production Mode

1. **Build everything:**
   ```bash
   npm run build:web
   ```

2. **Start the production server:**
   ```bash
   npm run start:web
   ```
   
   The server will serve both the API and the frontend on port 3001 (or the port specified in `PORT` environment variable).

## Features

### Strategic GTM Analysis

1. Select "Strategic GTM Analysis" mode
2. Enter a company domain (e.g., `stripe.com`)
3. Optionally specify:
   - Industry focus
   - Competitor focus
   - Persona deep dive
   - Output format (YAML, Markdown, or JSON)
   - AI model
4. Click "Generate GTM Analysis"
5. View results and download as JSON

### Octave-Style Playbook

1. Select "Octave-Style Playbook" mode
2. Enter a company domain
3. Select playbook type:
   - **Practitioner**: Target specific roles/personas
   - **Sector**: Target specific industries
   - **Milestone**: Target companies hitting specific triggers
   - **Competitive**: Position against specific competitors
   - **Account**: Hyper-specific for named accounts
4. Enter target focus description
5. Optionally specify output format and AI model
6. Click "Generate Playbook"
7. View results and download as JSON

## API Endpoints

The web interface uses these REST API endpoints:

### POST `/api/analyze`

Generate a strategic GTM analysis.

**Request Body:**
```json
{
  "domain": "stripe.com",
  "industry": "fintech",
  "competitor": "paypal.com",
  "persona": "VP of Sales",
  "format": "yaml",
  "model": "claude-sonnet-4-5-20250929"
}
```

**Response:**
```json
{
  "success": true,
  "playbook": { ... },
  "outputPath": "outputs/gtm-playbook-stripe-com-2024-01-01.yaml",
  "summary": {
    "company": "Stripe",
    "icpSegments": 3,
    "buyerPersonas": 4,
    "useCases": 6,
    "competitors": 5
  }
}
```

### POST `/api/playbook`

Generate an Octave-style playbook.

**Request Body:**
```json
{
  "domain": "stripe.com",
  "type": "practitioner",
  "focus": "RevOps teams struggling with attribution",
  "format": "markdown",
  "model": "claude-sonnet-4-5-20250929"
}
```

**Response:**
```json
{
  "success": true,
  "playbook": { ... },
  "outputPath": "outputs/practitioner-playbook-stripe-com-2024-01-01.md",
  "summary": {
    "title": "RevOps Attribution Playbook",
    "type": "practitioner",
    "personas": 2,
    "qualifyingQuestions": 8,
    "keyInsights": 5
  }
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Troubleshooting

### Port Already in Use

If port 3001 or 5173 is already in use:

1. **Change backend port:**
   ```bash
   PORT=3002 npm run dev:server
   ```

2. **Update frontend proxy** in `web/vite.config.ts`:
   ```typescript
   proxy: {
     '/api': {
       target: 'http://localhost:3002',
       changeOrigin: true,
     },
   },
   ```

### API Key Not Set

Make sure your `ANTHROPIC_API_KEY` is set:

```bash
export ANTHROPIC_API_KEY="your-api-key-here"
```

Or create a `.env` file in the project root:

```
ANTHROPIC_API_KEY=your-api-key-here
```

### Build Errors

If you encounter build errors:

1. **Clean and reinstall:**
   ```bash
   rm -rf node_modules web/node_modules
   npm install
   cd web && npm install && cd ..
   ```

2. **Rebuild:**
   ```bash
   npm run build
   npm run build:web
   ```

## Architecture

```
├── src/
│   ├── server.ts          # Express API server
│   └── ...
├── web/
│   ├── src/
│   │   ├── App.tsx        # Main React app
│   │   ├── components/    # React components
│   │   │   ├── Header.tsx
│   │   │   ├── AnalysisForm.tsx
│   │   │   ├── PlaybookForm.tsx
│   │   │   └── Results.tsx
│   │   └── ...
│   └── ...
```

The web interface is a single-page application (SPA) built with:
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Express** - Backend API server

## Customization

### Styling

Edit CSS files in `web/src/`:
- `index.css` - Global styles
- `App.css` - App-level styles
- `components/*.css` - Component-specific styles

### API Configuration

Edit `src/server.ts` to:
- Add new endpoints
- Modify request/response handling
- Add authentication/authorization
- Add rate limiting

### Frontend Configuration

Edit `web/vite.config.ts` to:
- Change dev server port
- Modify build settings
- Configure proxy settings
