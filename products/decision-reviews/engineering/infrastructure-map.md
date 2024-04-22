# Infrastructure Map

```mermaid
flowchart
    n1["Supplemental Claim Form"]
	n2["Higher Level Review Form"]
	n3["Notice of Disagreement Form"]
	n4["Lighthouse Decision Reviews API"]
	n5["Lighthouse Benefits Claims API"]
	n6["EMMS"]
	n7["CMP"]
	n8["VBMS"]
    n9["Caseflow"]
	n9 --> n4
    n1 <--> n4
    n2 <--> n4
    n3 <--> n4
    n4 --> n6
    n6 --> n7
    n7 --> n8
    n1 <--> n5
    n1 --> n7
```

| Service                         | Slack Channel          | Contacts                                 |
|---------------------------------|------------------------|------------------------------------------|
| Lighthouse Decision Reviews API | #appeals-api           |                                          |
| EMMS (CMP)                      |                        | Jacob Shephard, Tim Wagner, Rashmi Pires |
| VBMS / BVA                      |                        | John Gosnell, William (Bo) Rollins       |
| Lighthouse Benefits Claims API  |                        |                                          |
| Caseflow                        | #caseflow-support-team |                                          |