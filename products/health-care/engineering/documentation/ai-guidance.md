# [WIP] AI Tools: Engineering Guidance for Health Applications

>NOTE: This is a draft and will mostly change as time and best practices emerge

## TL;DR

- Have a AI-first mindset for all tasks
- Integration of good AI tools for local development
- Use built in AI tools for PR reviews
- Invest time in learning AI tools
- You are responsible for all code you submit, including AI-generated code

## Purpose

This document provides guidance on the responsible and effective use of AI-powered tools within VA.gov Health Applications engineering teams. Our goal is to leverage AI to enhance productivity, code quality, and engineering excellence while maintaining accountability and security standards. There is an expectation that any engineer working on VA.gov Health Applications is familiar with and responsibly uses AI tools as part of their regular workflow.

## Why AI?

Research shows that clarity about *why* an organization adopts AI is critical to successful rollouts. Without clear context, developers are left uncertain about expectations and best practices. Here's why we're investing in AI tools:

- **Enhance Developer Effectiveness**: AI tools help engineers work more efficiently on routine tasks, freeing time for complex problem-solving and innovation
- **Support Learning and Growth**: AI proficiency is becoming essential for modern software engineering careers; we want our engineers to develop competitive skills
- **Improve Code Quality**: When used properly with strong review practices, AI can help catch bugs, suggest improvements, and maintain documentation
- **Accelerate Veteran Service Delivery**: Ultimately, better engineering tools help us deliver better digital services to Veterans faster

**What success looks like**: Engineers confidently using AI tools as part of their daily workflow, maintaining high code quality standards, sharing knowledge with peers, and delivering value to Veterans more efficiently—without burning out.

## Guiding Principles

### 0. The AI Mindset

When doing a new task, always ask yourself: "How can AI tools help me do this task better or faster?". This mindset encourages proactive integration of AI into daily workflows, ensuring that engineers consistently seek opportunities to enhance their work through AI assistance. This also provides a framework for evaluating which AI tools and approaches (even human based approaches) are most suitable for different types of tasks.

### 1. Augmentation Over Replacement

AI tools are designed to augment human capabilities, not replace human judgment and expertise. Engineers should use AI to:

- Accelerate routine and repetitive tasks
- Explore alternative approaches and solutions
- Assist on narrowing down problems and bugs
- Improve code quality through automated reviews
- Enhance documentation and technical writing

**The final decisions, code quality, and architectural choices remain the responsibility of human engineers.**

### 2. Strategic Investment in Tools

Organizations should prioritize investment in approved AI tools and engineer productivity over cost minimization. The cost of AI tools is minimal compared to the value of engineering time. Teams are encouraged to:

- Utilize approved AI tools without concern for tool costs
- Focus on optimizing outcomes rather than minimizing tool expenses
- Invest time in learning tools that demonstrate clear productivity gains

### 3. Intentional AI Integration

Engineers should approach each task by evaluating how AI tools can enhance their work. Before starting a task, consider:

- Which AI tools are most appropriate for this work?
- How can AI help me complete this task more efficiently or effectively?
- What aspects of this task require human judgment versus AI assistance?

## Professional Development and Learning

### Continuous Learning Expectation

Teams should allocate dedicated time for engineers to:

- Explore and familiarize themselves with approved AI tools
- Experiment with different AI models and capabilities
- Share learnings and best practices with team members
- Stay current with emerging AI tool features and improvements

### Learning Investment

Time spent learning AI tools is considered valuable professional development. Engineers should:

- Dedicate regular time to AI tool proficiency development. Its okay to take a point or two on ticket estimates for this, but don't lose sight of getting the work done.
- Document and share effective AI tool usage patterns
- Participate in team knowledge-sharing sessions
- Request support when facing challenges with AI tool adoption

The initial learning investment yields long-term productivity benefits and is fully supported by leadership.

## Measuring AI Impact

Research indicates that successful AI rollouts track a holistic set of metrics—not just productivity, but also quality and wellbeing. Teams should monitor:

### Possible Productivity Indicators

- Change lead time
- Time spent on routine vs. complex tasks

### Quality Indicators

- **PR size**: AI outputs tend to be verbose. Monitor PR sizes to ensure they stay manageable (200-400 lines is optimal per industry research). Large PRs are more likely to introduce bugs and are harder to review.
- Change failure rate and mean time to recovery
- Code review feedback quality and thoroughness

### Wellbeing Indicators

- Out-of-hours commit frequency
- Team sentiment and burnout signals
- Learning time vs. delivery pressure balance

> ⚠️ **Research Warning**: Studies show AI rollouts can increase out-of-hours work by ~20% due to heightened delivery expectations. Leaders should actively monitor team wellbeing and ensure AI adoption doesn't come at the cost of work-life balance.

## Accountability and Code Quality

### Engineer Responsibility

When using AI tools to generate or modify code, the engineer who submits the work maintains full responsibility for:

- **Code Quality**: Ensuring all code meets team standards and best practices
- **Correctness**: Verifying that code functions as intended
- **Security**: Confirming no security vulnerabilities are introduced
- **Maintainability**: Ensuring code is readable and maintainable by the team
- **Testing**: Validating that appropriate tests exist and pass

### Enhanced Review Requirements

Pull requests involving AI-generated content require heightened scrutiny:

**For Authors:**

- Review all AI-generated code line-by-line before submitting
- **Keep PRs small**: AI tends to generate verbose code. Actively work to keep PR sizes manageable. Break large changes into smaller, reviewable chunks.
- Test thoroughly in local and staging environments
- Provide context in PR descriptions about AI tool usage
- Be prepared to explain and justify all code changes
- Ensure compliance with security and accessibility standards
- Configure AI tools to be concise (e.g., add instructions in rules files or prompts)

**For Reviewers:**

- Apply the same rigor as any other code review
- Question unclear or non-idiomatic code patterns
- Verify proper test coverage
- Confirm adherence to architecture and design principles
- Request clarification on any code the author cannot explain

### Code Understanding Requirement

Engineers must be able to:

- Explain the purpose and functionality of all submitted code
- Articulate why specific approaches were chosen
- Debug and troubleshoot AI-generated code independently
- Modify and extend the code in future iterations

If you cannot explain code you've submitted, it should not be merged.

## Approved Tools and Best Practices

### Recommended AI Tools

The following AI tools are approved for use within VA.gov Health Applications:

**Code Generation and Assistance:**

- GitHub Copilot (configured with high-quality models)
- Claude (Opus/Sonnet models) for code review and generation
- Google Gemini (latest versions) for complex problem-solving

**Code Review and Quality:**

- AI-powered PR review tools integrated with approved platforms
- Static analysis tools with AI-enhanced detection

If there are tools that not approved but are believed to be beneficial, please contact the engineering leadership team for evaluation and potential approval.

### Implementation Guidelines

#### Pull Request Review Process

**Mandatory AI Review:**
Every pull request should be reviewed using an approved AI model (e.g., Claude Opus, Gemini) before requesting human review. This AI pre-review should:

- Identify potential bugs or logic errors
- Suggest improvements to code structure
- Highlight security or performance concerns
- Check for adherence to coding standards

Document AI review findings in PR comments or descriptions.

#### Development Environment Setup

**IDE Configuration:**

- Enable GitHub Copilot in VS Code or your preferred IDE
- Configure Copilot to use high-quality models for better suggestions
- Customize Copilot settings to align with team coding standards
- Review and adjust AI suggestions rather than accepting blindly

#### Calibrating AI Use by Task Complexity

Not all tasks benefit equally from AI assistance. Calibrate your approach based on complexity:

**Simple Tasks** (bug fixes, small features):

- Try a one-shot approach—let AI generate a solution and evaluate
- Quick iteration is fine; don't over-engineer the prompt

**Medium Complexity Tasks** (new components, integrations):

- Spend time on planning and clear requirements before engaging AI
- Iterate on AI output; expect 2-3 rounds of refinement
- Break into smaller sub-tasks if AI struggles

**Complex Tasks** (architectural changes, large features):

- Invest significant time in breaking down the problem first
- Provide extensive context and constraints to the AI
- Use progress tracking files (e.g., `progress.md`, `lessons.md`) to maintain context across sessions
- Document lessons learned to avoid "context rot" where AI loses track of previous decisions

> 💡 **Pro Tip**: For complex tasks, clear your AI context regularly and re-prime with a summary of progress and lessons learned. This prevents the AI from getting confused by outdated information.

#### Agentic Workflows

**Repetitive Task Automation:**
AI agents can be particularly effective for:

- Batch file operations and refactoring
- Documentation generation and updates
- Test case generation (with human validation)
- Code migration and modernization tasks

**Critical Requirements:**

- Always review agentic tool output before committing
- Validate that changes maintain functional equivalence
- Test thoroughly across affected functionality
- Document the agentic approach used for team awareness

## Security and Compliance

### Data Protection

When using AI tools:

- Never input sensitive PII, credentials, or proprietary VA data into external AI systems
- Use only approved AI tools that meet VA security requirements
- Follow data handling policies for your security classification level
- Report any accidental data exposure immediately

### Approved Usage Boundaries

Engineers must:

- Use only VA-approved AI tools and services
- Follow organizational policies regarding AI tool usage
- Consult with security team before adopting new AI tools
- Document AI tool usage for compliance and auditing purposes

## Continuous Improvement

### Identify and Leverage Super-Users

Research shows AI usage follows a Pareto distribution—a small number of "super-users" account for the majority of effective AI usage. These individuals have figured out what works best on your specific codebase. Teams should:

- **Identify super-users**: Look for engineers who are enthusiastic about AI tools and getting strong results
- **Create super-user roles**: Consider dedicating time for super-users to help others adopt AI effectively
- **Document their practices**: Capture specific prompts, workflows, and configurations that work well
- **Pair them with learners**: Connect super-users with engineers earlier in their AI journey

### Peer-to-Peer Learning

Developers trust their peers more than vendor claims. Structure opportunities for peer learning:

- **AI Guilds**: Cross-functional groups that run workshops and manage dedicated channels for sharing tools and best practices
- **Demo Sessions**: Regular sessions where high-performing AI users demonstrate their workflows on real problems
- **Pair Programming**: Partner experienced AI users with those still learning
- **Dedicated Slack Channels**: Create spaces for sharing prompts, tips, and asking questions

> 💡 **Research Insight**: "It's useful to hear about AI use cases from a peer who's not invested in how much money the company makes." — Software Engineer from Multitudes study

### Sharing Knowledge

Teams should foster a culture of AI tool knowledge sharing through:

- Regular demonstrations of effective AI tool usage
- Documentation of successful AI-assisted patterns
- Team retrospectives discussing AI tool effectiveness
- Cross-team collaboration on AI best practices

### Feedback and Evolution

This guidance will evolve as:

- New AI tools become available and approved
- Teams discover more effective AI integration patterns
- Industry best practices mature
- VA policies and security requirements change

Engineers are encouraged to provide feedback on this guidance and suggest improvements.

## Research Foundation

This guidance incorporates findings from:

- **Multitudes Whitepaper (2025)**: "What matters most for AI rollouts: How you lead" - Research following 500+ developers through AI rollouts, combining telemetry data, surveys, and interviews
- **DORA Report (2025)**: AI adoption patterns and organizational performance
- **Google Engineering Practices**: Code review and small PR best practices
- **Cisco Study (2023)**: Optimal PR size research (200-400 lines)

Key research findings that shaped this guidance:

- Buying AI tooling doesn't guarantee adoption—enablement matters
- Engineers merged 27.2% more PRs with AI but did 19.6% more out-of-hours commits
- Good code review practices can prevent AI quality issues
- Super-users know how to get AI working best on your codebase; peer learning accelerates adoption

## Related Resources

- [Pull Request Standards](./pull-request-standards.md)
- [Documentation Standards](./document-standards.md)
- [SRE Review Standards](./sre-review.md)
- [Operations Guide Standards](./operations-guide-standards.md)
