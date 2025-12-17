import { useState } from 'react';
import Header from './components/Header';
import AnalysisForm from './components/AnalysisForm';
import PlaybookForm from './components/PlaybookForm';
import Results from './components/Results';
import './App.css';

type Mode = 'analyze' | 'playbook';

interface AnalysisResult {
  success: boolean;
  playbook: any;
  outputPath?: string;
  summary?: any;
  error?: string;
}

function App() {
  const [mode, setMode] = useState<Mode>('analyze');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (data: any) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setResult(result);
      } else {
        setError(result.error || 'Failed to generate analysis');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handlePlaybook = async (data: any) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/playbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setResult(result);
      } else {
        setError(result.error || 'Failed to generate playbook');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="mode-selector">
          <button
            className={`mode-btn ${mode === 'analyze' ? 'active' : ''}`}
            onClick={() => {
              setMode('analyze');
              handleReset();
            }}
          >
            Strategic GTM Analysis
          </button>
          <button
            className={`mode-btn ${mode === 'playbook' ? 'active' : ''}`}
            onClick={() => {
              setMode('playbook');
              handleReset();
            }}
          >
            Octave-Style Playbook
          </button>
        </div>

        {error && (
          <div className="error-message">
            <strong>Error:</strong> {error}
          </div>
        )}

        {!result && !loading && (
          <div className="fade-in">
            {mode === 'analyze' ? (
              <AnalysisForm onSubmit={handleAnalyze} />
            ) : (
              <PlaybookForm onSubmit={handlePlaybook} />
            )}
          </div>
        )}

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Generating your GTM strategy... This may take a few minutes.</p>
          </div>
        )}

        {result && !loading && (
          <Results result={result} mode={mode} onReset={handleReset} />
        )}
      </div>
    </div>
  );
}

export default App;
