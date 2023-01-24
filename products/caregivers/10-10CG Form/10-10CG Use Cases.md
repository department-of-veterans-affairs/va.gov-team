# Product Use Cases - Family Caregiver Application

_Tracks and maintains the various use cases that exist for a given product and is best maintained alongside the product outline._

Link to product outline: [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Caregiver%20application%20product-outline.md)


## Notes
- PFC: Primary family caregiver
- SFC: Secondary family caregiver
- Each application must have a Veteran. There can be up to one PFC and up to two SFCs.
- As of April 2021, we are now adding the ability to upload representation (POA) documentation.

## Use Cases
| Use Case | Vet | PFC | SFC1 | SFC2 | POA | Description*                  |
|:--------:|:---:|:---:|:----:|:----:|:---:|-------------------------------|
|     A    |  X  |  X  |      |      |     | Vet + PFC                     |
|     B    |  X  |  X  |   X  |      |     | Vet + PFC + SFC1              |
|     C    |  X  |  X  |   X  |   X  |     | Vet + PFC + SFC1 + SFC2       |
|     D    |  X  |     |   X  |      |     | Vet + SFC1                    |
|     E    |  X  |     |   X  |   X  |     | Vet + SFC1 + SFC2             |
|     F    |  X  |  X  |      |      |  X  | Vet + PFC + POA               |
|     G    |  X  |  X  |   X  |      |  X  | Vet + PFC + SFC1 + POA        |
|     H    |  X  |  X  |   X  |   X  |  X  | Vet + PFC + SFC1 + SFC2 + POA |
|     I    |  X  |     |   X  |      |  X  | Vet + SFC1 + POA              |
|     J    |  X  |     |   X  |   X  |  X  | Vet + SFC1 + SFC 2 + POA      |


### Sign-as-Rep (POA) feature flow

![Caregiver-POA-Flow.png](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/Caregiver-PoA-Flow.png)
