# Clay Table Templates

> **Pre-built table architectures ready to clone and deploy**

## Purpose

Clay tables are your core infrastructure. These templates let you deploy proven architectures in minutes instead of hours.

## Template Categories

### Company Enrichment
**Purpose:** Enrich company/account data with firmographics, technographics, funding, etc.

**Common variants:**
- SMB focus (cheap data sources, basic enrichment)
- Mid-market (balanced coverage and cost)
- Enterprise (comprehensive data, compliance-ready)

### Contact Finding
**Purpose:** Identify and enrich decision-makers at target companies

**Common variants:**
- Title-based (search by job title)
- Department-based (find entire teams)
- Seniority-based (C-level, VP-level, manager-level)

### Intent Signals
**Purpose:** Monitor trigger events (funding, hiring, tech adoption, news)

**Common variants:**
- Funding triggers (new rounds, announcements)
- Hiring signals (job postings, new hires)
- Tech stack changes (new tool adoptions)
- News monitoring (product launches, expansions)

### List Building
**Purpose:** Build targeted account lists based on criteria

**Common variants:**
- ICP filtering (industry, size, tech stack)
- Lookalike audiences (similar to best customers)
- Market mapping (total addressable market)

### Account Scoring
**Purpose:** Qualify and prioritize accounts

**Common variants:**
- Fit scoring (how well they match ICP)
- Intent scoring (buying signals present)
- Combined scoring (fit + intent)

## Using Templates

**To deploy a template:**

1. **Import to Clay**
   - Download template JSON
   - Import into Clay workspace
   - Rename table for client context

2. **Configure**
   - Update data source API keys
   - Customize enrichment criteria
   - Adjust field mappings

3. **Test**
   - Run on small sample (10-20 records)
   - Verify hit rates and data quality
   - Check cost per record

4. **Deploy**
   - Run at scale
   - Monitor performance
   - Document any customizations

## Template Metadata

Each template includes:

**In JSON (embedded):**
- Template name and version
- Creation date
- Last updated
- Maturity level

**In .md documentation:**
- Detailed setup guide
- Performance benchmarks
- Known issues and workarounds
- Version history

## Creating New Templates

**When to create new template:**
- Built same table 2+ times
- Reusable pattern identified
- Generic use case (not client-specific)

**Process:**
1. Export table from Clay
2. Sanitize (remove client data)
3. Generalize (make configurable)
4. Document setup
5. Test on fresh workspace
6. Version and tag maturity

## Template Structure

**Inside Clay table, use consistent naming:**

**Columns:**
- `_input_[field]` - Original input data
- `_enrich_[provider]_[field]` - Enrichment results
- `_final_[field]` - Cleaned/merged final value
- `_meta_[field]` - Metadata (timestamps, sources, flags)

**Why this matters:**
- Easy to understand data flow
- Clear lineage (where did data come from?)
- Debugging (what step failed?)
- Reusability (consistent patterns across tables)

## Performance Tracking

For each template, track:

**Coverage:**
- What % of records get enriched
- What % hit on first try vs. fallback
- What % require manual intervention

**Cost:**
- Average cost per record
- Cost by data provider
- Total monthly spend projection

**Quality:**
- Accuracy (how often is data correct?)
- Freshness (how old is the data?)
- Completeness (how many fields populated?)

**Speed:**
- Time to process X records
- Rate limits encountered
- Bottlenecks identified

## Integration Points

**Tables often feed:**
- CRM (HubSpot, Salesforce)
- Sales engagement (Outreach, Salesloft)
- Slack notifications
- Other Clay tables (modular architecture)

**Document these integrations in table .md file**

---

**Don't rebuild. Clone, configure, deploy.**
