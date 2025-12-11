# Implementation Patterns

> **Proven architectures and sequences that consistently deliver results**

## What Goes Here

Battle-tested implementation patterns that you can deploy with confidence. These are not ideas—they're proven architectures extracted from successful engagements.

## Pattern Categories

### Enrichment Waterfalls
Multi-step enrichment sequences that maximize data quality while minimizing cost.

**Format:**
```
Pattern: [Name]
Use Case: [When to deploy this]
Sequence: [Step-by-step data flow]
Performance: [Hit rate, cost, speed metrics]
Failure Modes: [When this doesn't work]
```

**Example:**
```
Pattern: Enterprise Contact Enrichment Waterfall
Use Case: Finding decision-makers at Series B+ SaaS companies
Sequence:
  1. Apollo (company + title search) → 70% hit rate, $0.50/contact
  2. ZoomInfo (title + seniority fallback) → 20% hit rate, $1.20/contact
  3. Hunter.io (email pattern verification) → 8% hit rate, $0.30/contact
  4. Manual LinkedIn (final 2%)
Performance: 98% contact coverage, $0.68 avg cost, 24hr turnaround
Failure Modes: Breaks for <50 employee companies (Apollo insufficient coverage)
```

### Integration Architectures
How to connect Clay to other tools without breaking things.

**Common Patterns:**
- Clay → HubSpot (sync strategies, field mapping, de-duplication)
- Clay → Salesforce (enterprise patterns, bulk limits, error handling)
- Clay → Outreach/Salesloft (sequencing, cadence integration)
- Clay → Slack (alerting, notifications, approval workflows)

### Automation Blueprints
Repeatable automation patterns for common GTM workflows.

**Examples:**
- New funding event → enrich → notify sales
- Job posting scraping → decision-maker identification → outreach
- Website visitor → company enrichment → account scoring → routing

### Data Source Combinations
Which data sources work well together? Which conflict?

**Document:**
- Complementary sources (use together)
- Redundant sources (choose one)
- Conflicting sources (resolution strategy)
- Cost vs. quality trade-offs

## Pattern Maturity Levels

**🔬 Experimental** - Tested once, needs validation
**✅ Proven** - Worked across 2-3 engagements
**💎 Battle-Tested** - Deployed 5+ times, consistently performs
**🏆 Signature** - Your "unfair advantage" patterns

## How to Use

1. **Starting New Engagement:** Search for relevant patterns by use case
2. **Hit Pattern Match:** Deploy exactly as documented (don't reinvent)
3. **Measure Results:** Track performance vs. documented benchmarks
4. **Refine Pattern:** Update based on new data

## Template: New Pattern Entry

```markdown
# [Pattern Name]

**Maturity:** [Experimental/Proven/Battle-Tested/Signature]
**Use Case:** [When to deploy]
**Industry:** [All / SaaS / Healthcare / etc.]
**Company Stage:** [Seed / A / B / All]

## Architecture

[Detailed step-by-step implementation]

## Performance Metrics

- **Coverage:** [What % of target accounts get enriched]
- **Cost:** [Avg cost per record]
- **Speed:** [Turnaround time]
- **Quality:** [Accuracy, freshness metrics]

## Deployment Guide

1. [Step 1]
2. [Step 2]
...

## Failure Modes

- **Doesn't work when:** [Conditions]
- **Breaks if:** [Edge cases]
- **Alternative pattern:** [What to use instead]

## Lessons Learned

[Key insights from deployments]

## Version History

- v1.0 (2025-01-15): Initial pattern from [Client Industry/Stage]
- v1.1 (2025-03-20): Improved [what] based on [engagement]
```

## Contributing

After completing an engagement, extract patterns using the feedback loop workflow. Don't wait—patterns are most accurate when documented immediately after deployment.

---

**Patterns are leverage. Build the library.**
