# Location of residence and postal code

Last updated by @tygindraux: May 23, 2024
 
The rules are described in the following sections:
- [Contact preference](#contact-preference)
- [Guardianship and VR&E](#guardianship-and-vre)
- [Education > VR&E](#education--vre)
- [Health care](#health-care)

## Contact preference

When we collect the location of residence and postal code of the submitter, we first check which contact preference they choose.

`IF contact preference =` Phone `OR` Email

Continue to determine whether to collect location of residence and postal code.

`ELSE IF contact preference =` U.S. Mail

Skip collecting location of residence and postal code separately. They're collected in the **Address component** instead.

---

## Guardianship and VR&E
`IF CATEGORY`
- Guardianship, custodianship or fiduciary issues
- Veteran Readiness and Employment

`AND TOPIC ≠` Other

### About myself

#### Flow 1.1
`AND` About myself

`AND` I'm the Veteran

`THEN` **collect submitter's (Veteran's) location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect submitter's (Veteran's) postal code**

| `AND`                | `AND`            | `THEN`                                    | `&& ALSO IF Residence =` | `THEN`                       |
| ------------------ | --------------- | --------------------------------------- | ---------------------- | -------------------------- |
| About myself | I'm the Veteran | **Collect submitter's (Veteran's) location of residence** | CA, NY, PA, or TX      | **Collect submitter's (Veteran's) postal code** |

#### Flow 1.2
`AND` About myself

`AND` I'm a family member

`THEN` **collect submitter (family member’s) location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect submitter (family member’s) postal Code**

| `AND`                | `AND`                              | `THEN`                          | `&& ALSO IF Residence =` |`THEN`                                |
| ------------------ | -------------------------------- | --------------------------------------------- | ---------------------- | -------------------------------------- |
| About myself | I'm a family member | **Collect submitter (family member’s) location of residence** | CA, NY, PA, or TX      | **Collect submitter (family member’s) postal code** |

### About someone else

#### Flow 2.1
`AND` About someone else

`AND` I'm the Veteran

`THEN` **collect family member’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect family member’s postal code**

| `AND`                        | `AND`             | `THEN`                                    | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | --------------- | --------------------------------------- | ---------------------- | -------------------------- |
| About someone else | I'm the Veteran | **Collect family member’s location of residence** | CA, NY, PA, or TX      | **Collect family member’s postal code** |

#### Flow 2.2.1
`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` The Veteran

`THEN` **collect Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect Veteran’s postal code**

| `AND`                   | `AND`               | `AND`             | `AND question is about` | `THEN`                      | `&& ALSO IF Residence =` | `THEN`                |
| --------------| -------------------- | --------------------------- | --------------------- | ------------------------------- | ---------------------- | -------------------------- |
| About someone else | I'm a family member of a Veteran | `family_relationship` | The Veteran | **Collect Veteran’s location of residence** | CA, NY, PA, or TX | **Collect Veteran’s postal code** |

#### Flow 2.2.2
`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` Other family member (not the Veteran or me)

`THEN` **collect other family member’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect other family member’s postal code**

| `AND`                        | `AND`                              | `AND`                                 | `AND question is about` | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                             |
| -------------------------- | -------------------------------- | ----------------------------------- | --------------------- | --------------------------------------------- | ---------------------- | -------------------------------- |
| About someone else | I'm a family member | `family_relationship` | Other family member (not the Veteran or me) | **Collect other family member’s location of residence** | CA, NY, PA, or TX      | **Collect other family member’s postal code** |

#### Flow 2.3
`AND` About someone else

`AND` I'm a connected to the Veteran through my work

`AND` `work_role` 

`AND question is about` The Veteran

`THEN` **collect Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect Veteran’s postal code**

| `AND`                        | `AND`                                            | `AND`       | `AND question is about`         | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| -------------------------- | ---------------------------------------------- | --------- | ----------------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| About someone else | I'm a connected to the Veteran through my work | `work_role` | The Veteran | **Collect Veteran’s location of residence** | CA, NY, PA, or TX | **Collect Veteran’s postal code** |

### A general question

#### Flow 3.1
`AND` A general question

`THEN` **collect submitter’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect submitter’s postal code**

| `AND`                     | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| ----------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| A general question | **Collect submitter’s location of residence** | CA, NY, PA, or TX  | **Collect submitter’s postal code** |

### Why do we collect this information?

We collect location of residence and postal code so we can route to the correct queue.

---

## Education > VR&E

`IF CATEGORY` = Education benefits and work study

`AND TOPIC` = Veteran Readiness and Employment

### About myself

#### Flow 1.1
`AND` About myself

`AND` I'm the Veteran

`THEN` **collect submitter's (Veteran's) location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect submitter's (Veteran's) postal Code**


| `AND`                | `AND`                              | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                                   |
| ------------------ | -------------------------------- | --------------------------------------------- | ---------------------- | -------------------------------------- |
| About myself| I'm the Veteran | **Collect submitter's (Veteran's) location of residence** | CA, NY, PA, or TX   | **Collect submitter's (Veteran's) postal code** |

#### Flow 1.2
`AND` About myself

`AND` I'm a family member

`THEN` **collect submitter (family member’s) location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect submitter (family member’s) postal code**

| `AND`                | `AND`                              | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                                   |
| ------------------ | -------------------------------- | --------------------------------------------- | ---------------------- | -------------------------------------- |
| About myself | I'm a family member | **Collect submitter (family member’s) location of residence** | CA, NY, PA, or TX      | **Collect submitter (family member’s) postal code** |

### About someone else

#### Flow 2.1
`AND` About someone else

`AND` I'm the Veteran

`THEN` **collect family member's location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN`**collect family member's postal code**

| `AND`                        | `AND`             | `THEN`                                    | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | --------------- | --------------------------------------- | ---------------------- | -------------------------- |
| About someone else | I'm the Veteran | **Collect family member's location of residence** | CA, NY, PA, or TX      | **Collect family member's postal code** |

#### Flow 2.2.1
`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` The Veteran

`THEN` **collect Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect Veteran’s postal code**

| `AND`                        | `AND`                              | `AND`                         | `AND question is about` | `THEN`                            | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | -------------------------------- | --------------------------- | --------------------- | ------------------------------- | ---------------------- | -------------------------- |
| About someone else | I'm a family member | `family_relationship` | The Veteran | **Collect Veteran’s location of residence** | CA, NY, PA, or TX      | **Collect Veteran’s postal code** |

#### Flow 2.2.2
`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` Other family member (not the Veteran or me)

`THEN` **collect other family member’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect other family member’s postal code**

| `AND`                        | `AND`                              | `AND`                                 | `AND question is about` | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                             |
| -------------------------- | -------------------------------- | ----------------------------------- | --------------------- | --------------------------------------------- | ---------------------- | -------------------------------- |
| About someone else | I'm a family member| `family_relationship` | Other family member (not the Veteran or me)  | **Collect other family member’s location of residence** | CA, NY, PA, or TX      | **Collect other family member’s postal code** |

#### Flow 2.3
`AND` About someone else

`AND` I'm a connected to the Veteran through my work

`AND`  `work_role` 

`AND question is about` The Veteran

`THEN` **collect Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect Veteran’s postal code**

| `AND`                        | `AND`                                            | `AND`       | `AND question is about`         | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| -------------------------- | ---------------------------------------------- | --------- | ----------------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| Someone else’s VA benefits | I'm a connected to the Veteran through my work | `work_role` | The Veteran  | **Collect Veteran’s location of residence** | CA, NY, PA, or TX      | **Collect Veteran’s postal code** |

### A general question

#### Flow 3.1
`AND` A general question

`THEN` **collect submitter’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect submitter’s postal code**

| `AND`                     | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| ----------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| A general question | **Collect submitter’s location of residence** | CA, NY, PA, or TX      | **Collect submitter’s postal code** |

### Why do we collect this information?

We collect location of residence and postal code so we can route to the correct queue.

---

## Health care

`IF CATEGORY`
- Health care

### About myself

#### Flow 1.1
`AND` About myself

`AND` I'm the Veteran

`THEN` **collect submitter's (Veteran's) postal code**

| `AND`                | `AND`            | `THEN`                                 |
| ------------------ | --------------- | --------------------------------------- | 
| About myself | I'm the Veteran | **Collect submitter's (Veteran's) postal code** |

#### Flow 1.2
`AND` About myself

`AND` I'm a family member

`THEN` **collect submitter (family member’s) postal code**

| `AND`                | `AND`                              | `THEN`                          |
| ------------------ | -------------------------------- | --------------------------------------------- |
| About myself | I'm a family member | **Collect submitter (family member’s) postal code** |

### About someone else

#### Flow 2.1
`AND` About someone else

`AND` I'm the Veteran

`THEN` **collect family member’s postal code**

| `AND`                        | `AND`             | `THEN`                                    |
| -------------------------- | --------------- | --------------------------------------- |
| About someone else | I'm the Veteran | **Collect family member’s postal code** |

#### Flow 2.2.1

`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` The Veteran

`THEN` **collect Veteran’s postal code**

| `AND`                   | `AND`               | `AND`             | `AND question is about` | `THEN`                      | 
| --------------| -------------------- | --------------------------- | --------------------- | ------------------------------- |
| About someone else | I'm a family member of a Veteran | `family_relationship` | The Veteran | **Collect Veteran’s postal code** |

#### Flow 2.2.2
`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` Other family member (not the Veteran or me)

`THEN` **collect other family member’s postal code**

| `AND`                        | `AND`                              | `AND`                                 | `AND question is about` | `THEN`                                          |
| -------------------------- | -------------------------------- | ----------------------------------- | --------------------- | --------------------------------------------- |
| About someone else | I'm a family member | `family_relationship` | Other family member (not the Veteran or me) | **Collect other family member’s postal code** |

#### Flow 2.3
`AND` About someone else

`AND` I'm a connected to the Veteran through my work

`AND` `work_role` 

`AND question is about` The Veteran

`THEN` **collect Veteran’s postal code**

| `AND`                        | `AND`                                            | `AND`       | `AND question is about`         | `THEN`                                      
| -------------------------- | ---------------------------------------------- | --------- | ----------------------------- | -----------------------------------------|
| About someone else | I'm a connected to the Veteran through my work | `work_role` | The Veteran | **Collect Veteran’s postal code** |

### A general question

#### Flow 3.1
`AND` A general question

`THEN` **collect submitter’s postal code**

| `AND`                     | `THEN`                                      |
| ----------------------- | ----------------------------------------- | 
| A general question  | **Collect submitter’s postal code** |

### Why do we collect this information?

These VHA offices are national. They may need to direct someone to a local medical facility or share local resources, in which case they need the postal code for the person who the inquiry is about.
