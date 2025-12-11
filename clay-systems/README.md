# Clay Systems

> **Reusable components, battle-tested templates, proven architectures**

## Purpose

This is your **component library** for Clay implementations. Instead of rebuilding from scratch every time, you deploy proven patterns.

**Principle:** DRY (Don't Repeat Yourself) applies to GTM engineering too.

## What Lives Here

```
clay-systems/
├── tables/           # Clay table templates (export/import ready)
├── enrichments/      # Enrichment waterfall patterns
├── automations/      # Automation blueprints (triggers, workflows)
└── integrations/     # Integration patterns (Clay → other tools)
```

## Not Your Client Work

**Important Distinction:**

**This directory:** Generic, reusable components
**Engagements directory:** Client-specific implementations

**Example:**
- `clay-systems/tables/standard-company-enrichment.json` ← Generic template
- `engagements/active/saas-series-a-2025-01/builds/clay-tables/acme-companies.json` ← Client-specific

**Why separate?**
- Clean reusable components (no client data)
- Easy to deploy templates
- Clear intellectual property boundaries

## Using Clay Systems

### Starting New Engagement

1. **Review templates** - What's already built?
2. **Select closest match** - Don't start from zero
3. **Clone & customize** - Copy to engagement folder, modify for client
4. **Document changes** - What did you have to change? Why?

### After Engagement

1. **Extract generic patterns** - What's reusable?
2. **Create/update template** - Add to clay-systems/
3. **Document usage** - When to use this template

## Template Evolution

**v1:** Built for first client
**v2:** Generalized from first client, improved for second
**v3:** Battle-tested across 3+ clients, highly refined

**Mark maturity in template docs:**
- 🔬 Experimental (1 deployment)
- ✅ Proven (2-3 deployments)
- 💎 Battle-Tested (5+ deployments)

## Component Categories

### Tables
Clay table templates that can be imported/cloned

**Examples:**
- Company enrichment (firmographics, technographics)
- Contact finder (decision-maker identification)
- Intent signals (funding, hiring, tech changes)
- Account scoring (qualification criteria)

### Enrichments
Waterfall sequences for specific data needs

**Examples:**
- Email finding waterfall (Apollo → Hunter → Clearbit)
- Phone number enrichment (ZoomInfo → Lusha)
- Technographic data (BuiltWith → Wappalyzer → manual)
- Job posting analysis (scraping → categorization)

### Automations
Trigger-based workflows

**Examples:**
- New funding → enrich → notify sales
- New hire in target role → find contact → create task
- Website visitor → company enrichment → scoring → routing
- Daily list refresh → update CRM → alert on changes

### Integrations
Patterns for connecting Clay to other tools

**Examples:**
- Clay → HubSpot sync (create/update contacts & companies)
- Clay → Salesforce (bulk operations, field mapping)
- Clay → Slack (alerts, approvals, notifications)
- Clay → Outreach/Salesloft (sequence enrollment)

## Quality Standards

**Every template should include:**

1. **Purpose** - What does this solve?
2. **Use case** - When to deploy this
3. **Prerequisites** - What's needed (data sources, integrations)
4. **Setup guide** - How to deploy
5. **Configuration** - What to customize
6. **Expected performance** - Hit rates, costs, timing
7. **Failure modes** - When this doesn't work
8. **Version history** - How it's evolved

## Template Naming

**Format:** `[use-case]-[stage/industry]-[version].json`

**Examples:**
- `company-enrichment-standard-v2.json`
- `contact-finder-enterprise-v1.json`
- `intent-signals-saas-v3.json`

**Version bumps:**
- v1 → v2: Minor improvements
- v2 → v3: Major architecture changes
- Append `-experimental` for untested variants

## Template Documentation

Each template has corresponding `.md` file:

```
tables/
├── company-enrichment-standard-v2.json    # The template
└── company-enrichment-standard-v2.md      # The documentation
```

**Documentation format:**
```markdown
# [Template Name]

**Maturity:** [🔬/✅/💎]
**Version:** [X.Y]
**Use Case:** [Description]
**Best For:** [Stage/industry/scenario]

## What This Does

[Detailed explanation]

## When to Use

✅ Use when:
- [Scenario 1]
- [Scenario 2]

❌ Don't use when:
- [Scenario 1]
- [Scenario 2]

## Prerequisites

**Required:**
- [ ] Clay workspace
- [ ] [Data provider] API key
- [ ] [Integration] connected

**Optional:**
- [ ] [Additional tool]

## Setup Guide

1. [Step 1]
2. [Step 2]
...

## Configuration Points

**Must customize:**
- [Setting 1]: [What to change]
- [Setting 2]: [What to change]

**Optional customization:**
- [Setting 3]: [When to change]

## Performance Benchmarks

**Based on [X] deployments:**
- Coverage: [Y]%
- Avg cost per record: $[Z]
- Processing time: [N] hours for [X] records
- Data freshness: [Daily/weekly/etc.]

## Failure Modes

**Breaks when:**
- [Condition 1]
- [Condition 2]

**Alternative:**
Use [other template] instead

## Evolution Notes

- v1.0: Initial version from [engagement]
- v1.1: Added [feature] based on [learning]
- v2.0: Restructured [component] for [reason]
```

## Contributing

**After building something reusable:**

1. **Sanitize** - Remove client-specific data
2. **Generalize** - Make configurable, not hardcoded
3. **Document** - Write clear setup guide
4. **Test** - Verify template works as standalone
5. **Version** - Mark maturity level
6. **Link** - Reference in intelligence/patterns/ if applicable

## Integration with Intelligence Layer

**Flow:**
```
Build for client → Extract pattern → Document in intelligence/patterns/ → Create template in clay-systems/
```

**Example:**
1. You build custom enrichment for Series A SaaS client
2. Extract the pattern → Document in `intelligence/patterns/series-a-enrichment.md`
3. Create generic template → `clay-systems/tables/company-enrichment-series-a-v1.json`
4. Next Series A client → Deploy template, don't rebuild

## Clay-Specific Best Practices

**Table Design:**
- Clear naming conventions (prefix with purpose)
- Modular structure (separate concerns)
- Error handling (fallback enrichments)
- Cost optimization (waterfall from cheap → expensive)

**Enrichment Waterfalls:**
- Try free/cheap sources first
- Cache results (don't re-enrich unnecessarily)
- Monitor hit rates (adjust sequence based on performance)
- Document provider reliability

**Automation:**
- Idempotent operations (safe to run multiple times)
- Rate limit handling
- Error notifications (don't fail silently)
- Logging (track what happened)

**Integrations:**
- Field mapping documentation
- De-duplication strategy
- Sync frequency (real-time vs. batch)
- Rollback plan (what if sync breaks?)

---

**Build once, deploy many times. That's leverage.**
