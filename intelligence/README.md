# Intelligence Layer

> **This is your competitive moat. Everything here is proprietary knowledge that compounds over time.**

## Purpose

The intelligence layer captures **what actually works** across engagements. This is not theory—it's battle-tested patterns, proven playbooks, and hard-won insights about compliance, timing, and performance.

## The Four Intelligence Domains

### 1. Patterns (`patterns/`)
**What implementation patterns work for different scenarios?**

- Enrichment waterfall sequences
- Data source combinations that deliver results
- Integration architectures that scale
- Automation patterns that don't break

**Key Question:** "I've seen this before—what pattern worked last time?"

### 2. Playbooks (`playbooks/`)
**Stage-specific approaches for different company types**

- Seed stage: Minimal viable enrichment
- Series A: Scaling from 10→100 accounts
- Series B: Enterprise-ready compliance + scale

**Key Question:** "What's the right system architecture for a Series A SaaS company?"

### 3. Compliance (`compliance/`)
**What triggers compliance events? What patterns are safe?**

- GDPR/CCPA patterns that work
- Industry-specific restrictions (healthcare, finance)
- Red flags that kill deals
- Safe harbor patterns

**Key Question:** "Can I do this without triggering compliance issues?"

### 4. Timing (`timing/`)
**When do companies buy? What signals indicate readiness?**

- Buying signals (hiring, funding, tool adoption)
- Trigger events that create urgency
- Seasonal patterns
- Decision-making timelines

**Key Question:** "When is this prospect actually ready to buy?"

## How Intelligence Accumulates

```
Project Completion
       ↓
Extract Patterns (feedback-loops/extraction/)
       ↓
Synthesize Insights (feedback-loops/synthesis/)
       ↓
Document in Intelligence Layer (here)
       ↓
Deploy in Next Engagement
       ↓
Measure Results → Refine Pattern
       ↓
    (loop)
```

## Intelligence Quality Standards

**Every intelligence entry should answer:**
1. **What worked?** (the pattern/insight)
2. **In what context?** (company stage, industry, use case)
3. **How do you know?** (metrics, outcomes, client feedback)
4. **When does it not work?** (failure modes, edge cases)

**Bad Intelligence (Don't Capture):**
- "We should try X" (theory, not proven)
- "Client wanted Y" (preference, not performance)
- "I think Z would work" (opinion, not data)

**Good Intelligence (Do Capture):**
- "Apollo + ZoomInfo sequence increased contact rate 34% for Series A SaaS"
- "Clay→HubSpot sync breaks above 10K records without field mapping strategy"
- "GDPR companies require explicit consent workflow—blocked 3 deals without it"

## Defensibility

This layer creates competitive advantage because:
- **You can't Google this** - It's learned from real implementations
- **Competitors can't replicate** - They haven't seen these patterns
- **Compounds over time** - Gets stronger with every project
- **Creates information asymmetry** - You know what works, they're guessing

## Access Control

**Internal Use Only.** This is proprietary business intelligence.

Sanitize client-specific details before documenting patterns. Focus on:
- Industry/stage (not company names)
- Pattern performance (not client revenue)
- Technical architecture (not business strategy)

## Contributing

After every engagement:
1. Extract learnings using `feedback-loops/extraction/` workflows
2. Document patterns in the appropriate domain
3. Update playbooks with new stage-specific insights
4. Tag patterns with metadata (industry, stage, performance metrics)

---

**This is where you get unfair advantages.**
