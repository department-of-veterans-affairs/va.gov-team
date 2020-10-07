# Findings from Vets.gov analytics around benefit discovery

## Purpose 

What can we learn about the user journey to apply for a benefit on Vets.gov through our analytics?

## Questions to answer

1. On which pages might we have the biggest impact in surfacing benefit recommendations? Which heavily trafficked pages are part of the funnel to apply?
2. What are the abandonement rates in our established pathways to learn about and apply for a benefit?
3. How many visits to these target pages are made by LOA3 users? Which states of login/LOA should we consider or prioritize?

## Findings

### Most visited non-tool pages

#### Finding 1

Top-visited relevant pages to consider for leveraging benefit recommendations:

| Page | Views last 30 days |
| ---- | ------------------ |
| Homepage | 685,346 |
| Dashboard\* | - |
| Application process (all) | 377,707 |
| Eligibility (all) | 184,441 |

\*Dashboard: no analytics yet until it launches, but assume a good portion of homepage views will convert to dashboard

<img width="480" src="https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Images/total-pageviews.png">

#### Finding 2

On average, application process pages are visited **2x** as often as eligibility pages

### Funnel abandonement

#### Finding 3

Users who begin their discovery journey on the Application Process page are more likely to start a new application than those who began at the Eligibility page

Funnels to start an application, ranked by highest retention:

| Path | Retention rate |
| ---- | -------------- |
| Application process > Application intro | 38.75% |
| Eligibility > Application intro | 28.60% |
| Eligibility > Application process > Application intro | 15.59% |

**Inferences:**

Potential reasons seeing eligibility causes higher abandonement:
- Eligibility info helps them rightly determine they aren't eligible
- Eligibility info is confusing and they aren't sure how or whether to proceed

Potential reasons *not* seeing eligibility causes *lower* abandonement:
- Lack of awareness of eligibility info gives them the impression they should just apply and see what happens

Potential reasons the 3 page funnel causes higher abandonement:
- More pages, more clicks, and a *lot* more text to sift through can be overwhelming
- Might find what they need but come back again later and go straight to application process or the application itself

![application-abandonements](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Images/application-abandonements.png)

### LOA

#### Finding 4

**29%** of pageviews for the various discover/apply pages are by LOA3 users (index, eligibility, application process, application intro)

*Grain of salt:* high rates on disability and health care index are likely because they serve as launching points for claim status and health care tools. Excluding those, the rate is still 27%.

