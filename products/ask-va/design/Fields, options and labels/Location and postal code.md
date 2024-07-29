# Location of residence and postal code

Last updated by @tygindraux: June 6, 2024

**Jump to:**
- [Contact preference rules](#contact-preference)
- [Guardianship and VR&E rules](#guardianship-and-vre)
  - [Education > VR&E rules](#education--vre)
- [Health care rules](#health-care)
- [Pages in Figma](#pages-in-figma)

## Contact preference

When we require the location of residence and postal code of the **submitter**, we **first** check which contact preference they choose.

- `IF contact preference =` Phone `OR` Email
  - Then: Continue to require location of residence and/or postal code.
- `ELSE IF contact preference =` U.S. Mail
  - Skip collecting location of residence and postal code separately. They're collected in the **Address component** instead.

## Guardianship and VR&E
`IF CATEGORY`
- Guardianship, custodianship or fiduciary issues
- Veteran Readiness and Employment

`AND TOPIC ≠` Other

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

## Education > VR&E

This works the same as above, because the VR&E topic should be treated just like the VR&E category.

`IF CATEGORY` = Education benefits and work study

`AND TOPIC` = Veteran Readiness and Employment

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

## Health care

`IF CATEGORY`
- Health care

### About myself

#### Flow 1.1
`AND` About myself

`AND` I'm the Veteran

`THEN` **require submitter's (Veteran's) postal code**

| `AND`                | `AND`            | `THEN`                                 |
| ------------------ | --------------- | --------------------------------------- | 
| About myself | I'm the Veteran | **require submitter's (Veteran's) postal code** |

#### Flow 1.2
`AND` About myself

`AND` I'm a family member

`THEN` **require submitter (family member’s) postal code**

| `AND`                | `AND`                              | `THEN`                          |
| ------------------ | -------------------------------- | --------------------------------------------- |
| About myself | I'm a family member | **require submitter (family member’s) postal code** |

### About someone else

#### Flow 2.1
`AND` About someone else

`AND` I'm the Veteran

`THEN` **require family member’s postal code**

| `AND`                        | `AND`             | `THEN`                                    |
| -------------------------- | --------------- | --------------------------------------- |
| About someone else | I'm the Veteran | **require family member’s postal code** |

#### Flow 2.2.1

`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` The Veteran

`THEN` **require Veteran’s postal code**

| `AND`                   | `AND`               | `AND`             | `AND question is about` | `THEN`                      | 
| --------------| -------------------- | --------------------------- | --------------------- | ------------------------------- |
| About someone else | I'm a family member of a Veteran | `family_relationship` | The Veteran | **require Veteran’s postal code** |

#### Flow 2.2.2
`AND` About someone else

`AND` I'm a family member

`AND` `family_relationship`

`AND question is about` Other family member (not the Veteran or me)

`THEN` **require other family member’s postal code**

| `AND`                        | `AND`                              | `AND`                                 | `AND question is about` | `THEN`                                          |
| -------------------------- | -------------------------------- | ----------------------------------- | --------------------- | --------------------------------------------- |
| About someone else | I'm a family member | `family_relationship` | Other family member (not the Veteran or me) | **require other family member’s postal code** |

#### Flow 2.3
`AND` About someone else

`AND` I'm a connected to the Veteran through my work

`AND` `work_role` 

`AND question is about` The Veteran

`THEN` **require Veteran’s postal code**

| `AND`                        | `AND`                                            | `AND`       | `AND question is about`         | `THEN`                                      
| -------------------------- | ---------------------------------------------- | --------- | ----------------------------- | -----------------------------------------|
| About someone else | I'm a connected to the Veteran through my work | `work_role` | The Veteran | **require Veteran’s postal code** |

### A general question

#### Flow 3.1
`AND` A general question

`THEN` **require submitter’s postal code**

| `AND`                     | `THEN`                                      |
| ----------------------- | ----------------------------------------- | 
| A general question  | **require submitter’s postal code** |

### Why do we require this information?

We require postal code because these VHA offices are national but they may need to direct someone to a local medical facility or share local resources.

## Pages in Figma

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
