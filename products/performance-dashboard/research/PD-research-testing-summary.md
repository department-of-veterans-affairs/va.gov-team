Performance Dashboard Design Decisions Summary

Jul 5, 2024


### Summary

Over the course of the past several months the IIR team has conducted interviews, created prototypes, and modified those prototypes based on feedback from users. From this process we have created a Performance Dashboard ideal state design and several versions to get us to the ideal state.\
This document will highlight the following:

1. Initial identification of personas

2. Initial discovery

3. Usability test feedback

4. Prototype reviews

5. Future state design vision

6. Versions to get to future state

7. Additional notes


### 1. Initial identification of personas

#### Exploring potential personas

To help identify our persona(s) we conducted a few Discovery calls.


##### Discovery conversation guide V1:

[Performance Dashboard discovery call conversation guide](https://docs.google.com/document/d/17TJqllEs8EaPv6d0_S-zZgG47h_HJgmuFcD5Mzk233Q/edit#heading=h.jq196tgwocwp)

****

We created a script to ensure that we answered these questions:

****

1. Research Question 1: How does our primary persona use internal VA.gov data?

2. Research Question 2: What pain points do people face when interacting with internal VA data?

3. Research Question 3: Does the perceived value of the current metrics align with their actual value (eg. if the persona expects the login count to be total sign ins to be all sign ins that is not aligned with reality) 

4. Research Question 4: Should we remove or add metrics to the Performance Dashboard?

****


##### Notes from discovery calls:

[Jeff Notes](https://docs.google.com/document/d/1w47dOBuu_OFY7LVxz_KOK8EdTeSjN76ZHrsHFMhlj-A/edit)

[Jon Notes](https://docs.google.com/document/d/1v2X35WPhCUJEqKr6u4jBn187ow9GgTlh1tmAkrQkkqw/edit#heading=h.mof8ud9mcj20)

[Michelle Notes](https://docs.google.com/document/d/1URMdmTGcgaqge7jn-1CfCiVrDAphZmD5SapTzyxljfM/edit#heading=h.uh50l7tnvgnv)


##### Summary of findings:

|                     |                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Audience**        | **Intended use**                                                                                                                                                                                                                                                                                                                                                                              |
| Veterans            | View how VA is serving their demographic. View what tools are available to them.                                                                                                                                                                                                                                                                                                              |
| Members of Congress | View if Veterans are using the tools that are being built for them(usage) and how they are responding (CSAT) to those tools.                                                                                                                                                                                                                                                                  |
| VA benefit leaders  | A VA employee (not OCTO) that wants to see statistics relevant to their work. (Eg VEO employee reporting to OMB on VA.gov. Similar to the Secretary/OCTO dashboards. Audience is internal to VA) Track and share positive highlights about the work that is being done to evangelize the products that are currently being worked on and advocate for additional funding for future products. |
| VA Product Owners   | Internal Product stakeholder who’s product could be represented on the dashboard. Could be either a VA product owner or a VFS product manager.                                                                                                                                                                                                                                                |
| Marketing teams     | Communicate out metrics to business partners and the organization as a whole.                                                                                                                                                                                                                                                                                                                 |

****


#### Primary and secondary personas

We took our understanding of our potential audiences to our Product Owner (Jeff Barns) and asked which audience we should target. He identified the VA employee who wants to see statistics relevant to their work as our intended audience. After some discovery calls we created the following personas.

****

|                                                  |                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Persona Name                                     | Persona description                                                                                                                                                                                                                             | Real people                                                                                                                                                                                                                                                                                                                                                       |
| Primary Persona \| Deep Dive Dave (Melissa)      | Someone who is responsible for a subset of VA.gov tools and needs to show that their business unit is providing value to veterans. They communicate this value to stakeholders who have a vested interest in their business units’ performance. | Jonathan Katora <jonathan.katora@va.gov> (He is someone in VA outside of OCTO(Persona 1), Jeff is familiar with him and his values align with Jeffs. He understands UX research)Melissa RebstockChris Johnston (primary persona but in OCTO, he is an outlier, he is responsible for every bit of data that goes on the performance dashboard)Lauren Alexanderson |
| Secondary Persona \| Summary Sue (Michelle & Ty) | Someone who is responsible for collecting high level metrics across VA.gov so they can regularly present to government officials/stakeholders on usage. This helps them build a story of how VA.gov provides value to veterans.                 | MichelleTyler                                                                                                                                                                                                                                                                                                                                                     |

****


### 2. Exploration and Analysis 

To gain empathy and understanding of the problems of the current performance dashboard, Raquel Eisele conducted a Heuristic review. The findings from this review in conjunction with findings from the discovery calls were used to determine our next steps to create the most impact. 

****

Raquel gathered current reports that were being shared out by our target persona. These reports displayed the metrics and graphs that our target audience was interested in. 

****

We took the feedback from the calls and created an affinity map to understand the trends across calls. We then identified the unmet needs identified from those trends and voted with our Product Team on which needs we wanted to address.


#### Exploration and Analysis of discovery research:

[Experience map](https://www.figma.com/file/2PtOg1H5h5obJUFg7DJpc8/Performance-Dashboard-Larger-Updates?type=design\&node-id=353-8360\&mode=design)

[Heuristic review](https://www.figma.com/file/2PtOg1H5h5obJUFg7DJpc8/Performance-Dashboard-Larger-Updates?type=design\&node-id=0-1\&mode=design)

[Figma affinity map and Analysis of findings](https://www.figma.com/file/2PtOg1H5h5obJUFg7DJpc8/Performance-Dashboard-Larger-Updates?type=design\&node-id=128-3655\&mode=design)

****


#### Metrics Research:

[Research DOMO vs Performance Dashboard differences](https://docs.google.com/spreadsheets/d/1PfzWhQsY-p8cJ7zTOTvpyQPWereS9Gy2SBW8LSMscHM/edit#gid=0)

[Research Users within GA](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/605)

[Research OCTO Goals to Available Data](https://app.zenhub.com/workspaces/va-iir-6508c0bd79e64e0fb5855caf/issues/gh/department-of-veterans-affairs/va-iir/606)

[Performance Dashboard Analytics \_ All Tools on VA.Gov.xlsx](https://api.zenhub.com/attachedFiles/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMWxHQkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--4502e4c8b053947ec48d94208249a03d7e9b59b2/Performance%20Dashboard%20Analytics%20_%20All%20Tools%20on%20VA.Gov.xlsx)

[All metrics mentioned in calls, on current performance dashboard, and in presentations](https://docs.google.com/spreadsheets/d/1oCqpEyrlfof_6bnv93iW4miNHa4olN9SwELovcLjWV8/edit#gid=1226337306)


### 3. Usability research

#### Research Plan

[Research plan document](https://docs.google.com/document/d/1tjW_tQEtun8pipa-LostI3i9y_aTsMyTeZQueCJIfSk/edit#heading=h.dspoq7ro9lat) 


#### Conversation Guide for Usability research (Conversation Guide 2)

[Link to conversation guide](https://docs.google.com/document/d/1ygEEg9lOJqrsMQNmjayET3kUZfHOPGk8Bz4hLtGro50/edit#heading=h.3cpib8m3987m)

****

Overview of designs to present to PO before testing

[Presentation with PO, Jeff Barns](https://docs.google.com/presentation/d/1FTTN1X-t6DfIk9G0GWPKbA92WgZ_SC7_WoaGX0gn_yI/edit#slide=id.g136f74c1558_0_0)


#### Prototype for Usability research 1

[Usability research Prototype 1](https://www.figma.com/design/2PtOg1H5h5obJUFg7DJpc8/Performance-Dashboard-Larger-Updates?node-id=512-55032\&t=1R0bugpPXfltrpXU-1)

****

Reviewed with:

- John Rodriguez

- Michelle Correll

- Tyler (Ty) Brettnacher

- Jonathan Katora

- ![](https://lh7-us.googleusercontent.com/docsz/AD_4nXf-hn8jajtbvcjqN-OwGeiMaHqAXalLkzOa696lCQdvy8gTTbr2Bq0oS14p-tlwYWnxpG41Wr9fiBOdObMxJ6-MrNo-saDD3Z5y08Z1JxdGTy9OM9c8qjLTDgOcFh7X-jQk3pgm-xXf3u11u7H0QmmyuF1P?key=94ATsvW2CZKpOEKWPaXFZg)Melissa

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdiRoS32i9zCfDOLooiu8KKLD4WsRApSFJNTy7LM9V3gg5Oaz3Ja_AKI864lkmgQOWo8gFC1sakMY5GfSMa0lPzNJV9c9X5by06-4CqpxAw8pnq1Ijy_4o3esJ8z_Mmdo9BRESg9Kq9KUvJJTit0Ma1EPg?key=94ATsvW2CZKpOEKWPaXFZg)![](https://lh7-us.googleusercontent.com/docsz/AD_4nXe5OavqJk9QCp5DXL_1FgIZQ1aznk2pWkFzHsR2A8LiAUl4XisnUv4vpM5mPXHxhoJFTPTgiOGqxe0fjKWGUCtxeeClUI9XYrg_1Qpg-3OAhqi3Jnx9K-f-y-bOt9PtvsW9ibGI6njfvQ8Iqp1ch2uxjLIA?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXf4jNRrvzhAGYJCPnp5WEd1B5K1hWZ1vZM5cONmIYsbkktyIWtm2iLmTpnibGOVgroBje6NX41IfJhsR4SKJ5eU5seLQufYTc1-aPxycLAloNGvpDlyya3aC097q6em9b4abNBH3OpLJvlFqAkGHH_D19k?key=94ATsvW2CZKpOEKWPaXFZg)

****

Some changes were made to the design based on the feedback from the Usability review. These changes included:

1. Putting the Highlights and usage highlights back onto one page

2. Removing some metric highlights (eg. total search events)

3. Removing some of the sparkline graphics

4. Showing highlights of activity, traffic, and satisfaction all at the top of the page

5. Using only bar graphs

6. Remove the ability to download a PDF and share a link

7. Add more copy context about what a user is supposed to do on a page

8. Add more clarification about definition of terms

9. Don’t show OCTO goals on this page because that is not for all VA


#### Prototype for usability research 2

We met with Chante and Kevin and reviewed two different options. The design that had a separated graph and highlights performed better and was easier to digest in this review.

Reviewed with:

- Chante Lantos-Swett

- Kevin Hoffman

****

Option 1:

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdf9Cj3tj2FlNs7Baw88D4LLPzJgXQuyXhMhcUWhWodG6JWedeW1RePIwj-rokcS9pFbhKSdRhI8oQ1-dPt1wy3E8r6ROgxIBnOpHpt88Jq7QEbk9uMs2FhQqe-5EgwvR1YEcqYqi9TMwPhzc8-SRG-oAs?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcGyoF7RHuA19M6f81D1x8YqwZZowYru2EU00PVaZ_pgnH2WT-jKvBNgGNNZIfuYyGKQCYABo60dRVIxUJRLKgX9C7CNqjtLddknOqikQxMb26Sgl4NGWTARC2yag7RvDLCW1FBXOLiABPCqFIUyEsxLXrQ?key=94ATsvW2CZKpOEKWPaXFZg)\
Option 2:

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXej7ZsupsHBvve40phVVl5g-iH5GWu_eAAJ1dFx8smbUfV1qUO_hO8bLME8xvWvID7DTcywu7xtxg17Iw2btS2qpRh8x2zK2d20WHeT7qXt2Fwc2TZZYqc61O3CCL7vYKSYatcqPKUTzwl0vJGM2-wiuqk?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXepQEXIkufxqctfzaAP5eF5ECThdPtlRED9An5Ji_gsfewb1nEeYKZapgJNCqsw4dSytzOLlXPM8-95K0hNLmOD6TmkQFG2ey3319Yxyl0oljQMhi0PQJ-2KbFY7lkm7MadV-4nwfzyIVmXaPP7PwzbaV0N?key=94ATsvW2CZKpOEKWPaXFZg)

****

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcmPKXM6mDE_s9KK1nawO0kXbKDk_5mocbNRfmZpdEAz2oq6jVSOVBmeL6YzUDLwSJp62ITdPYuqeOZfeWko5A1X8MlLKj2pJ7z2Meyg20dofDXaImVnHvfFbmEFewQ6lbTjOFK2YhX8HU_tUZtY0-BYRT0?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXc07gJCVmnblkHvIbRwKBvznNzqgQMufPUWxGDtNWxtSKgqBqTEjpUDJsiBWO_eobtVyPu0UlEIhE98htrFmNzM7B1J34nMLDKZPPViLDTWtv6F-puKcSFyPukObL678O2xpHdkWibVrlXNRFGTB9AvzPST?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdnehfBccde7ts5aODvasmWc93un82asdK4OhVYj_cyHWXikjr3aKOHbqKT2U1TG42e6gu09kCnVelZ80TZWQRcd64kV4D0KnnBCRiDEmD7fUIzKO_l_WQsLvFxOFAf0cnKbW4SdMYVf5Ft3RZElkJljCms?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXevpC5QTLqW_Pz_ldur6Vb5QbCDbrND0dEvOwA907HCJZt4oUCPR5ho92Bq0Znw2CFLiZnIXNlfMoTbHVJAowRLxiJkBGPtmjkXOzw2vMcp4MlvuRItLlpk2RYA8JsOZcjHLRUvgpFnFSlW01AbAmHjzskw?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcXXMGAZnI3QZiG3t1p7ONCBuoKToZhuj6Eo9miZ2XjmKW2o4bmW7wt8pqXRoSw-9-J8B16nkLtJLtvuzkKuY8zyS6S2aEeKbPyihO1e5bpbaYSdJJBIIeieWSTrXXhlzPlhz43_pUxD_lyHbU6UiV5_es3?key=94ATsvW2CZKpOEKWPaXFZg)


#### Prototype for usability research 3

Since option 2 (see above) tested better with Chante and Kevin we decided to review only option 2 with Chris Johnston and Lauren Alexanderson. We also made some design updates based on feedback from the Collab cycle team. 

****

Reviewed with:

Chris Johnston

[Usability research script 3](https://docs.google.com/document/d/13IoqMO-ClP-jd_JyYdA4FF7JPN3baN5rzqLJq0xen5k/edit?usp=sharing)\
Reviewed with: 

- Lauren Alexanderson

****

Prototype that was reviewed:

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdx61xqaM_6kmEyd1BmrMCCaFxWKvenbngnIDHeIP0hDSnEbzzEubkHICIP8WEuhVxQatCIIRGtMgiMASaM5XnsF0cdZIV-yjUoIHCdzWU3ktF4m4b9Hztm_ma12K8XKLi9xZKXeVpLBhJuC-6T4krOGZXP?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXf4wHFBEUpNw--zAO2QtWmpo7Qay4H9_FTzDN4CE-6B1SI2osmV2EMiyFeFjP9NmkoK5UWLE3Ged7mtPhErgY35mgcyH7vc0cgUBum3vWUc7de7e6elBFlryT6R8rtab5xeLhstmfdktq16jBPhp-qlZFA?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXe5U2B2tGO3sw82tfgj9_d-qb17jVhV9v68gEtf1vrgW3bVXmQx8_LarRPB_03UQpaOwx_5irwotMXEdzCrZYgP8mEUS4Mh-9zfLAR50FHRE1EoPhZanSkgsu0uNWEeT9PD267J26C3X4D29_S6K3FcKa_g?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXccL1_cMsXeGaJ3vTbUIDFQ6J0tTy8-e7mil2niEu5uxjZ3Z3W1LVhILjGI1dgCZbokHIxgL6slRQaUYhnCY20HuOtYTpuHZmH93cR-Ojp-MIrLslcQL2300ahGaFE0CzsU37elp2SaGjzEYIU7T0dLNqs?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXeZ6y4Y2eEWZATDUmmPxr1KMHn_69c7bi5AMJ-sYW68O_uyiFZfFahLZCtaacHTH1g5kngXsG-IYX5m-qQLw0CimcWS3d-waTa1Io-ftUlRYsvhrUbnbhITAFvZDOY88Nur6u_KPjho98NWvBTHr0Rgp0Dx?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcgMBJdcdCMCxP3c4wiTdIC3CmmeRYUvaqYj7aZY4g0Pdw9Kb4zNOhtk8ViaJgLWGK6vRVgt2oFQFtuPv-qSkGiDqbfAbSqNczoUhYnF4BraaZeYBO6ylbD1w_arFbXuH-5ZbI9H8R4PVQ0bu7NaXVIib3t?key=94ATsvW2CZKpOEKWPaXFZg)


#### Feedback highlights from usability research 2/3

1. Improve definitions for terms

2. Provide more clarity about how to interpret data

3. Provide more capability with graphs (different breakdowns)

4. People want to count of real people not just visits

5. Would be interesting to see mobile highlights

6. Would like to see how much time people spend on a transaction

7. Might be interesting to see most viewed pages

8. Provide more info about **who** is completing a transaction

9. Add more tools

10. Only show colors(red/green) if there is a known positive or negative correlation

11. Allow for the capability to copy and paste cards and charts

12. Would like to be able to save information for historical documentation

13. Show what is normal/successful

14. Make the story of the page more focused on users (not visits)

15. Percent change details are good

16. Show specific numbers of activities (in graph)

17. Would like to see downtime

18. Would like to see failures

19. Would like to see errors

20. Want to see all highlights at the top of the page

21. Provide ability to adjust timeframe (view 18 months, 12  months, Quarter, Previous month, current month)


#### Compiling feedback

[Notes from all Usability Tests](https://docs.google.com/document/d/1BQToIORy3nAZ_0Ex16g2QJXbq0JDnaJhxMRNe1nKrh0/edit#heading=h.ou6wl8qgnfol)

****

Graphical representation of all Feedback:

****

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfb9_MFTaJWf5Fbl4hzOQo3gDOu6sfOmMsL3LW8KpXmtbfh-Uyw3nmmIZ81W42vnAswlzAT-uCSLEC3fWuaxMixjDQuoF_CGHoA2QZONQ2n6kX6w8gHqGX5JbjSXT4PShEnnHSUBAev9h_ReCHQYJWNgQKL?key=94ATsvW2CZKpOEKWPaXFZg)

****


### 4. Vision for future state design

Based on our research and design reviews we have created this concept as a future state vision.

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXejehIiCujZE0-8LA-yMWCe8CNRO8Y8EM5aImYVaQKYT5rkf1BzNgZ_sDgOiW1-mbN9orUKjISACRMsCgpILHnU724M_aCx_q6fstiOtMEvYouiBRVUAoCB2RQsXpxlwxZx-FEERaR6k10YSybjNG863Ns?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfZuC_-_LI9DSklmGirefVYziysxlN3HS9fj7lErFAyufTxv-03z2KL9pf_Q22RqbUiAmW6qlR1CZm2bGKG_Iu2jcEm4-b-LjQZkwVfLV4ITO93-Qxzw2szN2Aa03U9KOQjTDbEbXzKT7trrD2jmjcoKtJr?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXd3rcWM4N_B0KoaVQC-IHAZZ9pxTHnUadFnrLkRPo2b3a3cRFA0QYd-BSccE2lD4_XP2_s2WY0UGAIn6NkEwd6BsnlOsHdEpvXEpxG7rJ0_saMoLfquCn8Oxg0hEnqPoUv_XpJB0lWsFrLQ1_w94FF3GE3D?key=94ATsvW2CZKpOEKWPaXFZg)


### 5. Versions to get to future state

Before we can get to that desired state we will need a lot of development and data work. We propose breaking down the development and data work into smaller releasable chunks that can be iterated on over time.

****

Displayed below are our proposals of how we suggest the proposed changes be implemented.

****

**ITERATION 1**

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfZtJjxAag_PxCAGu738up6CfvBpkChfYtvqJBTnls08edZ_7oUjHoKBLjtJXDjNMvV8Ih5I912yBMUMYWQi8R-B8wIivkoYQ9d1-OXTIUYy_sLdlcYXOBj_N4r8rgd6vDYeotfX-bGkLTw3EljoPl43qJa?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXekfUftwT7GMrFdkpRIFlLbSLgsCWdeUaBwWJhjnaKMyJV6gGEQs-vIO1H6odw97uG4QEw4kmKRSeU9OGo1IIRA-MrHsqLbdHJ5-tfkwugHWvvOGF2lq5OjeoRgF_iBeRRS-Otzpu1zre2Y6qY2wIE0km_f?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfiJD-8ns9BKvccfn-pubL3gN_Br-tf47Z-_h1P1n6JWkkoI870NWxGxLTi470s5fqi8TrXkEH2j0B5NpmN-T6wt70OoYdjAqVnjVcUBEtKIU7alHCHJ9FL1yh7oN2qVHsXFQoJoa9Vf6NYgvlDLgUR9FM-?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXc5j-CnvItQaOuUcdfqTuWTf-EUwcRgRFgfvmy0aJf8jdC0hcXKgPG01Mvkx7MrfTi-7IJLyOOFNUj7CoDj37eHXU_oXropdrPM52Vy6VWqHe-RGxR6qAvh2ZRCC0lOZkwtSCkbfzb0SznUf1jehAIOOURO?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfA1U2lbZdZ0g8J3ClojJsebeVxamoF5Vf6cxn9wt2O5czfS-QxN1_lEjw3Kxmnb_DedqTd55PZaqRnZhdHZYSRR_AOyeXLCNXgT9G3h1dXPtz-r7bCgQ3MnYhw1aDsC774BCbIlZSJ1fK7cGaYPMg5LAI?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdLJ7mdkpkyKqtxSRKgJ-Q4tfNznJS4aVK_PA-tOI74XdJyRvZX9V6CG-yhTfjaxB_BFhzdzWFyw24J_9mQJnYshuqR7ihPuXpJ0JXqfky8KgUVPgY3CAKDIFpKAXt2mrajZXVzlYg3T9wEAJxvbqn50wBk?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdhVnDRpqstIvAuOxb8bEYf2GBppMuVSZb3xYP4xclGABxsb202JKMU_vl_X9TG13Z6R3Z2Ff1_ElxII-GKEt_TBBW5mh_2I292vv8aNSI6mwHWNlBIljVk-gWfT-7Jgs4D17ojscd8J9Ldx3JkoKh6qWhR?key=94ATsvW2CZKpOEKWPaXFZg)

**ITERATION 2**

****![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfjlLS7qyIQwwELK9SA5aJc8BJZbpzt4H1iu6lnoe1CqqBrbla7ImxMf8jNeL0v439BztVxbfX2IKHyreu6_I9xG7nESuo6jrZeqOsGgxnpxEvSezQeSxfOf-JhuaPUwtIqi7TBkdHO_STub_jYe0PucS0e?key=94ATsvW2CZKpOEKWPaXFZg)****

****![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfkEiWIKEqx3Ji4oVBklHBtLDJK2xrBLH1ETvT3YEThwJZWolwlP_0ZfvW5n8kkc7JO9AivUodYEyazmsa89CKpZMWuh91Ga3AkyOrOA1Ic7LhyvsuV6fk1tkUlS67EliyxWEror4yN4vPoaxXsJN4Mltg?key=94ATsvW2CZKpOEKWPaXFZg)****

****![](https://lh7-us.googleusercontent.com/docsz/AD_4nXe_enS0Z5t4p1nio86SG3l5HhiumHIYOWlFi6MvDzx2cqYva5nmBHyZLFTste3t2pZLr5X-xe5ZdeDW4pc5Esqw7GjAUAQFQFX3KaIV2NbUXtU_Cnwbl6y8dlTU15UXKln6A7sieJG08uIOX07T_x4H_lVw?key=94ATsvW2CZKpOEKWPaXFZg)****

****

**SEPTEMBER GOAL**

We hope to reach this point in our design by the end of our existing contract. This is a stretch goal.

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXc6XQMNaSsqPLV7mTsBo8mymgJZ5DQQBpv7z7ZarNWnHAKye34J7vkyPtme4aS-Ot4V6TODeaXZ4Pmgp-hqyh9TYelN_m125MC0kPn1eQyWdskS3YY_xFNe3eMQ8sdIjg3MUHgFjhGpTDIMBa8QgJE5frqd?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcc5SqeljzILCzApHJIyYDDs8GUZzu6EmJZ42fLQHctx3ejobKR0L7Syaay_cLRcgmatnGbUPAf4f2rYqvzUiiL2eIwBYfDJxJEwXeFjR0XqU5VT7o0qkrJY9942DqFo9s0UC4T1BwcLGVsiD5AKfpYXOw?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXf9H4XeSAEGKJ9Y069770-BvnylY4zYERNsIx88-HM5QvCb2vesfXvAXsS27cWjPRNm6aXWUiZlIoL_318HG4vbNCgBa5FYOQSMskwIUfctJE468l64hS5h22cQsJUVLopCUz090QpqNiLeYNPl1_uiu2jD?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXc5N--YeJafikcl_g8PH_PdlH5QLKlz4yMxf1HlOvu3BJqLfk8ogNtitQ7vrRITpL4-aZrDk_wgh5XudjuKOXiPJpyxt1sferMZF2XNsxWRpqcB7JqxXZpkHQahlxRgooSZsZyWZ5_osZv80OPkwU5GTUHk?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXc3CqkMjCUBOLyZ0peqn4YRHNGdiUJbaw3KeRRoaRrHnRjYuT7GgketSDd5esfJ6E6-pqWpV1Xsm7XkOdjAEKDprQBsD17HKVzz1P1YtkPpNaiqr_IxNt0jaKwXGdpDtsyK-NnfKsaB0Z4dkYLV1FW2BMEb?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXcxyyCLWefjbNN3rgKWU3MBZLVnYpS6g35br2XnmHG5w_W1qTa67fO6emeUWEH6swzylj1s2D__P1Z-b7MncrHPuVYACrKqc0abw9DSyIurfxOt99gaX7n-3J8-YA4QabaeK2oCmQSAL7M1b7fxZxmeT_58?key=94ATsvW2CZKpOEKWPaXFZg)

****

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdNzLRu5aj9_THn7cx3tOeZ-EyUJOlgA5FgY7lyz-qXRVdsVZkf_pLnZOsR05FHQ-ZifVuWZ_7EM_DpODrMkOjjMvu4eLysk1JUeZtikCuSmuKLBmDl8PkK5qPXWMzZ1FIaeYJ5LZWXmNyJ1eoVKQCqhzbt?key=94ATsvW2CZKpOEKWPaXFZg)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdrHitnU0N1jg9JM_5HBuE-AsfP0uiWv-6BcjHplUpmSDCg2dD7FKzGhDi8avcVZRzBl3ZHtSFvBOwIBWlvNr78GWmoHyvvS3oYmuAOkVhWlWRoyJXyjWUsavhjbzdVUUmapA_y7AhyoBT-llEbgiYlGUM?key=94ATsvW2CZKpOEKWPaXFZg)

****


### 6. Additional Notes

Though our process of discovery we found out that the performance dashboard was initially create by Chante(PM) and Kevin Hoffman(Designer)
