# Compliance Intelligence

> **What triggers compliance events? What patterns are safe? What kills deals?**

## Purpose

Compliance is a **minefield**. One wrong pattern can:
- Kill a $30K engagement
- Expose your client to lawsuits
- Destroy your reputation

This directory captures **hard-won compliance intelligence**—not legal theory, but practical patterns that work (or don't) in the real world.

## Critical Principle

**You are not a lawyer.** This intelligence is:
- ✅ Operational patterns observed in practice
- ✅ Common requirements from enterprise buyers
- ✅ Technical implementations that pass security reviews
- ❌ Not legal advice
- ❌ Not compliance guarantees
- ❌ Not a substitute for client's legal counsel

**Always:** Recommend clients consult their legal/compliance teams for final approval.

## Compliance Domains

### 1. GDPR (EU Data Protection)

**Key Intelligence to Capture:**
- What enrichment patterns trigger GDPR concerns?
- How do you handle EU contacts in Clay tables?
- What consent workflows actually work?
- Which data providers are GDPR-compliant?
- What documentation do enterprise buyers require?

### 2. CCPA (California Consumer Privacy)

**Key Intelligence to Capture:**
- California resident identification patterns
- Opt-out handling workflows
- Data deletion request processes
- What disclosures are required?

### 3. Industry-Specific Regulations

**Healthcare (HIPAA)**
- What health-related data can/can't you enrich?
- BAA requirements for data providers
- Patterns that triggered flags

**Finance (SOC 2, PCI)**
- Security review requirements
- Data handling restrictions
- Approved vendor lists

**Government (FedRAMP, ITAR)**
- (Likely not your market, but document if encountered)

### 4. Sales/Marketing Regulations

**CAN-SPAM, TCPA (US)**
- Email enrichment patterns that comply
- Phone number handling
- Opt-out mechanisms

**CASL (Canada)**
- Implied vs. explicit consent
- Record-keeping requirements

## Compliance Pattern Format

```markdown
# [Compliance Topic]

## What Triggers This?

[Specific actions/patterns that raise compliance concerns]

## Regulated Context

- **Geography:** [EU, California, etc.]
- **Industry:** [Healthcare, Finance, All]
- **Company Stage:** [When this becomes relevant]

## Safe Patterns (✅ Known to Work)

### Pattern: [Name]

**What it is:**
[Description]

**Why it's safe:**
[Compliance reasoning]

**Evidence:**
- Passed [X] enterprise security reviews
- Deployed at [Y] regulated companies
- No compliance issues in [Z] months of operation

**Implementation:**
[Technical details]

## Unsafe Patterns (❌ Known to Fail)

### Pattern: [Name]

**What it is:**
[Description]

**Why it's unsafe:**
[Compliance issue]

**Evidence:**
- Blocked [X] deals
- Triggered [Y] compliance reviews
- Client legal rejected because [Z]

**What to use instead:**
[Alternative safe pattern]

## Gray Areas (⚠️ Unclear/Evolving)

### Pattern: [Name]

**What it is:**
[Description]

**Why it's unclear:**
[Ambiguity]

**Current approach:**
[How you're handling it]

**Risk mitigation:**
[How to minimize exposure]

## Version History

- [Date]: [Update based on new engagement/ruling/client feedback]
```

## Red Flags: When to Stop

**Immediate Deal-Breakers:**
- Client asks you to enrich healthcare data without BAA
- Client wants to scrape data in violation of provider ToS
- Client wants to "hide" data sources from compliance review
- Client wants to proceed despite failed security review

**When in doubt:** Recommend they consult legal. Better to lose a deal than create liability.

## Compliance Documentation Templates

### Enterprise Security Review Response

*(Template for when clients need compliance documentation)*

```
[Company] GTM Data Enrichment System - Compliance Overview

Data Sources:
- [Provider 1]: [Compliance certifications]
- [Provider 2]: [Compliance certifications]

Data Handling:
- Storage: [Clay infrastructure details]
- Access controls: [Who can see data]
- Retention: [How long data is kept]
- Deletion: [How to purge data]

Privacy Compliance:
- GDPR: [Approach]
- CCPA: [Approach]
- Consent: [How obtained/tracked]

Security:
- Encryption: [In transit and at rest]
- Access logs: [Audit trail]
- Vendor certifications: [SOC 2, etc.]
```

## Common Enterprise Requirements

**What enterprise buyers typically ask for:**

1. **Data Source Documentation**
   - Full list of providers
   - Their compliance certifications
   - How data is sourced (scraped vs. consented)

2. **Data Flow Diagrams**
   - Where data enters the system
   - How it's processed
   - Where it's stored
   - How it's deleted

3. **Privacy Impact Assessment**
   - What personal data is collected
   - Legal basis for processing
   - Retention periods
   - Individual rights handling

4. **Vendor Security Questionnaires**
   - SOC 2 reports
   - Penetration test results
   - Incident response procedures

**Intelligence to Capture:** Which of these can be standardized? Which require custom responses?

## Compliance by Company Stage

### Seed Stage
- Usually don't care (yet)
- Exception: Healthcare/finance startups
- Build correctly from the start anyway

### Series A
- Starting to care
- First enterprise deals require basic compliance
- Need simple documentation

### Series B
- Mission-critical
- Enterprise buyers demand full compliance
- Security reviews are standard
- Failed compliance = lost deals

## Contributing

After every engagement involving compliance:

1. **Document new patterns** (safe, unsafe, gray area)
2. **Update evidence counts** (how many times pattern validated)
3. **Capture enterprise requirements** (what did buyer ask for?)
4. **Note failure modes** (what triggered red flags?)

**Especially important:** Document near-misses and rejected patterns—learning what doesn't work is as valuable as knowing what does.

## Tools & Resources

**Compliance Checking:**
- Email validation services (catch risk domains)
- Data provider compliance pages (bookmark key ones)
- Template security questionnaires (from past engagements)

**Client Education:**
- One-pagers on GDPR/CCPA for Clay systems
- Compliance FAQ for common questions
- Risk assessment frameworks

---

**Compliance is a competitive advantage. Most GTM engineers ignore it until it kills a deal. You won't.**
