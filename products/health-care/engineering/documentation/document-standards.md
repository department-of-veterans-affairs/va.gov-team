# [WIP] Standards for Documentations

## README

**Goal:** To provide a quick starting off point for an engineer approaching the code base

**Standard:**

- **Good Readme**:
  - **Code owners** - Names of people and teams who own the code base. This should include was to contact the owners
  - **Tech Stack** - What technology and version does the code user
  - **Links to relevant docs** - Include links to set up docs, archecture diagrams and other relevant resources
  - **Description** - A *brief* description of what problem the code base solves
  - **Build Status** - The current build status in the CI
  - **Code space specific knowledge** - Knowledge, FAQs, Gotchas, or other relevant knowledge that would be useful for a engineer
  - **Monitoring** - Links to where the production instance can be monitored.

- **Best Practices:**
- A good readme is not a duplication of docs, but rather a list of links to relevant locations
- These docs are geared toward helping an engineer not familiar with the code have a place to start to navigate it
- This should live in the root directory of the code base, not in the doc directory.
- [Vets website](https://github.com/department-of-veterans-affairs/vets-website) is a good example

## Architecture Diagrams (e.g., C4 Model)

**Goal:** To provide a high-level view of the system’s structure, including components, interactions, and external dependencies.

**Standards:**

- **C4 Model (Recommended):**
  - **Level 1:** **System Context Diagram** — Illustrates the system as a black box with its major external actors (users, other systems, services).
  - **Level 2:** **Container Diagram** — Shows the major containers (applications, services, databases) within the system and how they interact.
  - **Level 3:** **Component Diagram** — Focuses on individual components within each container, their interactions, and the underlying technologies.
  - **Level 4:** **Code Diagram** (optional) — For specific components, shows classes, methods, or code-level structures.

- **Best Practices:**
  - Use consistent, well-known shapes and symbols (rectangles for containers, cylinders for databases, etc.).
  - Label components and containers with clear, descriptive names.
  - Include a legend or key to code symbols and colors.
  - Show interactions with clear arrows that specify the nature of the communication (REST API, message queue, etc.).
  - Ensure diagrams are simple enough for stakeholders to understand but detailed enough for technical teams to use.
  - Should include keys and secrets

## Database Diagrams

**Goal:** To represent the structure of the database, including tables, relationships, and key constraints.

**Standards:**

- **Entity-Relationship Diagram (ERD):**
  - **Entities:** Represent each table as an entity (e.g., user, product).
  - **Relationships:** Use lines to indicate relationships (one-to-many, many-to-many) between tables.
  - **Attributes:** List key fields for each entity (e.g., user ID, email).
  - **Keys:** Mark primary keys (PK) and foreign keys (FK) clearly.

- **Key Best Practices:**
  - Use standard symbols (rectangles for tables, diamonds for relationships, ovals for attributes).
  - Include notes or annotations for complex relationships or constraints.
  - Organize tables logically (group related tables together).
  - Include reference to foreign key relationships and ensure clarity in direction (one-to-many, etc.).
  - Focus on clarity; too much detail can overwhelm the reader. Avoid showing non-essential columns.

## Sequence Diagrams

**Goal:** To describe how processes flow in the system, detailing the interactions between components or objects in a particular use case or feature. There should be a sequence diagram for the key features of the API.

**Standards:**

- **Sequence Diagram should have:**
  - **Participants (Actors/Objects):** Each participant is represented by a vertical lifeline (dashed line). This could be a system component, user, or external system.
  - **Messages:** Horizontal arrows between lifelines represent messages or function calls.
  - **Activation Bars:** Indicate when a component is active (typically a thin rectangle on a lifeline).
  - **Loops/Conditionals:** Use frames to indicate loops or conditional branches (e.g., "alt" for alternatives, "opt" for optional paths).
  - **Error Handling:** Clearly represent error paths and failure points.

- **Key Best Practices:**
  - Keep diagrams focused on the key interactions; avoid unnecessary complexity.
  - Use clear, consistent arrow styles to distinguish between synchronous (solid arrows) and asynchronous (dashed arrows) messages.
  - Label all components, messages, and conditions clearly.
  - Show the "happy path" and highlight failure paths with appropriate messaging and exception handling.
  - Organize the diagram from top to bottom, typically with the first interaction at the top.

## Network Diagram

**Goal:** To provide a detailed view of the network architecture, showing how components are connected and how data flows between them.

**Standards:**

- **Layered Approach:**
  - **Physical Layer:** Shows actual devices like routers, firewalls, load balancers, etc.
  - **Network Layer:** Displays connections between devices (network switches, IP addresses, etc.).
  - **Application Layer:** Visualizes high-level application components and how they communicate over the network.
- **Representation of Components:** Use clear, standard icons (e.g., cloud icons for the internet, database icons for databases, server icons for web/app servers).
- **Flow Direction:** Arrows should indicate the flow of data (e.g., requests or responses) between systems.
- **Redundancy & Failover:** If applicable, indicate redundant systems or failover configurations.

- **Key Best Practices:**
  - This should include network maps of each environment (INTB, SYSB, etc.)
  - Include key network elements such as firewalls, proxies, load balancers, servers, routers, and cloud components.
  - Use standard networking symbols to improve clarity and understanding.
  - Ensure scalability and reliability features like VPNs, load balancing, or failover are depicted clearly.
  - Avoid clutter—simplify the diagram by grouping related components and services.

## OpenAPI (Swagger) Documentation**

**Goal:** To document RESTful APIs in a standardized format that can be easily understood and consumed by developers.

**Standards:**

- **OpenAPI Specification (OAS):**
  - **Versioning:** Clearly specify the API version in the OpenAPI definition.
  - **Endpoints:** Define each API endpoint with HTTP methods (GET, POST, PUT, DELETE) and detailed descriptions.
  - **Request/Response Formats:** Clearly describe the input and output formats, including headers, parameters, and request/response bodies (in JSON or YAML).
  - **Authentication:** Clearly indicate how authentication and authorization are handled (e.g., OAuth2, API keys).
  - **Examples:** Include examples for both request and response to improve clarity.
  
- **Key Best Practices:**
  - Ensure that the OpenAPI documentation is machine-readable (e.g., in JSON or YAML format).
  - Use Swagger UI or similar tools to automatically generate and visualize the API documentation.
  - Provide clear explanations for complex endpoints, error codes, and any special logic.
  - Maintain consistency in naming conventions, parameter types, and response codes.

## CI/CD Pipeline Diagram

**Goal:** To document the flow of code through the CI/CD pipeline

**Standards:**

- **Pipeline Stages:**
  - **Source Code:** Represents the Git repository or source code management tool.
  - **Build:** Depicts the build process (e.g., Jenkins, CircleCI, GitHub Actions). Including triggers of when the build process starts
  - **Test:** Shows the automated testing stages (unit tests, integration tests, etc.).
  - **Deployment:** Visualizes how code moves to different environments (e.g., staging, production).
  - **Monitoring:** Includes monitoring and alerting stages for post-deployment.
- **Feedback Loops:** Clearly indicate feedback mechanisms for failed builds or tests.
- **Environments:** What environments are created (INTB, etc) and how to deploy to each pipeline
- **Extension:** How to add a new step in the pipeline
- **Diaster Recovery** How to set up new pipeline from scratch

- **Key Best Practices:**
  - Use distinct, standardized symbols for each tool and stage (e.g., circles for start/end, arrows for process flow).
  - Label each stage with concise, descriptive names (e.g., "Build," "Test," "Deploy").
  - Include any external dependencies or integrations in the pipeline (e.g., third-party testing services, artifact repositories).
  - Ensure the diagram covers both automated and manual steps clearly
