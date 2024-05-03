# Location of residence and postal code

Last updated by @tygindraux: April 26, 2024
 
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

### About someone else

#### Flow 2.1
`AND` About someone else

`AND` I'm the Veteran

`THEN` **collect Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN`** collect Veteran’s postal code**

| `AND`                        | `AND`             | `THEN`                                    | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | --------------- | --------------------------------------- | ---------------------- | -------------------------- |
| Someone else's VA benefits | I'm the Veteran | **Collect Veteran’s location of residence** | CA, NY, PA, or TX      | **Collect Veteran’s postal code** |

#### Flow 2.2.1
`AND` Someone else's VA benefits

`AND` I'm a family member of a Veteran

`AND` I'm the `role` of the Veteran

`AND question IS about` the Veteran

`THEN` **collect Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect Veteran’s postal code**

| `AND`                        | `AND`                              | `AND`                         | `AND question IS about` | `THEN`                            | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | -------------------------------- | --------------------------- | --------------------- | ------------------------------- | ---------------------- | -------------------------- |
| Someone else's VA benefits | I'm a family member of a Veteran | I'm the role of the Veteran | The Veteran           | **Collect Veteran’s location of residence** | CA, NY, PA, or TX      | **Collect Veteran’s postal code** |

#### Flow 2.2.2
`AND` Someone else's VA benefits

`AND` I'm a family member of a Veteran

`AND` I'm the `family_role` of the Veteran

`AND question IS about` Someone else

`THEN` **collect family member’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **collect family member’s postal code**

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

## Education > VR&E

`IF CATEGORY` = Education benefits and work study

`AND TOPIC` = Veteran Readiness and Employment

### About myself

#### Flow 1.1

`AND` My own VA benefits

`AND` I'm the Veteran

`THEN` **Collect Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **Collect Veteran’s postal Code**


| `AND`                | `AND`                              | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                                   |
| ------------------ | -------------------------------- | --------------------------------------------- | ---------------------- | -------------------------------------- |
| My own VA benefits | I'm the Veteran | **Collect Veteran’s location of residence** | CA, NY, PA, or TX      | **Collect Veteran’s postal code** |

#### Flow 1.2

`AND` My own VA benefits

`AND` I'm a family member of a Veteran

`THEN` **Collect family member’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **Collect family member's postal code**

| `AND`                | `AND`                              | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                                   |
| ------------------ | -------------------------------- | --------------------------------------------- | ---------------------- | -------------------------------------- |
| My own VA benefits | I'm a family member of a Veteran | **Collect family member’s location of residence** | CA, NY, PA, or TX      | **Collect family member's postal code** |

### About someone else

#### Flow 2.1

`AND` Someone else's VA benefits

`AND` I'm the Veteran

`THEN` **Collect Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN`**Collect Veteran’s postal code**

| `AND`                        | `AND`             | `THEN`                                    | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | --------------- | --------------------------------------- | ---------------------- | -------------------------- |
| Someone else's VA benefits | I'm the Veteran | **Collect Veteran’s location of residence** | CA, NY, PA, or TX      | **Collect Veteran’s postal code** |

#### Flow 2.2.1

`AND` Someone else's VA benefits

`AND` I'm a family member of a Veteran

`AND` I'm the `role` of the Veteran

`AND question IS about` the Veteran

`THEN` **Collect Veteran’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **Collect Veteran’s postal code**

| `AND`                        | `AND`                              | `AND`                         | `AND question IS about` | `THEN`                            | `&& ALSO IF Residence =` | `THEN`                       |
| -------------------------- | -------------------------------- | --------------------------- | --------------------- | ------------------------------- | ---------------------- | -------------------------- |
| Someone else's VA benefits | I'm a family member of a Veteran | I'm the role of the Veteran | The Veteran           | **Collect Veteran’s location of residence** | CA, NY, PA, or TX      | **Collect Veteran’s postal code** |

#### Flow 2.2.2

`AND` Someone else's VA benefits

`AND` I'm a family member of a Veteran

`AND` I'm the `family_role` of the Veteran

`AND question IS about` Someone else

`THEN` **Collect family member’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **Collect family member’s postal code**

| `AND`                        | `AND`                              | `AND`                                 | `AND question IS about` | `THEN`                                          | `&& ALSO IF Residence =` | `THEN`                             |
| -------------------------- | -------------------------------- | ----------------------------------- | --------------------- | --------------------------------------------- | ---------------------- | -------------------------------- |
| Someone else's VA benefits | I'm a family member of a Veteran | I'm the family_role  of the Veteran | Someone else          | **Collect family member’s location of residence** | CA, NY, PA, or TX      | **Collect family member’s postal code** |

#### Flow 2.3

`AND` Someone else's VA benefits

`AND` I'm a connected to the Veteran through my work

`AND`  `work_role` 

`AND question IS about` The Veteran (no other option)

`THEN` **Collect submitter’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **Collect submitter’s postal code**

| `AND`                        | `AND`                                            | `AND`       | `AND question IS about`         | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| -------------------------- | ---------------------------------------------- | --------- | ----------------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| Someone else’s VA benefits | I'm a connected to the Veteran through my work | work_role | The Veteran (no other option) | **Collect Submitter’s location of residence** | CA, NY, PA, or TX      | **Collect Submitter’s postal code** |

### A general question

#### Flow 3.1

`AND` A general question

`THEN` **Collect submitter’s location of residence**

`&& ALSO IF residence is =` CA, NY, PA, or TX

`THEN` **Collect submitter’s postal code**

| `AND`                     | `THEN`                                      | `&& ALSO IF Residence =` | `THEN`                         |
| ----------------------- | ----------------------------------------- | ---------------------- | ---------------------------- |
| A general question | **Collect Submitter’s location of residence** | CA, NY, PA, or TX      | **Collect Submitter’s postal code** |

### Why do we collect this information?

We collect location of residence and postal code so we can route to the correct queue.

---

## Health care

### Myself or someone else

`IF CATEGORY =` Health care
 
`IF TOPIC =`

- Career opportunities at VA health facilities
- Caregiver support program
- Family health benefits
- Foreign Medical Program
- Getting care at a local VA medical center
- Vet Centers and readjustment counseling
- Women's health services
- Audiology and hearing aids
- Eligibility and how to apply
- Prosthetics

`AND CONTACT PREFERENCE ≠` US MAIL

`AND VETERAN DECEASED =`  NO

`THEN` **Collect Veteran's postal code**

| `IF TOPIC`                                     | `AND CONTACT PREFERENCE ≠` | `AND VETERAN DECEASED =` | `THEN`                              |
| -------------------------------------------- | ------------------------ | ---------------------- | --------------------------------- |
| Career opportunities at VA health facilities |                          | NO                     | **Collect Veteran's postal code** |
| Caregiver support program                    |                          | NO                     | **Collect Veteran's postal code** |
| Family health benefits                       |                          | NO                     | **Collect Veteran's postal code** |
| Foreign Medical Program                      |                          | NO                     | **Collect Veteran's postal code** |
| Getting care at a local VA medical center    |                          | NO                     | **Collect Veteran's postal code** |
| Vet Centers and readjustment counseling      |                          | NO                     | **Collect Veteran's postal code** |
| Women's health services                      |                          | NO                     | **Collect Veteran's postal code** |
| Audiology and hearing aids                   | U.S. MAIL                | NO                     | **Collect Veteran's postal code** |
| Eligibility and how to apply                 | U.S. MAIL                | NO                     | **Collect Veteran's postal code** |
| Prosthetics                                  | U.S. MAIL                | NO                     | **Collect Veteran's postal code** |

### A general question

`IF TOPIC =`

 - Caregiver support program

`AND VETERAN DECEASED =` NO

`THEN` **Collect Veteran's postal code**

| `IF TOPIC =`                | `AND VETERAN DECEASED =` | `THEN`                              |
| ------------------------- | ---------------------- | --------------------------------- |
| Caregiver support program | NO                     | **Collect Veteran's postal code** |

### Why do we collect this information?

These VHA offices are national, versus being a medical facility. When they need to direct someone to a medical facility, the postal code helps them locate which facility would be best.

Also, the Caregiver Support Program requires the Veteran's postal code because it helps them provide local resources.
