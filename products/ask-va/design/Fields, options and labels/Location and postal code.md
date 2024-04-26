# Location of residence and postal code

Last updated by @tygindraux: April 26, 2024

The rules are described in the following sections:
- [Guardianship and VR&E](#guardianship-and-vr&e)
- [Education](#education)
- [Health care](#health-care)

## Guardianship and VR&E
`IF CATEGORY`
- Guardianship, custodianship or fiduciary issues
- Veteran Readiness and Employment

`AND TOPIC ≠` Other

---

### About myself

#### Flow 1.1
`AND` About myself
`AND` I'm the Veteran
`THEN` **collect Veteran’s location of residence**
`&& ALSO IF residence is =` CA, NY, PA, or TX
`THEN` **collect Veteran’s postal code**


| `AND`                | `AND`            | `THEN`                                    | `&& ALSO IF Residence =` | `THEN`                       |
| ------------------ | --------------- | --------------------------------------- | ---------------------- | -------------------------- |
| About myself | I'm the Veteran | **Collect Veteran’s location of residence** | CA, NY, PA, or TX      | **Collect Veteran’s postal code** |


#### Flow 1.2
`AND` About myself
`AND` I'm a family member of a Veteran
`THEN` **collect family member’s location of residence**
`&& ALSO IF residence is =` CA, NY, PA, or TX
`THEN` **collect family member's postal Code**

| `AND`                | `AND`                              | `THEN`                          | `&& ALSO IF Residence =` |`THEN`                                |
| ------------------ | -------------------------------- | --------------------------------------------- | ---------------------- | -------------------------------------- |
| About myself | I'm a family member of a Veteran | **Collect family member’s location of residence** | CA, NY, PA, or TX      | **Collect family member postal code** |

---

### About someone else

#### Flow 2.1
`AND` About someone else
`AND` I'm the Veteran
`THEN` **collect Veteran’s location of residence**
`&& ALSO IF residence is =` CA, NY, PA, or TX
`THEN`** collect Veteran’s zip code**

| `AND`                        | `AND`             | `THEN`                                    | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | --------------- | --------------------------------------- | ---------------------- | -------------------------- |
| Someone else's VA benefits | I'm the Veteran | **Collect Veteran’s location of residence** | CA, NY, PA, or TX      | **Collect Veteran’s zip code** |

#### Flow 2.2.1
`AND` Someone else's VA benefits
`AND` I'm a family member of a Veteran
`AND` I'm the `role` of the Veteran
`AND question IS about` the Veteran
`THEN` **collect Veteran’s location of residence**
`&& ALSO IF residence is =` CA, NY, PA, or TX
`THEN` **collect Veteran’s zip code**

| `AND`                        | `AND`                              | `AND`                         | `AND question IS about` | `THEN`                            | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | -------------------------------- | --------------------------- | --------------------- | ------------------------------- | ---------------------- | -------------------------- |
| Someone else's VA benefits | I'm a family member of a Veteran | I'm the role of the Veteran | The Veteran           | **Collect Veteran’s location of residence** | CA, NY, PA, or TX      | **Collect Veteran’s zip code** |


#### Flow 2.2.2
`AND` Someone else's VA benefits
`AND` I'm a family member of a Veteran
`AND` I'm the `family_role` of the Veteran
`AND question IS about` Someone else
`THEN` **collect family member’s location of residence**
`&& ALSO IF residence is =` CA, NY, PA, or TX
`THEN` **collect family member’s zip code**

| `AND`                        | `AND`                              | `AND`                                 | `AND question IS about` | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                             |
| -------------------------- | -------------------------------- | ----------------------------------- | --------------------- | --------------------------------------------- | ---------------------- | -------------------------------- |
| Someone else's VA benefits | I'm a family member of a Veteran | I'm the family_role  of the Veteran | Someone else          | **Collect family member’s location of residence** | CA, NY, PA, or TX      | **Collect family member’s postal code** |

#### Flow 2.3
`AND` Someone else's VA benefits
`AND` I'm a connected to the Veteran through my work
`AND`  `work_role` 
`AND question is about` The Veteran
`THEN` **collect submitter’s location of residence**
`&& ALSO IF residence is =` CA, NY, PA, or TX
`THEN` **collect submitter’s postal code**

| `AND`                        | `AND`                                            | `AND`       | `AND question IS about`         | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| -------------------------- | ---------------------------------------------- | --------- | ----------------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| Someone else’s VA benefits | I'm a connected to the Veteran through my work | work_role | The Veteran | **Collect submitter’s location of residence** | CA, NY, PA, or TX      | **Collect submitter’s postal code** |


---

### A general question

#### Flow 3.1
`AND` It’s a general question
`THEN` **collect submitter’s location of residence**
`&& ALSO IF residence is =` CA, NY, PA, or TX
`THEN` **collect submitter’s zip code**

| `AND`                     | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| ----------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| A general question | **Collect submitter’s location of residence** | CA, NY, PA, or TX      | **Collect submitter’s postal code** |
