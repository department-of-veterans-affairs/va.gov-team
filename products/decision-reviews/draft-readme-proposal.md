# Decision Reviews Product Documentation

**Last updated:** 2025-08-01

## Purpose & Audience

This README serves as the central hub for the Decision Reviews product team. It's designed for:
- **New team members** joining the project (primary audience)
- **Cross-functional VA teams** needing to understand our product
- **Stakeholders** requiring high-level product information

---

## Table of Contents

### 🎯 Product Overview
- [Executive Summary](#executive-summary)
- [Product Vision & Strategy](#product-vision--strategy)
- [Key Stakeholders](#key-stakeholders)
- [Success Metrics](#success-metrics)

### 🚀 Getting Started
- [New Team Member Onboarding](#new-team-member-onboarding)
- [Quick Links & Resources](#quick-links--resources)
- [How to Contribute](#how-to-contribute)

### 👥 Team Resources by Discipline
- [Product Management](#product-management)
- [Engineering](#engineering)
- [Design](#design)
- [Research](#research)

### 📋 Operations
- [Planning & Boards](#planning--boards)
- [Testing & Quality](#testing--quality)
- [Support & Triage](#support--triage)

---

## 🎯 Product Overview

### Executive Summary

The Decision Reviews product enables Veterans to file for reviews and appeals of VA claim decisions through self-service digital forms on VA.gov. As of 2023, all decision review forms are available online, marking a major milestone in digital transformation.

**Our Forms:**
- **VA Form 20-0995:** Supplemental Claim (SC)
- **VA Form 20-0996:** Higher-Level Review (HLR)  
- **VA Form 10182:** Board Appeal (Notice of Disagreement)

### Product Vision & Strategy

**Vision:** Transform Decision Reviews from individual forms into a personalized experience that rivals the value Veterans get from VSOs and accredited representatives.

**Current Focus Areas:**
1. **Stability** - Ensuring reliable form submission and processing
2. **Transaction Growth** - Increasing digital adoption over paper forms
3. **Personalization** - Creating a holistic, user-centered experience

[View Product Roadmap →](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1714756346541/)

### Key Stakeholders

| Stakeholder | Contact | What They Help With |
|------------|---------|-------------------|
| **Lighthouse API** | Michael Hobson | API requirements, endpoint prioritization |
| **VBA** | Alejandro Mendiola | Policy & legal requirements for SC/NOD |
| **BVA** | John Gosnell | Board appeal decisions & requirements |
| **Centralized Mail** | Melissa Feidler | CMP/EMMS API requirements |

[View All Stakeholders →](#full-stakeholder-list)

### Success Metrics

**Primary KPIs:**
- Digital submission rate vs. paper forms
- Form completion rate
- Time to submit
- Veteran satisfaction (CSAT)

**Current Performance:**
- ~99% of Save-in-Progress forms are abandoned
- 30-40% submission rate for Veterans who return to saved forms
- [View Live Dashboard →](#)

---

## 🚀 Getting Started

### New Team Member Onboarding

**Week 1: Understand the Domain**
1. [ ] Read this README completely
2. [ ] Review [VA Decision Reviews Overview](https://www.va.gov/decision-reviews/)
3. [ ] Complete VA onboarding & get system access
4. [ ] Schedule 1:1s with team leads

**Week 2: Dive Into Your Discipline**
- **Engineers:** See [Engineering Onboarding](#engineering-onboarding)
- **Designers:** See [Design Onboarding](#design-onboarding)
- **PMs:** See [Product Onboarding](#product-onboarding)

### Quick Links & Resources

**Daily Work:**
- [Sprint Board](https://github.com/orgs/department-of-veterans-affairs/projects/1026/views/1)
- [Team Slack: #benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)
- [Team Calendar](#)

**Documentation:**
- [Technical Architecture](./docs/engineering/architecture.md)
- [Design System](./docs/design/design-system.md)
- [Research Repository](./research/)

### How to Contribute

1. **Documentation:** PRs welcome! Follow our [docs standards](./docs/CONTRIBUTING.md)
2. **Code:** See discipline-specific contribution guides
3. **Ideas:** Drop them in [#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK)

---

## 👥 Team Resources by Discipline

### Product Management

**Key Resources:**
- [Product Strategy Document](./docs/product/strategy.md)
- [Roadmap & Planning](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1714756346541/)
- [Analytics & Reporting](./docs/product/analytics.md)

**Regular Activities:**
- Sprint Planning: Mondays @ 10am
- Stakeholder Sync: Thursdays @ 2pm
- [PM Playbook](./docs/product/playbook.md)

### Engineering

#### Engineering Onboarding

**Getting Started:**
1. [Local Development Setup](./docs/engineering/setup.md)
2. [Architecture Overview](./docs/engineering/architecture.md)
3. [API Documentation](./docs/engineering/apis.md)

**Key Codebases:**
- `vets-website`: Frontend forms [→ Setup Guide](./docs/engineering/frontend-setup.md)
- `vets-api`: Backend services [→ Setup Guide](./docs/engineering/backend-setup.md)
- `lighthouse`: Decision Reviews API [→ Integration Guide](./docs/engineering/lighthouse-integration.md)

**Development Workflow:**
```bash
# Frontend
cd vets-website
yarn install
yarn watch --env.buildtype=localhost

# Backend
cd vets-api
bundle install
rails server
```

**Testing:**
- [Test User Credentials](./docs/engineering/test-users.md)
- [E2E Testing Guide](./docs/engineering/e2e-testing.md)
- [Error Codes Reference](./docs/engineering/error-codes.md)

### Design

**Design Resources:**
- [Figma Files](#)
- [Design Patterns Library](./docs/design/patterns.md)
- [Accessibility Guidelines](./docs/design/accessibility.md)

**Research:**
- [Research Repository](./research/)
- [Recent Findings](./research/2024-findings.md)
- [Research Participant Recruiting](./docs/research/recruiting.md)

### Research

**Key Documents:**
- [Research Plan Template](./docs/research/research-plan-template.md)
- [Synthesis Guidelines](./docs/research/synthesis-guide.md)
- [Research Repository](./research/)

---

## 📋 Operations

### Planning & Boards

**Sprint Planning:**
- [Active Sprint Board](https://github.com/orgs/department-of-veterans-affairs/projects/1026/views/1)
- [Backlog Refinement](#)
- [Quarterly Planning](./docs/planning/quarterly-planning.md)

### Testing & Quality

**Test Environments:**
- **Staging:** [staging.va.gov](https://staging.va.gov)
- **Dev:** [dev.va.gov](https://dev.va.gov)

**Quality Tools:**
- [TestRail Test Cases](https://dsvavsp.testrail.io/index.php?/suites/view/6)
- [Defect Triage Board](https://github.com/orgs/department-of-veterans-affairs/projects/876/views/1)

### Support & Triage

**Defect Severity Definitions:**

| Severity | Description | Response Time |
|----------|-------------|--------------|
| **Critical** | All users blocked, data at risk | Same sprint |
| **Moderate** | Some users impacted, workaround exists | Next sprint |
| **Minor** | Cosmetic issues, spelling errors | 1-3 sprints |

[Full Triage Process →](./docs/operations/triage-process.md)

---

## 📚 Appendix

### Full Stakeholder List

[Detailed stakeholder table with all contacts and responsibilities]

### Technical Diagrams

- [System Architecture](./docs/diagrams/system-architecture.md)
- [Form Submission Flow](./docs/diagrams/submission-flow.md)
- [API Integration Map](./docs/diagrams/api-integrations.md)

### Historical Context

- [Legacy README (Archived)](./docs/archive/README-2024-05.md)
- [Decision Log](./docs/decisions/)
- [Post-Mortems](./docs/post-mortems/)

---

**Questions?** Reach out in [#benefits-decision-reviews](https://dsva.slack.com/archives/C5AGLBNRK) or contact the team leads.
