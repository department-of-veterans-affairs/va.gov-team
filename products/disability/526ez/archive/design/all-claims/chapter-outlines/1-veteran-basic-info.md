| Veteran Basic Info |
| ------------------ |
| Name, DOB, etc.    |

### X of Y Veteran Information

> {*info box*}
> X of Y Veteran Information
This is the personal information we have on file for you. We'll try to prefill as much of this information as we can with details from your account.  

#### Veteran Identity

{ read-only block }

Name
Social Security number { last four revealed }
VA file number { last four revealed }
Date of birth
Sex

{ endblock }

**Note**: If something doesn’t look right and you need to update your details, please call Veterans Benefits Assistance at 1-800-827-1000, Monday through Friday, 8:00 a.m. to 9:00 p.m. (ET).  



[ Back | Continue ] { buttons }
[Save and finish this application later.]()



------

| Service History                               |
| --------------------------------------------- |
| Finding records that don’t match current name |

### X of Y Veteran Information

#### Service under another name

Did you serve under another name? { radio }
- Yes
- No
{ if yes } { for each name } What name did you serve under?
First name { text field }
Last name { text field } { endfor }

[ Add Another Name ] {button} { endif }
[ Back | Continue ] { buttons } Save and finish this application later.




------

| Service Pay    |
| -------------- |
| Retirement pay |

### X of Y Veteran Information

#### Service Pay

Are you receiving military retired pay? { radio }
- Yes
- No

{if yes to retired pay}
Please choose the branch of service that gives you military retired pay { select }
Branch of service { Big 5, plus NOAA/PHS }
Air Force
Army
Coast Guard
Marine Corps
Navy
National Oceanic and Atmospheric Administration
Public Health Service
{ endif }
[ Back | Continue ] { buttons }

[Save and finish this application later.]()



------



{ if yes to current or future retirement pay }

### X of Y Veteran Information

#### Waiving Retirement Pay
If you decide to receive VA compensation pay, it may reduce the amount you get for retirement pay.

**VA compensation isn't taxable, so it may be the greater benefit.**
If you choose to not receive VA compensation pay so you can continue to get retirement pay, any VA compensation payments you're already getting will stop, and you won't get any more from this application.

Please let us know what type of pay you would like to receive.
{radio button} I want to receive VA disability compensation even though it will reduce my retirement pay.
{ radio button } I don't want to receive VA disability compensation pay so I can keep my retirement pay.
{ endif }
[ Back | Continue ] { buttons }
Save and finish this application later.



------

| Service Pay                               |
| ----------------------------------------- |
| Did you get any severance or training pay 

### X of Y Veteran Information

#### Separation, Severance, or Training Pay

Separation or Severance Pay
The amount you get for VA compensation may be reduced or withheld if you're also receiving severance or separation pay. This includes medical separation pay or any money you get from the Voluntary Separation Incentive (VSI) program. Getting VA compensation pay and separation pay at the same time may mean that we've paid you too much, and you may need to repay the money.    

When did you get a separation or severance payment? { date }

Please choose the branch of service that gave you separation or severance pay { select }

Branch of service { Big 5, plus NOAA/PHS, prior entry pre-selected }
Air Force
Army
Coast Guard
Marine Corps
Navy
National Oceanic and Atmospheric Administration
Public Health Service

How much separation or severance pay did you receive? { currency field }


[ Back | Continue ] { buttons } Save and finish this application later.

-----

| Service Pay         |
| ------------------- |
| Training pay waiver |

### X of Y Veteran Information

#### Training pay

Did you receive active or inactive training pay? { radio }

- Yes
- No

{ if yes training pay}

### Training Pay waiver
The amount you get for VA compensation may be reduced or withheld if you're also receiving active or inactive duty training pay. To keep your training pay you must waive VA compensation pay for the same number of days you receive training pay. Getting VA compensation pay and training pay at the same time may mean that we've paid you too much, and you may need to repay the money.  

I choose to waive VA compensation pay for the days I receive inactive duty training pay, so I can keep my inactive duty training pay. {checkbox}

Training Pay
{ endif }


[ Back | Continue ] { buttons } 
Save and finish this application later.


------


### X of Y Veteran Information


#### Service History


{ for each service period }

**Branch:** $branch
**Type of duty:** $type
**Dates:** $date-range

{ endfor }

{ if end date is in future }

Anticipated place of separation from service? (city and state) { text }

{ elseif }

Place of last separation from service (city and state) { text }

{ endif }

[ Back | Continue ] { buttons }
[Save and finish this application later.]()

-----

| Combat Status                                 |
| --------------------------------------------- |
| If service post 9/11, ask about combat status |


{ if service post 9/11 }

#### Combat status

Did you serve in a combat zone after 9/11/2001? { radio }
- Yes
- No

[ Back | Continue ] { buttons }
[Save and finish this application later.]()

{ end if }

-----

| Reserve and Guard History                     |
| --------------------------------------------- |
|                                               |

### X of Y Veteran Information

#### Reserves and National Guard
Are you currently serving or have you ever served in the Reserves or the National Guard? { radio }
- Yes
- No

{if yes, reserve/guard}
Branch of service (5 Main, NOAA, USPHS) 
Air Force
Army
Coast Guard
Marine Corps
Navy
National Oceanic and Atmospheric Administration
Public Health Service

Military component
- Active duty
- Reserve 
- National Guard

Obligation start date {mm/dd/year}
Obligation end date {mm/dd/year}
Unit name
Unit address
Unit phone number

{endif}


[ Back | Continue ] { buttons }
[Save and finish this application later.]()

-----

| Federal orders                               |
| --------------------------------------------- |
|   |

{if yes, reserve/guard}

### X of Y Veteran Information

#### Federal Orders and Training Pay

Are you currently activated on federal orders within the Reserves or National Guard?
- Yes
- No 
Are you currently receiving inactive-duty training pay? 
- Yes
- No
[ Back | Continue ] { buttons }
[Save and finish this application later.]()



{endif}

-----

| POW Status                                           |
| ---------------------------------------------------- |
| Asking for queue priority and presumptive conditions |


### X of Y Veteran Information

#### Prisoner of War (POW)
Have you ever been a POW?

{if yes, POW}
Start of confinement {mm/dd/year}
End of confinement {mm/dd/year}

{endif}

[ Back | Continue ] { buttons }
[Save and finish this application later.]()


