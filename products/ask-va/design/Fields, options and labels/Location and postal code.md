# Location of residence and postal code

Last updated by @tygindraux: April 28, 2025

Jump to:
- [1. General rules](#1-general-rules)
- [2. Guardianship and VR&E rules](#2-guardianship-and-vre)
- [3. Education > VR&E rules](#3-education--vre)
- [4. Health care rules](#4-health-care)
- [5. Figma](#5-figma)

## 1. General rules

**Most categories and topics do not require a location of residence or a postal code, unless someone chooses to be contacted by mail.**

However, there are a few scenarios where we collect location of residence and/or postal code for routing or other informational purposes. These are:
- `IF CATEGORY =` Guardianship, custodianship or fiduciary issues `AND TOPIC ≠` Other
- `IF CATEGORY =` Veteran Readiness and Employment `AND TOPIC ≠` Other
- `IF CATEGORY` = Education benefits and work study `AND TOPIC =` Veteran Readiness and Employment
- `IF CATEGORY` = Health care

(These categories and topics have different rules, described below in detail.)

In general, when we require a location of residence and/or a postal code for the **submitter**, we **first** check which contact preference they choose. If their contact preference is phone or email, then we carry on asking for their location of residence and/or postal code. **But**, if their contact preference is U.S. mail, then we skip collecting their location of residence and/or postal code separately. They're collected on the mailing address page instead.

-----

## 2. Guardianship and VR&E

`IF CATEGORY =`
- Guardianship, custodianship or fiduciary issues
- Veteran Readiness and Employment

`AND TOPIC ≠` Other

**In this section:**
- [About myself](#about-myself)
- [About someone else](#about-someone-else)
- [General question](#a-general-question)

### About myself

#### Flow 1.1
`AND` About myself

`AND` I'm the Veteran

`THEN` **require submitter's (Veteran's) location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require submitter's (Veteran's) postal code**

| `AND`                | `AND`            | `THEN`                                    | `&& ALSO IF Residence =` | `THEN`                       |
| ------------------ | --------------- | --------------------------------------- | ---------------------- | -------------------------- |
| About myself | I'm the Veteran | **require submitter's (Veteran's) location of residence** | CA, NY, PA, or TX      | **require submitter's (Veteran's) postal code** |

#### Flow 1.2
`AND` About myself

`AND` I'm a family member

`THEN` **require submitter (family member’s) location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require submitter (family member’s) postal Code**

| `AND`                | `AND`                              | `THEN`                          | `&& ALSO IF Residence =` |`THEN`                                |
| ------------------ | -------------------------------- | --------------------------------------------- | ---------------------- | -------------------------------------- |
| About myself | I'm a family member | **require submitter (family member’s) location of residence** | CA, NY, PA, or TX      | **require submitter (family member’s) postal code** |

### About someone else

#### Flow 2.1
`AND` About someone else

`AND` I'm the Veteran

`THEN` **require family member’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require family member’s postal code**

| `AND`                        | `AND`             | `THEN`                                    | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | --------------- | --------------------------------------- | ---------------------- | -------------------------- |
| About someone else | I'm the Veteran | **require family member’s location of residence** | CA, NY, PA, or TX      | **require family member’s postal code** |

#### Flow 2.2.1
`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` The Veteran

`THEN` **require Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require Veteran’s postal code**

| `AND`                   | `AND`               | `AND`             | `AND question is about` | `THEN`                      | `&& ALSO IF Residence =` | `THEN`                |
| --------------| -------------------- | --------------------------- | --------------------- | ------------------------------- | ---------------------- | -------------------------- |
| About someone else | I'm a family member of a Veteran | `family_relationship` | The Veteran | **require Veteran’s location of residence** | CA, NY, PA, or TX | **require Veteran’s postal code** |

#### Flow 2.2.2
`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` Other family member (not the Veteran or me)

`THEN` **require other family member’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require other family member’s postal code**

| `AND`                        | `AND`                              | `AND`                                 | `AND question is about` | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                             |
| -------------------------- | -------------------------------- | ----------------------------------- | --------------------- | --------------------------------------------- | ---------------------- | -------------------------------- |
| About someone else | I'm a family member | `family_relationship` | Other family member (not the Veteran or me) | **require other family member’s location of residence** | CA, NY, PA, or TX      | **require other family member’s postal code** |

#### Flow 2.3
`AND` About someone else

`AND` I'm a connected to the Veteran through my work

`AND` `work_role` 

`AND question is about` The Veteran

`THEN` **require Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require Veteran’s postal code**

| `AND`                        | `AND`                                            | `AND`       | `AND question is about`         | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| -------------------------- | ---------------------------------------------- | --------- | ----------------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| About someone else | I'm a connected to the Veteran through my work | `work_role` | The Veteran | **require Veteran’s location of residence** | CA, NY, PA, or TX | **require Veteran’s postal code** |

### A general question

#### Flow 3.1
`AND` A general question

`THEN` **require submitter’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require submitter’s postal code**

| `AND`                     | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| ----------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| A general question | **require submitter’s location of residence** | CA, NY, PA, or TX  | **require submitter’s postal code** |

### Why do we require this information?

We require location of residence and postal code so we can route to the correct queue.

-----

## 3. Education > VR&E

**This works the same as above, because the VR&E topic should be treated just like the VR&E category.**

`IF CATEGORY` = Education benefits and work study

`AND TOPIC` = Veteran Readiness and Employment

**In this section:**
- [About myself](#about-myself-1)
- [About someone else](#about-someone-else-1)
- [General question](#a-general-question-1)

### About myself

#### Flow 1.1
`AND` About myself

`AND` I'm the Veteran

`THEN` **require submitter's (Veteran's) location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require submitter's (Veteran's) postal Code**

| `AND`                | `AND`                              | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                                   |
| ------------------ | -------------------------------- | --------------------------------------------- | ---------------------- | -------------------------------------- |
| About myself| I'm the Veteran | **require submitter's (Veteran's) location of residence** | CA, NY, PA, or TX   | **require submitter's (Veteran's) postal code** |

#### Flow 1.2
`AND` About myself

`AND` I'm a family member

`THEN` **require submitter (family member’s) location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require submitter (family member’s) postal code**

| `AND`                | `AND`                              | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                                   |
| ------------------ | -------------------------------- | --------------------------------------------- | ---------------------- | -------------------------------------- |
| About myself | I'm a family member | **require submitter (family member’s) location of residence** | CA, NY, PA, or TX      | **require submitter (family member’s) postal code** |

### About someone else

#### Flow 2.1
`AND` About someone else

`AND` I'm the Veteran

`THEN` **require family member's location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN`**require family member's postal code**

| `AND`                        | `AND`             | `THEN`                                    | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | --------------- | --------------------------------------- | ---------------------- | -------------------------- |
| About someone else | I'm the Veteran | **require family member's location of residence** | CA, NY, PA, or TX      | **require family member's postal code** |

#### Flow 2.2.1
`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` The Veteran

`THEN` **require Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require Veteran’s postal code**

| `AND`                        | `AND`                              | `AND`                         | `AND question is about` | `THEN`                            | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | -------------------------------- | --------------------------- | --------------------- | ------------------------------- | ---------------------- | -------------------------- |
| About someone else | I'm a family member | `family_relationship` | The Veteran | **require Veteran’s location of residence** | CA, NY, PA, or TX      | **require Veteran’s postal code** |

#### Flow 2.2.2
`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` Other family member (not the Veteran or me)

`THEN` **require other family member’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require other family member’s postal code**

| `AND`                        | `AND`                              | `AND`                                 | `AND question is about` | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                             |
| -------------------------- | -------------------------------- | ----------------------------------- | --------------------- | --------------------------------------------- | ---------------------- | -------------------------------- |
| About someone else | I'm a family member| `family_relationship` | Other family member (not the Veteran or me)  | **require other family member’s location of residence** | CA, NY, PA, or TX      | **require other family member’s postal code** |

#### Flow 2.3
`AND` About someone else

`AND` I'm a connected to the Veteran through my work

`AND`  `work_role` 

`AND question is about` The Veteran

`THEN` **require Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require Veteran’s postal code**

| `AND`                        | `AND`                                            | `AND`       | `AND question is about`         | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| -------------------------- | ---------------------------------------------- | --------- | ----------------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| Someone else’s VA benefits | I'm a connected to the Veteran through my work | `work_role` | The Veteran  | **require Veteran’s location of residence** | CA, NY, PA, or TX      | **require Veteran’s postal code** |

### A general question

#### Flow 3.1
`AND` A general question

`THEN` **require submitter’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **require submitter’s postal code**

| `AND`                     | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| ----------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| A general question | **require submitter’s location of residence** | CA, NY, PA, or TX      | **require submitter’s postal code** |

### Why do we require this information?

We require location of residence and postal code so we can route to the correct queue.

-----

## 4. Health care

`IF CATEGORY`
- Health care

**In this section:**
- [About myself](#about-myself-2)
- [About someone else](#about-someone-else-2)
- [General question](#a-general-question-2)

### About myself

#### Flow 1.1
`AND` About myself

`AND` I'm the Veteran

`AND` VA medical center is not required

`THEN` **require submitter's (Veteran's) postal code**

| `AND`                | `AND`                  | `AND`                        | `THEN`                          |
| ------------------ | ------------------------------- | ----------- | --------------------------------------------- |
| About myself | I'm the Veteran | VA medical center is not required | **require submitter's (Veteran's) postal code** |

#### Flow 1.2
`AND` About myself

`AND` I'm a family member

`AND` VA medical center is not required

`THEN` **require submitter (family member’s) postal code**

| `AND`                | `AND`                  | `AND`                        | `THEN`                          |
| ------------------ | ------------------------------- | ----------- | --------------------------------------------- |
| About myself | I'm a family member | VA medical center is not required | **require submitter (family member’s) postal code** |

### About someone else

#### Flow 2.1
`AND` About someone else

`AND` I'm the Veteran

`AND` VA medical center is not required

`THEN` **require family member’s postal code**

| `AND`                | `AND`                  | `AND`                        | `THEN`                          |
| ------------------ | ------------------------------- | ----------- | --------------------------------------------- |
| About someone else | I'm the Veteran | VA medical center is not required | **require family member’s postal code** |

#### Flow 2.2.1

`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` The Veteran

`AND` VA medical center is not required

`THEN` **require Veteran’s postal code**

| `AND`                   | `AND`               | `AND`         | `AND question is about`         | `AND` | `THEN`                      | 
| --------------| -------------------- | ---------------------- | ---------------- | --------------------- | ------------------------------- |
| About someone else | I'm a family member of a Veteran | `family_relationship` | The Veteran | VA medical center is not required | **require Veteran’s postal code** |

#### Flow 2.2.2
`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` other family member (not the Veteran or me)

`AND` VA medical center is not required

`THEN` **require other family member’s postal code**

| `AND`                        | `AND`                              | `AND`                | `AND question is about`         | `AND` | `THEN`                                 |
| -------------------------- | -------------------------------- | ----------------------------------- | --------- | --------------------- | --------------------------------------------- |
| About someone else | I'm a family member | `family_relationship` | Other family member (not the Veteran or me) | VA medical center is not required | **require other family member’s postal code** |

#### Flow 2.3
`AND` About someone else

`AND` I'm a connected to the Veteran through my work

`AND` `work_role` 

`AND question is about` The Veteran

`AND` VA medical center is not required

`THEN` **require Veteran’s postal code**

| `AND`                        | `AND`                                            | `AND`       | `AND question is about`         | `AND`    |  `THEN`         |                             
| -------------------------- | ---------------------------------------------- | --------- | ----------------------------- | ---- |  -----------------------------------------|
| About someone else | I'm a connected to the Veteran through my work | `work_role` | The Veteran | VA medical center is not required | **require Veteran’s postal code** |

### A general question

#### Flow 3.1
`AND` A general question

`AND` VA medical center is not required

`THEN` **require submitter’s postal code**

| `AND`                    | `AND`                    | `THEN`                          |
| ----------------------- | ------------------- | ----------------------------------------- | 
| A general question  | VA medical center is not required | **require submitter’s postal code** |

### Why do we require this information?

We require postal code because these VHA offices are national but they may need to direct someone to a local medical facility or share local resources.

We don't require postal code when we collect VA medical center in order to reduce submitter burden. Also, medical facility is more specific and if it's still necessary, an agent can get their postal code through MPI.

-----

## 5. Figma

### Submitter
- If they choose contact by mail: [Your mailing address](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1224-120750)
- If they choose contact by phone or email:
  - [Your location of residence](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1234-154978)
  - [Your postal code](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1234-154979)

### Veteran
- [Veteran location of residence](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1406-73060)
- [Veteran postal code](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1411-151231)

### Family member
- [Family member location of residence](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1411-173956)
- [Family member postal code](https://www.figma.com/design/aQ6JsjD4pvMxSVPAZHllMX/AVA-Page-Library?node-id=1411-183922)
