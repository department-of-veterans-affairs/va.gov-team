# On-Call Overview

Created: 2025-01-27

## Overview

The Health Portal team maintains three distinct on-call responsibilities to ensure system reliability, investigate technical issues, and provide user support. Each serves a specific purpose in our operational model and works together to maintain service quality and team productivity.

## On-Call Types

### 1. Monitoring On-Call
**Purpose**: Respond to system alerts and maintain service reliability

The monitoring on-call engineer is responsible for responding to automated alerts from our monitoring systems, triaging incidents, and coordinating with relevant teams to resolve system issues. This role focuses on maintaining uptime and performance of our services.

📖 [Monitoring On-Call Documentation](./oncall-monitoring.md)

### 2. Investigator On-Call
**Purpose**: Handle non-urgent technical investigations and research

The investigator on-call engineer addresses technical questions, conducts research, and investigates non-urgent issues that arise during development cycles. This role helps maintain team velocity by providing dedicated support for technical inquiries while allowing other engineers to focus on planned work.

📖 [Investigator On-Call Documentation](./oncall-investigator.md)

### 3. Tier 3 Support On-Call
**Purpose**: Provide escalated user support and technical assistance

The Tier 3 support on-call engineer handles complex user issues that have been escalated from lower support tiers. This role requires deep technical knowledge of our systems and the ability to troubleshoot user-specific problems that may require code-level investigation.

📖 [Tier 3 Support On-Call Documentation](./oncall-tier3.md)

## Rotation Schedule

The monitoring and investigator on-call roles follow a weekly rotation schedule with handoffs occurring on Thursdays. This synchronized schedule ensures smooth coordination between roles when issues require collaboration across multiple on-call engineers. Tier 3 support has one dedicated QA/Support engineer who will coordinate with the monitoring and investigator on-call engineers on customer support issues.

## Escalation and Coordination

While each on-call role has distinct responsibilities, complex issues may require coordination between multiple on-call engineers:

- **Monitoring** → **Investigator**: When alerts indicate systematic issues requiring research
- **Tier 3** → **Monitoring**: When user issues reveal potential system problems
- **Investigator** → **Tier 3**: When technical research reveals user impact

## Getting Started

If you're new to on-call duties:

1. Review the specific documentation for your assigned role
2. Familiarize yourself with our monitoring tools and communication channels
3. Understand escalation procedures and team contact information
4. Review recent incidents and investigations for context

## Questions and Support

For questions about on-call processes or procedures, reach out to the team lead or review the relevant documentation linked above.
