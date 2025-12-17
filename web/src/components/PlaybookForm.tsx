import { useState } from 'react';
import './Form.css';

interface PlaybookFormProps {
  onSubmit: (data: any) => void;
}

function PlaybookForm({ onSubmit }: PlaybookFormProps) {
  const [domain, setDomain] = useState('');
  const [type, setType] = useState('practitioner');
  const [focus, setFocus] = useState('');
  const [format, setFormat] = useState('markdown');
  const [model, setModel] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) {
      alert('Please enter a domain');
      return;
    }
    if (!focus.trim()) {
      alert('Please enter a target focus');
      return;
    }

    onSubmit({
      domain: domain.trim(),
      type,
      focus: focus.trim(),
      format,
      model: model.trim() || undefined,
    });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Octave-Style Sales Playbook</h2>
        <p>Generate focused, tactical sales playbooks using Octave HQ's proven methodology.</p>
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
        </div>

        <div className="form-group">
          <label className="label" htmlFor="type">
            Playbook Type <span className="required">*</span>
          </label>
          <select
            id="type"
            className="input"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="practitioner">Practitioner - Target specific roles/personas</option>
            <option value="sector">Sector - Target specific industries</option>
            <option value="milestone">Milestone - Target companies hitting specific triggers</option>
            <option value="competitive">Competitive - Position against specific competitors</option>
            <option value="account">Account - Hyper-specific for named accounts</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label" htmlFor="focus">
            Target Focus <span className="required">*</span>
          </label>
          <input
            id="focus"
            type="text"
            className="input"
            placeholder='e.g., "RevOps teams struggling with attribution"'
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
            required
          />
          <small className="help-text">
            Describe the specific segment, industry, milestone, competitor, or account you're targeting
          </small>
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
          Generate Playbook
        </button>
      </form>
    </div>
  );
}

export default PlaybookForm;
