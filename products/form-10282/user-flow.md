```mermaid
flowchart
A(Authenticated)-->B(Submit Form 10282)
B --> C(Write data to vets-api database)
C --> |Scheduled Job|D(Send txt file to SFTP)
D --> |Fail to Upload|E(Manual reconciliation)
D --> |Success|F(Done)
```