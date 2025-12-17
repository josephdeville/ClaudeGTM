import { useState } from 'react';
import './Form.css';

interface AnalysisFormProps {
  onSubmit: (data: any) => void;
}

function AnalysisForm({ onSubmit }: AnalysisFormProps) {
  const [domain, setDomain] = useState('');
  const [industry, setIndustry] = useState('');
  const [competitor, setCompetitor] = useState('');
  const [persona, setPersona] = useState('');
  const [format, setFormat] = useState('yaml');
  const [model, setModel] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) {
      alert('Please enter a domain');
      return;
    }

    onSubmit({
      domain: domain.trim(),
      industry: industry.trim() || undefined,
      competitor: competitor.trim() || undefined,
      persona: persona.trim() || undefined,
      format,
      model: model.trim() || undefined,
    });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Strategic GTM Analysis</h2>
        <p>Generate a comprehensive 10-section GTM strategy playbook for any company domain.</p>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="label" htmlFor="domain">
            Company Domain <span className="required">*</span>
          </label>
          <input
            id="domain"
            type="text"
            className="input"
            placeholder="e.g., stripe.com, notion.so"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
          />
          <small className="help-text">Enter the company domain without www or protocol</small>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="label" htmlFor="industry">
              Industry Focus (Optional)
            </label>
            <input
              id="industry"
              type="text"
              className="input"
              placeholder="e.g., healthcare, fintech"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="competitor">
              Competitor Focus (Optional)
            </label>
            <input
              id="competitor"
              type="text"
              className="input"
              placeholder="e.g., monday.com"
              value={competitor}
              onChange={(e) => setCompetitor(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="label" htmlFor="persona">
            Persona Deep Dive (Optional)
          </label>
          <input
            id="persona"
            type="text"
            className="input"
            placeholder="e.g., VP of Sales, CTO"
            value={persona}
            onChange={(e) => setPersona(e.target.value)}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="label" htmlFor="format">
              Output Format
            </label>
            <select
              id="format"
              className="input"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <option value="yaml">YAML</option>
              <option value="markdown">Markdown</option>
              <option value="json">JSON</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label" htmlFor="model">
              AI Model (Optional)
            </label>
            <input
              id="model"
              type="text"
              className="input"
              placeholder="Default: claude-sonnet-4-5-20250929"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-large">
          Generate GTM Analysis
        </button>
      </form>
    </div>
  );
}

export default AnalysisForm;
