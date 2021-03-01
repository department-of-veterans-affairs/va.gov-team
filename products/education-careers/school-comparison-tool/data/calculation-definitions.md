# Housing allowance
​
Housing allowance is calculated per term
​
## Conditions for term 3
​
  - Selected value of "School Calendar" field is "Semesters"
​
    $0
​
## Conditions for terms 2 and 3
​
  - GI Bill Chapter is 35 and institution is OJT
​
    Calculated as:
​
        `MONTHLY_RATE_FINAL` * .75
​
​
  - Institution is OJT and `OLD_GI_BILL`
​
    Calculated as:
​
        6.6 / 9 * `MONTHLY_RATE_FINAL`
​
  - Institution is OJT and `ONLY_VRE`
​
    `MONTHLY_RATE_FINAL`
​
  - Institution is OJT
​
    Calculated as:
​
        0.8 * `OJT_RATE_OF_PURSUIT` * (`TIER` + `BAH` + `KICKER_BENEFIT`)
​
  - Selected value of "School Calendar" field is "Non-Traditional" and `NUMBER_OF_TERMS` is 1
​
    $0
​
## Conditions for all terms
​
  - Institution is OJT and user is active duty or the benefit is Chapter 33 and the user's spouse is active duty
​
    $0
​
  - Institution is OJT and either `OLD_GI_BILL` or `ONLY_VRE`
​
    `MONTHLY_RATE_FINAL`
​
  - GI Bill Chapter is 31 and Institution is either Flight or Correspondence
​
    $0
​
  - GI Bill Chapter is 1606 and Institution is Flight
​
    Calculated as:
​
        `TUITION_FEES_PER_TERM` * 0.55
​
    Capped to `TOTAL_HOUSING_ALLOWANCE`
​
  - GI Bill Chapter is 1607 and Institution is Flight
​
    Calculated as:
​
        `TUITION_FEES_PER_TERM` * `CONSECUTIVE_SERVICE` * 0.55
​
    Capped to `TOTAL_HOUSING_ALLOWANCE`
​
  - GI Bill Chapter is 1606 or 1607 and Institution is Correspondence
​
    Calculated as:
​
        `TUITION_FEES_PER_TERM` * `CONSECUTIVE_SERVICE` * 0.6
​
    Capped to `TOTAL_HOUSING_ALLOWANCE`
​
  - User is active duty and GI Bill Chapter is either 30 or 1607
​
    `TUITION_FEES_PER_TERM` capped to `TOTAL_HOUSING_ALLOWANCE`
​
  - Institution is Correspondence or Flight and `OLD_GI_BILL`
​
    `TUITION_FEES_PER_TERM` capped to `TOTAL_HOUSING_ALLOWANCE`
​
  - GI Bill Chapter is either 30, 35, or 1607 and selected  "Enrolled" value is either is "Less Than Half" or "Quarter"
​
    `TUITION_FEES_PER_TERM` capped to `TOTAL_HOUSING_ALLOWANCE`
​
  - Either `OLD_GI_BILL` or `ONLY_VRE`
​
    `TOTAL_HOUSING_ALLOWANCE`
​
  - User is "active duty" or military status is "spouse" and spouse is active duty
​
    `RATE_OF_PURSUIT` * `KICKER_BENEFIT` * `TERM_LENGTH`
​
  - Institution is Flight or Correspondence
​
    $0
​
  - Institution is OJT
​
    Calculated as:
​
        `OJT_RATE_OF_PURSUIT` * (`TIER` * `BAH` + `KICKER_BENEFIT`)
​
  - Is Online
​
    Calculated as:
​
        `TERM_LENGTH` * `RATE_OF_PURSUIT` * ((`TIER` * `AVERAGE_BAH`) / 2 + `KICKER_BENEFIT`)
​
  - Institution country is not "USA"
​
    Calculated as:
​
        `TERM_LENGTH` * `RATE_OF_PURSUIT` * (`TIER` * `AVERAGE_BAH` + `KICKER_BENEFIT`)
​
  - Default calculation
​
        `TERM_LENGTH` * `RATE_OF_PURSUIT` * (`TIER` * `BAH` + `KICKER_BENEFIT`)
​
​
​
​
​
## Calculator values
​
##### `TIER`
​
  A value between 0 and 1.0
​
  - GI Bill Chapter is 31 and answered "Yes" to "Are you eligible for the Post-9/11 GI Bill?"
​
    1.0
​
  - `CUMULATIVE_SERVICE` is "service discharge"
​
    1.0
​
  - `CUMULATIVE_SERVICE` is "purple heart"
​
    1.0
​
  - In all other cases:
​
    `CUMULATIVE_SERVICE`
​
​
##### `BAH`
​
  The institution BAH rate
​
  - User has answered "Yes" to "Did you use your Post-9/11 GI Bill benefit before January 1, 2018?"
​
    Institution `bah`
​
  - User has answered "No" to "Did you use your Post-9/11 GI Bill benefit before January 1, 2018?"
​
    Institution `dodBah`
​
​
##### `AVERAGE_BAH`
​
  The average BAH rate
​
  - User has answered "Yes" to "Did you use your Post-9/11 GI Bill benefit before January 1, 2018?"
​
    Constant `AVGBAH`
​
  - User has answered "No" to "Did you use your Post-9/11 GI Bill benefit before January 1, 2018?"
​
    Constant `AVGDODBAH`
​
##### `OLD_GI_BILL`
​
  `True` if the GI Bill Chapter is 30, 35, 1606, or 1607
​
##### `ONLY_VRE`
​
  `True` if the GI Bill Chapter is 31 and `POST_GI_BILL_ELIGIBLE`
​
##### `POST_GI_BILL_ELIGIBLE`
​
  `True` if the user has answered "Yes" to "Are you eligible for the Post-9/11 GI Bill?"
​
##### `CONSECUTIVE_SERVICE`
​
  A value between 0 and 1.0 that is based on the "Length of longest active duty tour" eligibility dropdown
​
  - "2+ years of consecutive service: 80%"
​
    0.8
​
  - "1+ year of consecutive service: 60%"
​
    0.6
​
  - "90+ days of consecutive service: 40%"
​
    0.4
​
##### `CUMULATIVE_SERVICE`
​
  A value between 0 and 1.0 that is based on the "Cumulative Post-9/11 active duty service" eligibility dropdown
​
##### `MONTHLY_RATE`
​
  Calculated based on benefit chapter
​
  - Chapter 30
​
      - Completed enlistment of 3 or more years
​
      Constant `MGIB3YRRATE`
​
      - Completed enlistment of 2 or more years
​
        - Institution is OJT
​
          Constant `MGIB2YRRATE` * .75
​
        - All other institutions
​
          Constant `MGIB2YRRATE`
​
  - Chapter 31
​
    - 0 dependents
​
      - Institution is OJT
​
        Constant `VRE0DEPRATEOJT`
​
      - All other institutions
​
        Constant `VRE0DEPRATE`
​
    - 1 dependent
​
      - Institution is OJT
​
        Constant `VRE1DEPRATEOJT`
​
      - All other institutions
​
        Constant `VRE1DEPRATE`
​
    - 2 or more dependents
​
      - Institution is OJT
​
        Constant `VRE2DEPRATEOJT`
​
      - All other institutions
​
        Constant `VRE2DEPRATE`
​
  - Chapter 35
​
    - Institution is OJT
​
      Constant `DEARATEOJT`
​
    - Institution is Flight
​
      $0
​
    - `ENROLLED_VALUE` is "full"
​
      constant `DEARATEFULLTIME`
​
    - `ENROLLED_VALUE` is "three quarters"
​
      constant `DEARATETHREEQUARTERS`
​
    - `ENROLLED_VALUE` is "half"
​
      constant `DEARATEONEHALF`
​
    - `ENROLLED_VALUE` is "less than half"
​
      constant `DEARATEFULLTIME`
​
    - `ENROLLED_VALUE` is "quarter"
​
      constant `DEARATEFULLTIME`
​
  - Chapter 1606
​
    - Institution is OJT
​
      Constant `SRRATE` \* .75
​
    - All other institutions
​
      Constant `SRRATE`
​
  - Chapter 1607
​
    - Institution is OJT
​
      Constant `MGIB3YRRATE` \* `CONSECUTIVE_SERVICE` \* .75
​
    - All other institutions
​
      Constant `MGIB3YRRATE` \* `CONSECUTIVE_SERVICE`
​
##### `RATE_OF_PURSUIT`
​
  A value between 0 and 1.0 based on `ENROLLED_VALUE`
​
  - "Full"
​
    1.0
​
  - "three quarters"
​
    0.8
​
  - "more than half"
​
    0.6
​
  - "half or less"
​
    0
​
##### `OJT_RATE_OF_PURSUIT`
​
  A value between 0 and 1.0 that is based on value of "Will be working" field.
​
      {number of hours worked} / 30
​
##### `OLD_GI_BILL_RATE_OF_PURSUIT`
​
  - Institution is OJT
​
    `OJT_RATE_OF_PURSUIT``
​
  - All other institutions
​
    A value between 0 and 1.0 based on `ENROLLED_VALUE` value
​
    - GI Bill Chapter is 35
​
      - "Full"
​
        1.0
​
      - "three quarters"
​
        1.0
​
      - "half"
​
        1.0
​
      - "less than half"
​
        0.5
​
      - "quarter"
​
        0.25
​
    - Default    
​
      - "Full"
​
        1.0
​
      - "three quarters"
​
        0.75
​
      - "half"
​
        0.5
​
      - "less than half"
​
        0.5
​
      - "quarter"
​
        0.25
​
##### `ENROLLED_VALUE`
​
  Selected "Enrolled" value  
​
##### `BUY_UP_VALUE`
​
  The value of the "How much did you pay toward buy-up (up to $600)?", capped at 600
​
##### `BUY_UP_RATE`
​
  - User answered "No" to "Participate in buy-up program?" or GI Bill Chapter is not 30
​
    $0
​
  - User answered "Yes" to "Participate in buy-up program?"
​
    `BUY_UP_VALUE` / 4
​
##### `KICKER_BENEFIT`
​
  - User answered "No" to "Eligible for kicker bonus?"
​
    $0
​
  - User answered "Yes" to "Eligible for kicker bonus?"
​
    Value of the "How much is your kicker?" field
​
##### `MONTHLY_RATE_FINAL`
​
  Calculated as:
​
      `OLD_GI_BILL_RATE_OF_PURSUIT` \* (`MONTHLY_RATE` + `BUY_UP_RATE` + `KICKER_BENEFIT`)
​
##### `TERM_LENGTH`
​
  - Institution is OJT
​
    6
​
  - Selected value of "School Calendar" field is "Semesters"
​
    4.5
​
  - Selected value of "School Calendar" field is "Quarters"
​
    3
​
  - Selected value of "School Calendar" field is "Non-Traditional"
​
    Selected value of "How many terms per year?" field (1, 2, or 3)
​
##### `TOTAL_HOUSING_ALLOWANCE`
​
  Calculated as:
​
    `MONTHLY_RATE_FINAL` * `TERM_LENGTH`
​
##### `NUMBER_OF_TERMS`
​
  - Institution is OJT or Selected value of "School Calendar" field is "Quarters"
​
    3
​
  - Selected value of "School Calendar" field is "Semesters"
​
    2
​
  - Selected value of "School Calendar" field is "Non-Traditional"
​
    Selected value of "How many terms per year?" field (1, 2, or 3)
​
##### `TUITION_FEES`
​
  Entered value of "Tuition and fees per year" field
​
##### `TUITION_FEES_PER_TERM`
​
  Calculated as:
​
    `TUITION_FEES` / `NUMBER_OF_TERMS`

##### `TUITION_FEES_PER_TERM_1`

If any of the following then set value to 0
- is OJT
- giBillChapter is 30, 1606, or 35
- giBillChapter is 31 and either flight or correspondence

If giBillChapter is 31 and not flight or correspondence then set value to [TUITION_FEES_PER_TERM](#tuition_fees_per_term)

Otherwise select minimum value from below and mutiply by [tier](#tier)
- [TUITION_FEES_PER_TERM](#tuition_fees_per_term)
- [TUITION_FEES_CAP](#tuition_fees_cap)
- [TUITION_NET_PRICE](#tuition_net_price)

##### `TUITION_FEES_PER_TERM_2`

If any of the following then set value to 0
- is OJT
- giBillChapter is 30, 1606, or 35
- giBillChapter is 31 and either flight or correspondence
- if calendar is nontraditional and [number of terms](#number_of_terms) is 1

If giBillChapter is 31 and not flight or correspondence then set value to [TUITION_FEES_PER_TERM](#tuition_fees_per_term)

Otherwise select minimum value from below and mutiply by [tier](#tier)
- [TUITION_FEES_PER_TERM](#tuition_fees_per_term)
- [TUITION_FEES_CAP](#tuition_fees_cap) - [TUITION_FEES_PER_TERM_1](#tuition_fees_per_term_1)
- [TUITION_NET_PRICE](#tuition_net_price) - [TUITION_FEES_PER_TERM_1](#tuition_fees_per_term_1)

##### `TUITION_FEES_PER_TERM_3`

If any of the following then set value to 0
- is OJT
- giBillChapter is 30, 1606, or 35
- giBillChapter is 31 and either flight or correspondence
 -  if calendar is semester
 -  if calendar is nontraditional and [number of terms](#number_of_terms) is less than 3

If giBillChapter is 31 and not flight or correspondence then set value to [TUITION_FEES_PER_TERM](#tuition_fees_per_term)

Otherwise select minimum value from below and mutiply by [tier](#tier)
- [TUITION_FEES_PER_TERM](#tuition_fees_per_term)
- [TUITION_FEES_CAP](#tuition_fees_cap) - [TUITION_FEES_PER_TERM_1](#tuition_fees_per_term_1) - [TUITION_FEES_PER_TERM_2](#tuition_fees_per_term_2)
- [TUITION_NET_PRICE](#tuition_net_price) - [TUITION_FEES_PER_TERM_1](#tuition_fees_per_term_1) - [TUITION_FEES_PER_TERM_2](#tuition_fees_per_term_2)

##### `TUITION_FEES_CAP`
if is flight
- use Calculator Constant value `FLTTFCAP`

else if is correspondence 
- use Calculator Constant value `CORRESPONDTFCAP`

else if is public and the country is USA
- If in state student use "Tuition and fees per year" 
- else use "In-state tuition and fees per year"

else
- use Calculator Constant value `TFCAP`

##### `TUITION_NET_PRICE`

[TUITION_FEES](#tuition_fees) - "Scholarships (excluding Pell Grants)" - "How much are you receiving in military tuition assistance"
