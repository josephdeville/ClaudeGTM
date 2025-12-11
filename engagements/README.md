# Engagements

> **Track projects, extract learnings, build institutional knowledge**

## Purpose

Every engagement has two outputs:
1. **Deliverable:** The system you build for the client
2. **Intelligence:** The patterns you learn for future projects

This directory manages both.

## Structure

```
engagements/
├── active/           # Current projects in flight
├── completed/        # Finished projects with retrospectives
└── templates/        # Reusable engagement structures
```

## Engagement Lifecycle

```
New Opportunity
       ↓
Create engagement folder (from template)
       ↓
Discovery & Scoping (document in /discovery)
       ↓
Implementation (track progress in /builds)
       ↓
Delivery & Handoff (document in /delivery)
       ↓
Move to completed/
       ↓
Retrospective (extract learnings)
       ↓
Feed intelligence back to intelligence/
```

## Engagement Folder Structure

```
engagements/active/[CLIENT-NAME]-[START-DATE]/
├── README.md                 # Engagement overview
├── discovery/
│   ├── client-profile.md     # Company stage, industry, tech stack
│   ├── requirements.md       # What they need
│   ├── scope.md              # What you're building
│   └── success-metrics.md    # How to measure results
├── builds/
│   ├── architecture.md       # System design
│   ├── clay-tables/          # Links/exports of Clay work
│   ├── integrations/         # CRM/tool integration docs
│   └── progress-log.md       # Build timeline and decisions
├── delivery/
│   ├── handoff-doc.md        # Client-facing documentation
│   ├── training-materials/   # Guides, videos, etc.
│   └── maintenance-plan.md   # Ongoing support scope
└── retrospective/
    ├── what-worked.md        # Patterns to keep
    ├── what-didnt.md         # Things to avoid
    ├── intelligence-extract.md  # Learnings for intelligence/
    └── metrics.md            # Actual results vs. targets
```

## Templates vs. Custom

**Use Templates (90% of engagements):**
- Standard discovery questions
- Scope document format
- Retrospective structure
- Success metrics framework

**Customize When Needed:**
- Unique industry requirements
- Unusual technical constraints
- Complex multi-phase projects

## Engagement Naming Convention

`[CLIENT-INDUSTRY]-[STAGE]-[START-DATE]`

**Examples:**
- `saas-series-a-2025-01-15`
- `healthcare-seed-2025-02-20`
- `fintech-series-b-2025-03-10`

**Why this format:**
- Anonymizes client (if needed for intelligence sharing)
- Immediately shows stage (for pattern matching)
- Chronological sorting
- Easy to aggregate by industry/stage

## Active Engagements

**This is your current work.** Keep it organized because:
- You might have 2-5 concurrent projects
- Context switching is expensive
- Clear documentation = faster execution

**Daily Practice:**
- Update progress logs
- Document decisions (why you chose Pattern X over Pattern Y)
- Note surprises (unexpected client needs, tool limitations)

## Completed Engagements

**This is your learning library.** The value is in the retrospective:

**Required Retrospective Elements:**
1. **What patterns worked?** → Feed to `intelligence/patterns/`
2. **What stage-specific insights?** → Feed to `intelligence/playbooks/`
3. **What compliance issues?** → Feed to `intelligence/compliance/`
4. **What timing signals?** → Feed to `intelligence/timing/`
5. **What would you do differently?** → Improve templates

**Retrospective Timing:**
Do it immediately after delivery, while details are fresh. Waiting 2 weeks = lose 50% of insights.

## Success Metrics

Track these for every engagement:

**Delivery Metrics:**
- Planned timeline vs. actual
- Planned budget vs. actual
- Scope creep (hours on out-of-scope work)

**Performance Metrics:**
- Client success metrics (pipeline, conversion, etc.)
- System performance (enrichment hit rate, speed, cost)
- Adoption (is the client actually using it?)

**Learning Metrics:**
- New patterns discovered
- Existing patterns validated
- Intelligence entries created

## Client Anonymization

For intelligence sharing (if you ever hire/collaborate):

**In engagement folders:** Use real client names (you need context)

**In intelligence layer:** Use anonymized descriptors
- ❌ "Acme Corp needed..."
- ✅ "Series A SaaS company needed..."
- ✅ "Healthcare startup needed..."

## Contributing to Intelligence

After completing engagement:

1. **Run retrospective** (use template)
2. **Extract patterns** → Document in `intelligence/patterns/`
3. **Update playbook** → Add insights to relevant stage in `intelligence/playbooks/`
4. **Document compliance** → Note any compliance learnings in `intelligence/compliance/`
5. **Track timing** → What signals led to this engagement? Add to `intelligence/timing/`

## Templates

Standard engagement templates live in `templates/`:
- Discovery questionnaire
- Scope document
- Architecture doc
- Retrospective guide

**Philosophy:** Templates are starting points, not straightjackets. Use 80% as-is, customize 20% as needed.

---

**Every engagement makes you smarter. Capture the learning.**
