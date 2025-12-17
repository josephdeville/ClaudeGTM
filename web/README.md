# GTM Context Engine - Web Interface

Modern web interface for the GTM Context Engine, built with React and TypeScript.

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

1. Install dependencies:
```bash
cd web
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` and proxy API requests to the backend server at `http://localhost:3001`.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

## Features

- **Strategic GTM Analysis**: Generate comprehensive 10-section GTM strategy playbooks
- **Octave-Style Playbooks**: Create focused, tactical sales playbooks
- **Real-time Progress**: See generation progress in real-time
- **Multiple Formats**: Download results in YAML, Markdown, or JSON
- **Modern UI**: Beautiful, responsive interface built with React

## Usage

1. Start the backend server (from project root):
```bash
npm run dev:server
```

2. Start the frontend (from web directory):
```bash
npm run dev
```

3. Open `http://localhost:5173` in your browser

## Production Deployment

Build both backend and frontend:

```bash
# From project root
npm run build:web
```

Then start the server:

```bash
npm run start:web
```

The server will serve the frontend on the same port (default: 3001).
