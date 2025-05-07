# Impact Report: Migration to GitHub Enterprise Cloud and Loss of macOS Runners

**Prepared by:** Tim Wright 

**Date:** May 7, 2025 

**Team:** VA Mobile Platform

## Summary

The VA: Health and Benefits mobile app, a cross-platform application built in React Native, 
serves millions of Veterans across iOS and Android. The iOS version of the app requires 
macOS to build and sign using Apple’s Xcode tooling. Our team currently relies on GitHub 
Actions macOS runners hosted with GitHub to manage CI/CD automation. The proposed migration 
to a GitHub Enterprise environment using Microsoft Azure, which does not support macOS 
runners, would break our ability to build and release the iOS app, resulting in service 
disruption and loss of deployment velocity.

## Technical Background

- **Platform:** React Native (targeting iOS and Android)  
- **Tooling:** GitHub Actions CI/CD pipelines  
- **macOS Dependency:** Required for iOS builds due to Apple’s restriction of Xcode to macOS  
- **Current CI Model:** Cloud-hosted macOS runners on GitHub.com

## Impact of Migration

| Area                     | Impact                                                                 |
|--------------------------|------------------------------------------------------------------------|
| **CI/CD for iOS**        | **Broken pipeline** – No macOS support on Azure, so Xcode builds are impossible. |
| **Release Cadence**      | Delays or stoppage of iOS app releases. |
| **Manual Testing**       | Delays or stoppage of iOS app testing with TestFlight. |
| **Automated Testing**    | Delays or stoppage of iOS app testing with Detox. |
| **Compliance**           | iOS builds must be code-signed using Apple tools available only on macOS. |
| **Engineering Overhead** | Requires manual builds or alternative CI investments, increasing human error risk and lowering team productivity. |
| **User Impact**          | Delayed features, bug fixes, or security updates for iOS users, directly affecting Veteran satisfaction and trust in VA digital services. |

## Mitigation Options

### Option 1: Continue Using GitHub.com for CI/CD

**Description:** Maintain the current GitHub.com setup for iOS builds while other VA teams migrate to the new GitHub Enterprise instances.

- **Pros:**
  - No disruption to iOS CI/CD.
  - Immediate continuity for app releases.
  - Requires minimal changes to current pipeline.

- **Cons:**
  - Inconsistent tooling across teams.
  - May require security waivers or exceptions.
  - Slightly more complex audit/log management across systems.

### Option 2: Set Up Self-Hosted macOS Runners

#### A. On-Premises macOS Hardware

- **Pros:**
  - Full control over security and physical environment.
  - Can be integrated into VA's internal systems and ATO process.

- **Cons:**
  - **High Capital Expense:** Mac minis ($700–$2,000/unit), plus racks, power, and backup infrastructure.
  - **High Operational Complexity:** Patch management, runner maintenance, build tooling updates.
  - **Security Burden:** Must meet VA’s ATO standards, including STIGs, logging, and monitoring.
  - **Staffing Needs:** Dedicated DevOps/IT staff to manage and support infrastructure.
  - **Time to Deploy:** 6–12 months depending on procurement and ATO timeline.

#### B. AWS-Hosted macOS Runners (EC2 Mac Instances)

- **Pros:**
  - On-demand macOS environments available via AWS EC2 Mac instances.
  - Scales more easily than on-prem infrastructure.
  - Easier to integrate with existing cloud security practices since VA already uses AWS.

- **Cons:**
  - **Cost:** Charging hourly per dedicated host, plus storage and network. Also requires extra DevOps staffing.
  - **Security & Compliance:** Must be configured to meet VA’s security requirements (ATO), including hardening, logging, and continuous monitoring.
  - **ATO Complexity:** Although hosted on AWS, environments still need VA-specific accreditation, risk acceptance or a cATO setup
  - **Setup Time:** Requires cloud team involvement and CI/CD engineering support.
  - **Setup Note:** AWS govcloud does not offer AWS EC2 MacOS instances. This will require us to have a commercial AWS account.

### Option 3: Use Third-Party CI Tools with macOS Support

**Familiar vendor:** CircleCI

- **Pros:**
  - Relatively fast to integrate (~1-3 months)
  - Fully managed macOS runners available.
  - Optimized for React Native apps and mobile workflows.
  - The mobile app CI/CD used to run on CircleCI

- **Cons:**
  - **Data Residency Concerns:** Vendor must meet federal data protection requirements.
  - **Recurring Costs:** [varies based on usage](https://circleci.com/pricing/).
  - **Security Vetting:** Requires vendor review and potentially FedRAMP compliance.
  - OCTO intentionally sunset CircleCI a couple years ago due to cost and the rise of Github Actions

## Summary Table

| Option                         | Cost         | Complexity | ATO/Security Overhead  | Viability   |
|--------------------------------|--------------|------------|------------------------|-------------|
| **Hybrid (GitHub.com)**        | Low          | Low        | Moderate               | **High**    |
| **Self-Hosted (On-Prem)**      | High         | Very High  | Very High              | Medium      |
| **Self-Hosted (AWS)**          | Medium–High  | High       | High                   | Medium      |
| **3rd-Party CI Tools**         | Medium       | Moderate   | Moderate–High          | Medium      |

## Recommendation

**Delay the migration of mobile app CI/CD** until a fully functional, secure, and compliant 
macOS build environment is established. A hybrid model using GitHub.com runners for iOS 
CI is the most practical short-term solution and ensures that Veteran-facing services remain 
uninterrupted.

Longer-term strategies should be evaluated for cost, scalability, and compliance alignment—especially 
if self-hosted runners or third-party CI services are pursued.
