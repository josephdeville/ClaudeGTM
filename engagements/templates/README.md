# Engagement Templates

> **Standard structures for 90% of projects**

## Purpose

Templates ensure:
- Consistent project organization
- No missed discovery questions
- Standardized retrospectives (for pattern extraction)
- Faster engagement setup

## Available Templates

### 1. Standard GTM System Implementation

**Use for:** Typical $5K-$50K Clay + CRM integration project

**Includes:**
- Discovery questionnaire (company stage, tech stack, requirements)
- Scope template (standard deliverables)
- Architecture doc (Clay tables + integrations)
- Retrospective guide (intelligence extraction)

**Timeline:** 4-12 weeks

### 2. Fast-Track POC (Seed Stage)

**Use for:** Seed-stage companies needing quick validation

**Includes:**
- Simplified discovery (speed over completeness)
- Minimal viable scope
- 2-week delivery plan
- Lightweight retrospective

**Timeline:** 1-2 weeks

### 3. Enterprise Implementation (Series B+)

**Use for:** Companies requiring compliance, scale, enterprise integrations

**Includes:**
- Extended discovery (compliance requirements, security review)
- Multi-phase scope (design → pilot → scale)
- Architecture doc with compliance documentation
- Comprehensive retrospective

**Timeline:** 8-16 weeks

## Template Usage

### Creating New Engagement

```bash
# Copy template to active engagements
cp -r templates/standard-gtm-implementation active/[CLIENT-NAME]-[DATE]

# Customize README with client details
# Fill out discovery docs
# Update scope based on client needs
```

### Template Structure

Each template includes:

```
template-name/
├── README.md                # Template overview & instructions
├── discovery/
│   ├── _template-client-profile.md
│   ├── _template-requirements.md
│   ├── _template-scope.md
│   └── _template-success-metrics.md
├── builds/
│   ├── _template-architecture.md
│   └── _template-progress-log.md
├── delivery/
│   ├── _template-handoff-doc.md
│   └── _template-maintenance-plan.md
└── retrospective/
    ├── _template-retrospective.md
    └── _template-intelligence-extract.md
```

**Naming convention:** Files prefixed with `_template-` are meant to be renamed and filled out.

## Template Customization

**When to customize:**
- Unique industry requirements (healthcare, finance)
- Unusual technical stack (non-standard CRM)
- Complex multi-phase projects
- Specialized use cases

**How to customize:**
1. Start with closest template
2. Add/remove sections as needed
3. Document customization in engagement README
4. If pattern repeats 3+ times → create new template

## Template Maintenance

**After each engagement:**
- Did you add custom discovery questions? → Consider adding to template
- Did you skip template sections? → Maybe remove from template
- Did you wish template had X? → Add it

**Quarterly review:**
- Which templates are most-used?
- Which sections are always deleted? (remove them)
- What new templates are needed?

## Discovery Templates

### Client Profile Template

```markdown
# Client Profile

**Company:** [Name]
**Industry:** [SaaS / Healthcare / Fintech / etc.]
**Stage:** [Seed / Series A / Series B]
**Team Size:** [Number]
**Sales Team:** [Number of reps]

**Current Tech Stack:**
- CRM: [HubSpot / Salesforce / etc.]
- Sales Engagement: [Outreach / Salesloft / none]
- Data Sources: [What they use today]
- Other tools: [Relevant integrations]

**Current GTM Motion:**
- Target accounts/month: [Number]
- ICP: [Description]
- Sales process: [Inbound / Outbound / Both]

**Constraints:**
- Budget: $[X]K - $[Y]K
- Timeline: [Weeks]
- Compliance: [GDPR / HIPAA / SOC 2 / etc.]
- Technical: [API limits, legacy systems, etc.]
```

### Requirements Template

```markdown
# Requirements

## Business Objectives

**What problem are they solving?**
[Description]

**What does success look like?**
[Specific outcomes]

**What's driving urgency?**
[Why now?]

## Functional Requirements

**Data Enrichment:**
- [ ] Company data (firmographics, technographics)
- [ ] Contact data (decision-makers, emails, phones)
- [ ] Intent signals (funding, hiring, tech adoption)
- [ ] Custom: [Specify]

**Integrations:**
- [ ] CRM sync (which fields, frequency)
- [ ] Sales tool integration (which one)
- [ ] Notification/alerting (Slack, email)
- [ ] Custom: [Specify]

**Automation:**
- [ ] Triggered enrichment (what triggers)
- [ ] Scoring/routing (criteria)
- [ ] List building (cadence)
- [ ] Custom: [Specify]

## Non-Functional Requirements

**Scale:**
- Expected volume: [X] accounts/month
- Growth plan: [How will volume change]

**Performance:**
- Enrichment speed: [Real-time / batch / etc.]
- Data freshness: [Daily / weekly / monthly]

**Compliance:**
- GDPR/CCPA: [Required / Not applicable]
- Industry regulations: [HIPAA / SOC 2 / etc.]
- Security review: [Required / Not required]

**Operability:**
- Training: [Who needs to be trained]
- Maintenance: [Who will maintain]
- Support: [What ongoing support needed]
```

### Scope Template

```markdown
# Scope of Work

## In Scope

### Deliverables

**1. Clay Table Architecture**
- [Table 1]: [Purpose]
- [Table 2]: [Purpose]
- [Table 3]: [Purpose]

**2. Integrations**
- [Integration 1]: [What syncs where]
- [Integration 2]: [What syncs where]

**3. Documentation**
- Architecture diagram
- User guide (for client team)
- Maintenance playbook

**4. Training**
- [X] hour training session
- Recorded walkthrough
- Q&A support during launch

### Success Metrics

- **Metric 1:** [Target]
- **Metric 2:** [Target]
- **Metric 3:** [Target]

## Out of Scope

- [Thing 1 that client might assume but isn't included]
- [Thing 2 that client might assume but isn't included]

## Timeline

**Week 1-2:** Discovery & Design
- Finalize architecture
- Data source selection
- Integration mapping

**Week 3-6:** Implementation
- Build Clay tables
- Configure integrations
- Testing & validation

**Week 7-8:** Delivery & Training
- Documentation
- Training sessions
- Launch support

**Week 9-12:** Stabilization (if applicable)
- Monitor performance
- Optimization
- Handoff to client team

## Investment

**Professional Services:** $[X]K
- Discovery: [Hours] @ $[rate]
- Implementation: [Hours] @ $[rate]
- Training: [Hours] @ $[rate]

**Ongoing Costs (Client Direct):**
- Clay credits: ~$[X]/month
- Data providers: ~$[X]/month
- Maintenance: ~$[X]/month (if applicable)

**Total Project Investment:** $[X]K - $[Y]K

## Assumptions

- Client provides timely access to systems (CRM, etc.)
- Client SME available for questions (X hours/week)
- No major scope changes mid-project
- Standard compliance requirements (if special, note here)

## Change Management

Changes to scope require:
1. Written change request
2. Impact assessment (timeline, budget)
3. Mutual agreement before proceeding
```

### Retrospective Template

```markdown
# Engagement Retrospective

**Client:** [Industry-Stage] (anonymize)
**Duration:** [Actual weeks]
**Budget:** [Actual hours/cost]
**Date Completed:** [YYYY-MM-DD]

## Outcomes

**Planned Success Metrics:**
- Metric 1: [Target] → [Actual]
- Metric 2: [Target] → [Actual]
- Metric 3: [Target] → [Actual]

**Client Satisfaction:** [1-10]
**System Adoption:** [High / Medium / Low]
**Would they hire again?** [Yes / No / Maybe]

## What Worked Well

### Patterns That Delivered
1. **[Pattern Name]** (link to intelligence/patterns/)
   - Why it worked: [Context]
   - Evidence: [Metrics]

2. **[Pattern Name]**
   - Why it worked:
   - Evidence:

### Effective Processes
- [What process worked?]
- [What communication pattern?]
- [What delivery approach?]

## What Didn't Work

### Patterns That Failed
1. **[Pattern Name]**
   - Why it failed: [Reason]
   - What to do instead: [Alternative]

2. **[Pattern Name]**
   - Why it failed:
   - What to do instead:

### Process Issues
- [What caused delays?]
- [What caused confusion?]
- [What would you change?]

## Intelligence Extracted

### New Patterns → intelligence/patterns/
- [ ] [Pattern name]: [Brief description]
- [ ] [Pattern name]: [Brief description]

### Playbook Updates → intelligence/playbooks/
- [ ] [Stage-specific insight]
- [ ] [Stage-specific insight]

### Compliance Learnings → intelligence/compliance/
- [ ] [Compliance issue encountered]
- [ ] [Safe pattern validated]

### Timing Insights → intelligence/timing/
- **What triggered this engagement?** [Signal]
- **How long from trigger to close?** [Days]
- **Update timing intelligence?** [Yes / No]

## Future Opportunities

**Upsell Potential:** [Yes / No]
- [What additional work could you do?]

**Referral Potential:** [High / Medium / Low]
- [Would they refer? To whom?]

**Case Study Potential:** [Yes / No]
- [Interesting story? Unique results?]

## Action Items

- [ ] Document new patterns in intelligence/
- [ ] Update playbook for this stage
- [ ] Update templates based on learnings
- [ ] Follow up with client in 30/60/90 days
- [ ] Request testimonial/referral (if appropriate)

## Lessons Learned

**For next similar engagement:**
1. [Do this differently]
2. [Start with this instead]
3. [Avoid this]

**For templates:**
- [Add this to discovery]
- [Change scope format]
- [Improve this doc]
```

## Using Templates Effectively

1. **Don't skip steps** - Templates exist because these steps matter
2. **Customize thoughtfully** - Change with reason, not whim
3. **Feed back learnings** - Update templates after each project
4. **Create new when needed** - If you do something 3x, templateize it

---

**Templates are force multipliers. Use them.**
