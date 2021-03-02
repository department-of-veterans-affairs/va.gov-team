# Input fields
![Screen Shot 2021-03-01 at 10 17 06 AM](https://user-images.githubusercontent.com/1094999/109517479-52931580-7a77-11eb-9c9f-e7ce58c620ae.png)

Data in YellowRibbonProgramSource CSV is related to Weams rows by `facility_code`

"Degree Level" is populated from the `degree_level` column in related rows in YellowRibbonProgramSource.

If "Degree Level" is displayed "Enter an amount" will appear as last selection in addition to values from YellowRibbonProgramSource.

#### Degree Level
If "Enter an amount" is selected

- then "Yellow Ribbon amount from school per year" is shown with a default value of $0

if a degree level value is selected 

- then the "Division or school" and the "Yellow Ribbon amount from school per year" appear
- The "Division or school" is populated with each unique `division_professional_school` found for the institutions
- The "Yellow Ribbon amount from school per year" is populated with the contribution amount for the selected program based on 

# Affected Output fields
"Yellow Ribbon amount from school per year" amount can affect these values

![image](https://user-images.githubusercontent.com/1094999/109347886-cfd54500-7841-11eb-8e96-f45c90233c5d.png)
### Number of terms
[See calculation definitions](calculation-definitions.md#number_of_terms)

### Total per year
The yellow ribbon benefit total of each "paid by school" term is used to determine displayed value

### GI Bill pays to school
"Yellow Ribbon: Total per year" is added to "Tuition and fees: Total per year"

### Out of pocket tuition
"GI Bill pays to school" and "Scholarships (excluding Pell Grants)" is subtracted from "How much are you receiving in military tuition assistance"

### "paid by VA" vs "paid by School"
All amounts with `paid by VA` are the same as the corresponding `paid by school` amount. In the code the respective Yellow Ribbon Benefit for term is divided by 2.

# Calculations

[Code for yellow ribbon calculations](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/gi/selectors/calculator.js#L388)

### Determine Yellow Ribbon Benefit for first term
If any of the following below then set the yellow ribbon benefit term to 0
 - the amount entered into "Yellow Ribbon amount from school per year" (`yellowRibbonAmount`) equals 0
 - [tier](calculation-definitions.md#tier) is less than 1
 - institution field `yr` is false, this is the `current_academic_year_yellow_ribbon` in weams
 - "Will you be a Yellow Ribbon recipient?" is no
 -  `militaryStatus === 'active duty'`
 -  is OJT or Flight or Correspondence
 -  giBillChapter is 30, 31, 1606, or 35
 -  [tuition fees per term](calculation-definitions.md#tuition_fees_per_term) is equal to [tuitionFeesTerm1](calculation-definitions.md#tuition_fees_per_term_1)

Otherwise select minimum value from
- [tuition fees per term](calculation-definitions.md#tuition_fees_per_term) - [tuitionFeesTerm1](calculation-definitions.md#tuition_fees_per_term_1)
- [tuition_net_price](calculation-definitions.md#tuition_net_price) - [tuitionFeesTerm1](calculation-definitions.md#tuition_fees_per_term_1)
- yellowRibbonAmount * 2

### Determine Yellow Ribbon Benefit for second term
If any of the following below then set the yellow ribbon benefit term to 0
 - the amount entered into "Yellow Ribbon amount from school per year" (`yellowRibbonAmount`) equals 0
 - [tier](calculation-definitions.md#tier) is less than 1
 - institution field `yr` is false, this is the `current_academic_year_yellow_ribbon` in weams
 - "Will you be a Yellow Ribbon recipient?" is no
 -  `militaryStatus === 'active duty'`
 -  is OJT or Flight or Correspondence
 -  giBillChapter is 30, 31, 1606, or 35
 -  [tuition fees per term](calculation-definitions.md#tuition_fees_per_term) is equal to [tuitionFeesTerm2](calculation-definitions.md#tuition_fees_per_term_2)
 -  if calendar is nontraditional and [number of terms](calculation-definitions.md#number_of_terms) is 1

Otherwise select minimum value from
- [tuition fees per term](calculation-definitions.md#tuition_fees_per_term) - [tuitionFeesTerm2](calculation-definitions.md#tuition_fees_per_term_2)
- [tuition_net_price](calculation-definitions.md#tuition_net_price) - [tuitionFeesTerm1](calculation-definitions.md#tuition_fees_per_term_1) - [tuitionFeesTerm2](calculation-definitions.md#tuition_fees_per_term_2) - [yrBenTerm1](#Determine-Yellow-Ribbon-Benefit-for-first-term)
- yellowRibbonAmount * 2 - [yrBenTerm1](#Determine-Yellow-Ribbon-Benefit-for-first-term)


### Determine Yellow Ribbon Benefit for third term
If any of the following below then set the yellow ribbon benefit term to 0
 - the amount entered into "Yellow Ribbon amount from school per year" (`yellowRibbonAmount`) equals 0
 - [tier](calculation-definitions.md#tier) is less than 1
 - institution field `yr` is false, this is the `current_academic_year_yellow_ribbon` in weams
 - "Will you be a Yellow Ribbon recipient?" is no
 -  `militaryStatus === 'active duty'`
 -  is OJT or Flight or Correspondence
 -  giBillChapter is 30, 31, 1606, or 35
 -  [tuition fees per term](calculation-definitions.md#tuition_fees_per_term) is equal to [tuitionFeesTerm3](calculation-definitions.md#tuition_fees_per_term_3)
 -  if calendar is semester
 -  if calendar is nontraditional and [number of terms](calculation-definitions.md#number_of_terms) is less than 3



Otherwise select minimum value from
- [tuition fees per term](calculation-definitions.md#tuition_fees_per_term) - [tuitionFeesTerm3](calculation-definitions.md#tuition_fees_per_term_3)
- [tuition_net_price](calculation-definitions.md#tuition_net_price) - [tuitionFeesTerm1](calculation-definitions.md#tuition_fees_per_term_1) - [tuitionFeesTerm2](calculation-definitions.md#tuition_fees_per_term_2) - [tuitionFeesTerm3](calculation-definitions.md#tuition_fees_per_term_3) - [yrBenTerm1](#Determine-Yellow-Ribbon-Benefit-for-first-term) - [yrBenTerm2](#Determine-Yellow-Ribbon-Benefit-for-second-term)
- yellowRibbonAmount * 2 - [yrBenTerm1](#Determine-Yellow-Ribbon-Benefit-for-first-term) - [yrBenTerm2](#Determine-Yellow-Ribbon-Benefit-for-second-term)

# Live staging demo of usage
1. Go to https://staging.va.gov/gi-bill-comparison-tool/profile/11107474 
    - Other institutions can be used that both:
      - have `current_academic_year_yellow_ribbon` in the weams file set to true
      - are not PUBLIC or in the USA
2. Set “Tuition and fees per year” to a number greater than the [number of terms](calculation-definitions.md#number_of_terms) multiplied by the value 22805.34 
    - This is the TFCAP calculator constant that is used to set the tuition fees cap, [see TUITION_FEES_CAP](calculation-definitions.md#tuition_fees_cap) for other possible values
3. Select Yes for "Will you be a Yellow Ribbon recipient?" in "Scholarships and other VA Funding"
4. Have a value other than $0 in "Yellow Ribbon amount from school per year"
5. Click Update Benefits
6. [Affected Output fields](#affected-output-fields) will change
