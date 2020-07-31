# Debt Letters MVP Prototypes 

In order to quickly release functionality, the BaM2 team is releasing the Debt Letters functionality in iterations. Prototypes for each iteration will live in this document.

## Initial MVP Release (Debt Letter Table)
Prototypes:<br>
- [MVP prototype](https://preview.uxpin.com/8019d7c491dc05231e456a666928bd6a5ca40e6e#/pages/130777997/simulate/no-panels?mode=i)
- Empty states
   - [If a veteran has never had a VA debt](https://preview.uxpin.com/8019d7c491dc05231e456a666928bd6a5ca40e6e#/pages/130748284/simulate/no-panels?mode=i)
   - [If a veteran doesn't have any current debts, but has resolved debt(s)](https://preview.uxpin.com/8019d7c491dc05231e456a666928bd6a5ca40e6e#/pages/131174953/simulate/no-panels?mode=i)
   - [If a veteran has received a debt after debts were put on hold in March 2020 due to COVID-19](https://preview.uxpin.com/8019d7c491dc05231e456a666928bd6a5ca40e6e#/pages/131174235/simulate/no-panels?mode=i)
- 404 alerts
   - [If VBMS' API returns a 404](https://preview.uxpin.com/8019d7c491dc05231e456a666928bd6a5ca40e6e#/pages/130821989/simulate/no-panels?mode=i)
   - [If DMC's API returns a 404](https://preview.uxpin.com/8019d7c491dc05231e456a666928bd6a5ca40e6e#/pages/130822746/simulate/no-panels?mode=i)
   - [If both APIs return a 404](https://preview.uxpin.com/8019d7c491dc05231e456a666928bd6a5ca40e6e#/pages/130823985/simulate/no-panels?mode=i)

This design includes:
- Unauthenticated landing page
- A section containing the following information about each debt on a Veteran's record: type, date they received the debt, amount they still owe, and information about why they _may_ have the debt
- An uncategorized debt letter downloads table page, where a Veteran can see the subset of letters they can download in chronological order
- An empty state if a Veteran does not have any debt letters on record
- 404 alerts for if the separate API's return 404s or if both API's return 404s

## Second Release (Debt Summaries)

Prototype TBD

## Third Release (Debt Statuses)

Prototype TBD



