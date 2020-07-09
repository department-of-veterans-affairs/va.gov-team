# View, Add & Update Dependents research & design
**VSA eBenefits Team | March-June 2020**

`James Adams, designer`

---

### Test cases

1. User has disability rating below 30% (Result: user denied access to form)
2. User has disability rating that is exactly 30% (Result: user allowed access to form)
3. User has disability rating higher than 30% (Result: user allowed access to form)
4. User has VA file number (Result: user allowed access to form)
5. User does not have VA file number (Result: user denied access to form !?!)
6. User served before 1969 and has Service Number (Result: SN used rather than SSN)
7. User served after 1974 and has Social Security Number (Result: SSN used)

---

### Users table

#### ID.me identifying information

| first_name | middle_name | last_name | gender | birth_date | ssn | phone | email | password | who_is_using |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| ORVILLE | J | TESTEM | M | 1999-09-19 | 125480999 | 212-827-0999 | vets.gov.user+EBN1@gmail.com | ********dHdv | EBN |
| PAVLI | Q | TESTERMAN | F | 1998-08-18 | 125480998 | 872-827-0998 | vets.gov.user+EBN2@gmail.com | ********dHdv | EBN |
| GERARDO | M | TESTON | M | 1937-07-17 | 125480997 | 310-827-0997 | vets.gov.user+EBN3@gmail.com | ********dHdv | EBN |
| MANUELA | X | TESTUDO | F | 1996-06-16 | 125480996 | 773-827-0996 | vets.gov.user+EBN4@gmail.com | ********dHdv | EBN |
| CAMERON | A | TESTWOOD | F | 1995-05-15 | 125480995 | 917-827-0995 | vets.gov.user+EBN5@gmail.com | ********dHdv | EBN |
| DARDAN | T | TESTY | M | 1934-04-14 | 125480994 | 202-827-0994 | vets.gov.user+EBN6@gmail.com | ********dHdv | EBN |

#### ID.me common information

| last_name | street | city | state | postal_code |
| ----- | ----- | ----- | ----- | ----- |
| TESTEM | 3999 York Parkway | New York | NY | 10009 |
| TESTERMAN | 3998 Illinois Circle | Chicago | IL | 60018 |
| TESTON | 3997 Michigan Avenue | Detroit | MI | 48127 |
| TESTUDO | 3996 California Street | Los Angeles | CA | 90006 |
| TESTWOOD | 3995 Brooklyn Drive | Brooklyn | NY | 10005 |
| TESTY | 3994 Washington Place | Washington | DC | 20004 |

#### Additional information

| last_name | disability_rating | va_file_number | service_number |
| ----- | ----- | ----- | ----- |
| TESTEM | 20% | N |   |
| TESTERMAN | 20% | Y |   |
| TESTON | 30% | N | 1239997 |
| TESTUDO | 30% | Y |   |
| TESTWOOD | 100% | N |   |
| TESTY | 100% | Y | 12394 |

---
