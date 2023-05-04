Content Moderation Roles determine how a Drupal CMS user can move content into various different states in the editorial workflow.
## Content Moderation Roles

Listed in order from lowest permissions to highest:
* Content Editor
* Content Reviewer
* Content Publisher 
* Content Admin

## Diagram of Editorial Workflow States & Transitions (simple)
```mermaid
flowchart LR
    A -->|Edit| A
    A(Draft) -->|Review| B(In review)
    B -->|Approve| C(Approved)
    C -->|Publish| D(Published)
    A -->|Publish| D
    D -->|Publish| D
    D -->|Archive| E(Archived)
    E -->|Restore from Archive|D
```

## Workflow Transitions
* Approve 
  * Move content from In review state 
  * to Approved state
* Archive
  * Move content from Draft, In review, Approved, Published states 
  * to Archived state
* Edit
  * Move content from Draft, In review, Published, Archived states 
  * to Draft state
* Publish
  * Move content from Draft, In review, Approved, Published states 
  * to Published state
* Restore
  * Move content from Archived state 
  * to Published state. 
* Review
  * Move content from Draft, In review states 
  * to In review state


## Editorial Workflow States & Transitions (full)
```mermaid
flowchart LR
    A -->|Edit| A
    A(Draft) -->|Review| B(In review)
    B -->|Review|B
    B -->|Approve| C(Approved)
    C -->|Publish| D(Published)
    D -->|Archive| E(Archived)
    E -->|Restore from Archive|D
    B -->|Edit| A
    D -->|Edit| A
    E -->|Edit| A
    A -->|Publish| D
    B -->|Publish| D
    D -->|Publish| D
    E -->|Publish| D
    A -->|Archive| E
    B -->|Archive| E
    C -->|Archive| E
 ```
 
## Content Moderation Roles - Workflow Transition Permissions 
 
* Content Editor
  * Edit
  * Review
* Content Reviewer
  * Edit
  * Review
  * Approve
* Content Publisher & Content Admin
  * Edit
  * Review
  * Approve
  * Publish
  * Archive
  * Restore from Archive

## Individual Workflow State Diagrams

```mermaid
flowchart LR
    subgraph Draft
    direction LR
    A1(Draft)
    A2(Draft)
    A3(Draft)
    B1(In review)
    B2(In review)
    C1(Approved)
    C2(Approved)
    D1(Published)
    D2(Published)
    E1(Archived)
    E2(Archived)
    A1 -->|Edit| A2
    A2 -->|Edit| A3
    A2 -->|Review| B2
    B1 -->|Edit| A2
    C1 ~~~ A2
    A2 ~~~ C2
    D1 -->|Edit| A2
    E1 -->|Edit| A2
    A2 -->|Publish| D2
    A2 -->|Archive| E2
    end
    Draft ~~~ In_review
    subgraph In_review
    direction LR
    A1B(Draft)
    A2B(Draft)
    B1B(In review)
    B2B(In review)
    B3B(In review)
    C1B(Approved)
    C2B(Approved)
    D1B(Published)
    D2B(Published)
    E1B(Archived)
    E2B(Archived)
    A1B -->|Review| B2B
    B2B -->|Edit| A2B
    B1B -->|Review|B2B
    B2B -->|Review|B3B
    C1B ~~~ B2B
    B2B -->|Approve| C2B
    D1B ~~~ B2B
    B2B -->|Publish| D2B
    E1B ~~~ B2B
    B2B -->|Archive| E2B
    end

 ```
