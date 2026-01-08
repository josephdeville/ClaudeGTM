# Company → Contact → Playbook Enrichment
## Complete Workflow Output for 105 Companies

### 📊 Summary
- **Total Companies:** 105
- **Playbook Types:** 6 categories
- **Personas Per Company:** 3 (Head of Growth, GTM/RevOps, Demand Gen)
- **Output Format:** CSV with contact placeholders

---

## 🎯 How to Use This Output

### Step 1: Use the CSV Template
Open `COMPLETE-enriched-playbook-output.csv` which contains:
- **Playbook Type** for each company (Milestone, Practitioner, Sector)
- **3 Target Personas** (titles to search for on LinkedIn)
- **3 Named Value Props** (personalized to their pain points)
- **Email Subject & Snippet** (ready-to-customize outreach)
- **Contact Placeholders** (for you to fill in names/emails/LinkedIn)

### Step 2: Find Contacts
For each company, use LinkedIn Sales Navigator or Apollo to find:
1. **Persona 1:** Usually "Head of Growth" or "VP Marketing"
2. **Persona 2:** Usually "VP Revenue Operations" or "Head of GTM"
3. **Persona 3:** Usually "Head of Demand Generation" or "Director of Marketing"

### Step 3: Generate Full Outreach
Once you have contact names, use the provided:
- Named Value Props (e.g., "The Attribution Black Hole")
- Email subjects
- Email snippets

And expand them using the **playbook messaging** for that category.

---

## 📋 Playbook Categories

### Category 1: **Milestone - Series B/C Scaling ($5-20M ARR)**
**Companies:** Revibe, InsightX, On Me, Saladin, Verisoul, Fluency, Echo, Ankar
**Common Personas:** VP RevOps, Head of Growth, VP Customer Success
**Named Value Props:**
- "The Series B Scaling Wall"
- "The RevOps Breakdown Crisis"
- "The Attribution Black Hole"
- "The Partnership Revenue Invisibility"

**Email Template:**
```
Subject: Your Series B just made RevOps your #1 bottleneck

[FirstName],

Most Series B companies at $10-15M ARR hit the same wall: the RevOps infrastructure
that got you to Series A completely breaks when you try to 3x revenue in 24 months.

Your board wants answers to:
- Which channels have best CAC payback?
- What's our win rate by segment?
- How much pipeline is partner-influenced?

But your HubSpot/Salesforce setup can't answer those questions because attribution is broken.

We work with Series B SaaS companies solving this exact problem: [specific value prop].

Worth 15 minutes to see how [similar company] fixed this in 6 weeks?
```

---

### Category 2: **Milestone - Late-Stage/Unicorn Scaling**
**Companies:** Harness (Series E $240M), Serval ($1B), Lovable ($6.6B)
**Common Personas:** VP Platform Engineering, VP Operations, Head of Enterprise
**Named Value Props:**
- "The Tool Sprawl Crisis"
- "The Board-Level Data Panic"
- "The Customer Success Scaling Wall"

**Email Template:**
```
Subject: Your $240M Series E just made [X] your board's top question

[FirstName],

At your scale, every operational process breaks twice. What worked for 100 customers
fails at 1,000.

Post-unicorn companies face brutal pressure:
- Triple velocity AND cut costs 30%
- Scale CS 10x without 10x headcount
- Prove ROI to increasingly skeptical boards

The companies that succeed don't just hire more people - they instrument operations
to know what's working before the board meeting.

[Specific value prop for their situation]

Worth showing you how [similar unicorn] solved this?
```

---

### Category 3: **Practitioner - Head of Growth**
**Companies:** NXXIM, Eikona, Arcads.ai, MoEngage
**Common Personas:** Head of Growth, VP Marketing, Director of Demand Gen
**Named Value Props:**
- "The A/B Testing Chaos Problem"
- "The Conversion Rate Plateau"
- "The CAC Creep Crisis"

**Email Template:**
```
Subject: Your experimentation backlog is growing faster than insights

[FirstName],

Most growth teams at your stage have 50+ experiments in the backlog but no framework
to prioritize which will actually move the needle.

Your analytics show what happened. They don't show what to test next.

Meanwhile:
- Traffic is up 3x, conversions are flat
- CAC is creeping up 15%/quarter
- Board wants to see growth efficiency improving

We help growth teams [specific capability] so you can:
- Cut experiment cycle time 60%
- Increase win rate on tests 2x
- Prove which channels drive real LTV

Worth 15 minutes to see the framework?
```

---

### Category 4: **Sector - DevOps/Infrastructure**
**Companies:** Harness, Runware, Magma
**Common Personas:** VP Platform Engineering, Head of DevOps, VP of Infrastructure
**Named Value Props:**
- "The DevOps Tool Sprawl Crisis"
- "The Cloud Cost Surprise Tax"
- "The Release Velocity Bottleneck"

---

### Category 5: **Sector - HealthTech**
**Companies:** Valerie Health, Punto Health, Mindoo, Solon Biotech
**Common Personas:** VP of Operations, Head of Product, Chief Clinical Officer
**Named Value Props:**
- "The Healthcare Compliance Velocity Drag"
- "The Patient Data Integration Nightmare"
- "The Clinical Workflow Friction Tax"

---

### Category 6: **Sector - FinTech**
**Companies:** Coinbax, Finalis, PowerUp Money
**Common Personas:** Head of Compliance, VP of Product, Head of Partnerships
**Named Value Props:**
- "The Regulatory Timeline Tax"
- "The KYC/AML Friction Paradox"
- "The Fintech Integration Nightmare"

---

## 📧 Complete Outreach Sequence (3-Touch)

### Email 1: Pattern Interrupt (Day 1)
**Subject:** [Named Value Prop as question]
**Body:** Diagnose their specific pain, quantify the cost, offer proof point

### Email 2: Social Proof (Day 4)
**Subject:** How [Similar Company] solved [Named Value Prop]
**Body:** Case study with before/after metrics, their specific situation

### Email 3: Breakup + FOMO (Day 7)
**Subject:** Closing file - one question
**Body:** Direct ask, scarcity trigger (limited slots), easy yes

---

## 🎯 Next Steps

1. **Open the CSV:** `/home/user/ClaudeGTM/output-contacts/COMPLETE-enriched-playbook-output.csv`
2. **Pick 10 companies** to start with (highest priority)
3. **Find contacts on LinkedIn** using the persona titles provided
4. **Fill in contact info** in the CSV
5. **Use the email templates** above to customize outreach
6. **Track responses** and iterate

---

## 📁 Files Created

1. **COMPLETE-enriched-playbook-output.csv** - Main deliverable with all companies
2. **process-all-companies.py** - Python script for batch processing
3. **company-to-contacts-workflow.md** - Original workflow documentation
4. **enriched-contacts-with-playbooks.md** - ElevenLabs example

---

## 💡 Pro Tips

**Finding Contacts:**
- Use LinkedIn Sales Navigator with filters: `[Company] AND ("Head of Growth" OR "VP Marketing" OR "Revenue Operations")`
- Check company's LinkedIn "People" tab
- Use Apollo.io for email finding
- Check recent funding announcements for new hires

**Personalizing Outreach:**
- Reference their specific funding round ("Saw you raised Series B...")
- Mention recent product launches
- Reference tech stack if visible (HubSpot, Salesforce, etc.)
- Use their industry-specific language

**Tracking Results:**
- Add "Status" column: Contacted, Responded, Meeting Booked, Qualified
- Track response rates by playbook type
- Note which value props resonate most
- Iterate messaging based on feedback
