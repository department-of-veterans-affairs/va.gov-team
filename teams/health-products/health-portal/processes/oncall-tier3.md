# Tier 3 Support On-Call

Created: 2025-01-28

Note:
- Needs review by Customer Support and Triage team
- Assumes there is a Tier 2 Support in the Help Desk hierachy, which is not yet confirmed

## Overview

The Tier 3 Support On-Call role provides the highest level of technical support for complex user issues that cannot be resolved by lower support tiers. This role requires deep technical knowledge of the Health Portal systems and the ability to investigate and resolve user-specific problems that may require code-level analysis.

## Support Tier Structure

Understanding the three-tier support model helps clarify when and how issues escalate to engineering:

### Tier 1 Support (First Line)
- **Who**: Customer service representatives, help desk staff
- **Scope**: Basic user assistance and common issues
- **Capabilities**:
  - Password resets and account access help
  - General navigation and feature guidance
  - Known issue workarounds from knowledge base
  - Basic troubleshooting using standard procedures
- **Escalation**: Issues requiring technical investigation or system-specific knowledge

### Tier 2 Support (Technical Support)
- **Who**: Technical support specialists with deeper product knowledge
- **Scope**: More complex technical issues and system-specific problems
- **Capabilities**:
  - Advanced troubleshooting using logs and diagnostic tools
  - Configuration issues and integration problems
  - Data validation and basic system analysis
  - Coordination with multiple support channels
- **Escalation**: Issues requiring code-level investigation or engineering expertise

### Tier 3 Support (Engineering)
- **Who**: Software engineers with deep system knowledge (this role)
- **Scope**: Complex technical investigations requiring engineering expertise
- **Capabilities**:
  - Code-level debugging and system analysis
  - Database queries and data integrity investigations
  - Integration troubleshooting with upstream systems
  - Root cause analysis and system behavior investigation
- **Escalation**: System-wide issues requiring immediate fixes or architectural changes

## Role Description

The Tier 3 support on-call engineer serves as the final escalation point for user support issues, handling complex technical problems that require engineering expertise. This role bridges the gap between user support and engineering, ensuring that user issues receive appropriate technical attention while protecting development team focus.

## Responsibilities

- Respond to escalated user support tickets from Tier 1 and Tier 2 support
- Investigate complex user-specific technical issues
- Analyze application logs and data to diagnose problems
- Coordinate with the monitoring and investigator on-call engineers on customer support issues
- Coordinate with upstream system owners when issues involve external dependencies
- Document issue patterns and recommend system improvements
- Provide technical guidance to lower-tier support teams
- Escalate critical issues to the monitoring on-call engineer when system-wide problems are discovered

## Types of Issues Handled

- User-specific authentication or authorization failures
- Data inconsistencies or missing information for individual users
- Complex application errors that require log analysis
- Integration issues with MHV API, VistA, or Oracle Health systems
- Performance problems affecting specific user cohorts
- Feature behavior that appears incorrect but requires technical investigation

## Response Process

1. **Acknowledge receipt** of escalated tickets within the agreed SLA
2. **Gather context** from the escalating support team about steps already taken
3. **Reproduce the issue** when possible using test environments
4. **Investigate using available tools**:
   - Application logs in Datadog
   - User-specific data queries
   - System monitoring dashboards
   - Network and integration logs
5. **Coordinate with partners** when external systems are involved
6. **Document findings** and provide resolution or workaround
7. **Update knowledge base** with new troubleshooting procedures

## Escalation Criteria

Escalate to monitoring on-call when:
- The issue appears to affect multiple users (potential system-wide problem)
- Upstream system failures are causing widespread impact
- Critical security concerns are identified
- The issue requires immediate system changes or hotfixes

Escalate to investigator on-call when:
- The issue requires extensive research or data analysis
- Pattern analysis suggests a deeper technical investigation is needed
- The problem may be related to recent code changes or system modifications

## Communication Channels

- **Primary**: Tier 3 support ticket system
- **Escalation**: Team Slack channels and PagerDuty
- **Coordination**: Direct communication with MHV Backend, VistA, and Oracle Health teams
- **Documentation**: Internal knowledge base and incident tracking systems

## Rotation Schedule

- Each engineer serves a one-week rotation
- Handoff occurs on Thursdays at 9:00 AM, aligned with other on-call rotations
- Coverage hours are 9:00 AM to 5:00 PM local time
- After-hours critical escalations will be handled by monitoring on-call

## Tools and Resources

- **Datadog**: Application logs and monitoring dashboards
- **Support ticket system**: Primary interface for receiving escalated issues
- **Slack channels**: Team communication and coordination
- **Knowledge base**: Documentation of common issues and solutions
- **Test environments**: For reproducing and testing user issues
- **Partner contact information**: Direct lines to upstream system support teams

## Handoff Process

During Thursday handoffs, the outgoing engineer should:
- Provide status updates on any open investigations
- Share insights about recurring issues or patterns observed
- Brief the incoming engineer on any ongoing coordination with partner teams
- Transfer ownership of active tickets requiring continued attention

## Success Metrics

- Time to acknowledgment of escalated tickets
- Resolution rate within SLA timeframes
- User satisfaction scores for resolved issues
- Knowledge base contributions and improvements
- Successful escalations that lead to system-wide fixes

## Relationship to Other On-Call Roles

The Tier 3 support role works closely with:
- **Monitoring On-Call**: For system-wide issues discovered through user reports
- **Investigator On-Call**: For complex technical research and pattern analysis
- **Development Teams**: For issues requiring code changes or system modifications

Regular coordination ensures that user issues inform system improvements and that technical insights enhance user support capabilities.
