# Stage-Specific Playbooks

> **The right system architecture for each company stage**

## Purpose

Different company stages need fundamentally different GTM systems. A seed-stage startup needs speed and simplicity. A Series B company needs compliance and scale.

This directory contains **opinionated, proven playbooks** for each stage—not generic advice, but specific architectures that work.

## Playbook Structure

Each playbook answers:
1. **What do they need?** (stage-specific requirements)
2. **What can they handle?** (technical + operational capacity)
3. **What's the right system?** (architecture recommendations)
4. **What are the risks?** (common failure modes)
5. **What's the migration path?** (how to scale to next stage)

## Stage Definitions

### Seed Stage (Pre-Product/Market Fit)
- **Team Size:** <10 people, 0-2 sales reps
- **TAM:** Still figuring out ICP
- **Systems:** Spreadsheets, basic CRM (if any)
- **Budget:** $5K-$15K for GTM systems
- **Timeline:** Need results in weeks, not months
- **Key Constraint:** Speed to validate ICP

**Playbook Focus:** Minimal viable enrichment, fast iteration

### Series A (Scaling to $1M-$10M ARR)
- **Team Size:** 10-50 people, 2-10 sales reps
- **TAM:** Clear ICP, expanding to adjacent segments
- **Systems:** HubSpot/Salesforce, basic sales automation
- **Budget:** $15K-$50K for GTM systems
- **Timeline:** 1-3 month implementations
- **Key Constraint:** Scaling from 10→100 accounts/month

**Playbook Focus:** Repeatable systems, automation at scale

### Series B (Scaling to $10M-$50M ARR)
- **Team Size:** 50-200 people, 10-30 sales reps
- **TAM:** Multiple segments, enterprise moving upmarket
- **Systems:** Enterprise CRM, sales ops team
- **Budget:** $30K-$100K for GTM systems
- **Timeline:** 2-4 month implementations
- **Key Constraint:** Compliance, enterprise readiness, scale

**Playbook Focus:** Enterprise-grade infrastructure, compliance, team enablement

### Series C+ / Enterprise
*(Future playbook - capture patterns as you work with these)*

## Playbook Format

```markdown
# [Stage] Playbook

## Stage Characteristics

**Typical Profile:**
- Team size:
- ARR range:
- Sales team:
- Existing systems:
- Budget range:

**What They Need:**
[Specific requirements]

**What They Can't Handle:**
[Operational constraints]

## Recommended Architecture

### Core Clay Tables

1. **[Table Name]:** [Purpose]
   - Inputs:
   - Enrichments:
   - Outputs:
   - Refresh cadence:

2. **[Table Name]:** ...

### Integration Stack

- **CRM:** [HubSpot/Salesforce pattern]
- **Sales Engagement:** [If applicable]
- **Data Sources:** [Recommended providers]
- **Automation:** [Workflow patterns]

### Implementation Timeline

- Week 1: [Milestones]
- Week 2-4: [Milestones]
- Month 2-3: [If applicable]

## Pricing Guidance

**Typical Engagement:**
- Discovery: [Hours/cost]
- Implementation: [Hours/cost]
- Training: [Hours/cost]
- Total: $[X]K - $[Y]K

**Ongoing Costs:**
- Data providers: $[range]/month
- Clay credits: $[range]/month
- Maintenance: $[range]/month

## Common Failure Modes

### Over-Engineering
**Problem:** [Description]
**Prevention:** [How to avoid]

### Under-Scoping
**Problem:** [Description]
**Prevention:** [How to avoid]

## Success Metrics

- **Immediate (Week 1-4):** [Leading indicators]
- **Short-term (Month 2-3):** [Performance metrics]
- **Long-term (Month 6+):** [Business outcomes]

## Migration Path to Next Stage

**When to upgrade architecture:**
[Signals that they've outgrown this playbook]

**What changes:**
[Key architectural differences]

## Case Studies

### [Client Industry] - [Engagement Date]
- **Challenge:** [What they needed]
- **Solution:** [What you built]
- **Results:** [Outcomes]
- **Lessons:** [What you learned]
```

## How to Use

1. **Qualify Engagement:** Identify company stage
2. **Select Playbook:** Match to appropriate stage
3. **Customize (Slightly):** Adjust for industry/use case
4. **Deploy Pattern:** Follow architecture recommendations
5. **Measure:** Track against playbook success metrics
6. **Update Playbook:** Feed learnings back

## Anti-Patterns by Stage

### Seed Stage
- ❌ Building for "future scale" they don't need yet
- ❌ Complex compliance workflows before they have enterprise deals
- ❌ Multi-CRM integrations when they're still in HubSpot free tier
- ✅ Fast, simple, focused on ICP validation

### Series A
- ❌ Manual processes that can't scale to 100 accounts/month
- ❌ Ignoring data quality (will break at scale)
- ❌ No integration with CRM (sales won't adopt)
- ✅ Repeatable, automated, integrated

### Series B
- ❌ Hacky solutions that can't pass enterprise security review
- ❌ No compliance documentation
- ❌ Single points of failure (no redundancy)
- ✅ Enterprise-ready, documented, scalable

## Contributing

After each engagement:
1. Document what worked for that stage
2. Update playbook with refined architecture
3. Add case study (sanitized)
4. Note any stage-specific insights

---

**Stop reinventing. Deploy the playbook.**
