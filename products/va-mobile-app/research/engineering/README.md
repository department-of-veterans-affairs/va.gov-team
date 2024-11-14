# Background
The goal of our technical research is to validate or invalidate bets that were derived from our initial [discovery sprint](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/discovery-sprint). In order to do that, we have a set of activites that will allow us to experiment and test the bets. Each activity has a corresponding output that we will use to communicate our findings. 

## Guiding Question
These bets were made in response to questions that have guided our technical research: How should a VA mobile app be built?What framework and technical approach should the mobile app use?

In other words, the bets are initial recommendations about how the VA could build an app. The first bet focuses on the technical framework that VA could use, the second bet focuses on how VA could implement logon and the third bet focuses on a mobile API strategy. Using the activities and outputs listed below, we will either valiate or invalidate these bets, getting us one step closer to recommending a technical approach for a VA mobile app.

## Bet: React Native provides the best balance between organizational viability and technical feasibility

| Activites                  | Output        |  
| -------------              |-------------|
|Build React Native app |React Native Prototype App | 
|Test UX and accessibility |Identify native-necessary features     | 
|Explore deployment and distribution |App deployment strategy     |  
|Future proof upgrade process|App upgrade strategy

## Bet: Login can be accomplished by enabling the VA.gov-centric part of vets-api to accept OAuth

| Activites                  | Output        |  
| -------------              |-------------|
|Document ID.me/Okta mobile OAuth flow including what is missing and how those gaps will be filled |(1) Identify existing tickets (2) Create new tickets (3) Tech solution plans

## Bet: Versioning the vets-api is the most sustainable strategy to ensure reuse by mobile clients

| Activites                  | Output        |  
| -------------              |-------------|
|Explore and document options for reusing vets-api endpoints  | API Strategy document|
|Catalog API endpoints for mobile| List of endpoints that need to be exposed|


