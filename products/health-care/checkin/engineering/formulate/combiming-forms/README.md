<!-- markdownlint-disable no-duplicate-heading -->

# Combine the two forms

## Problem we are solving

- We have two apps that do about the same thing, but change based on the expereince we want
- Maintainability and extentibility is getting hard with the two apps (expected)
- Want to create a place that we can pass in a confiratation and get a full form

## Notes

### Option 1 - One monolith form

#### What this means

- We have one application,living at the same url.
- Based on some params being passed in (url param or via LoROTA), we change what is shown

- combine to use the a routing generator
- `useContent`, `useRouting` & `useCheckInExperienceData` to get the differences
- Hooks would query the redux store to get what experience we are on and return the correct data
 example

#### Pros

- We are only maintiaing, update and fixing one app
- High amounts of reusability
- probably create a `useCheckInExperienceHook`

#### Cons

- (more of a limitation) The apps need so stay relatively close to each other in experience, if they deviate too much it could cause more of an issues
- I think things are *just* different enough not to work well
- Tons of if statements

### Option 2 - Create a form engine

#### What this means

- Create a third app that is a form engine
- The two existing apps are now just configations
- still at different urls

#### Pros

- Could create a third forms app faster (more pre-checkins or post check ins)

#### Cons

- Still technically two apps, but created with a forms engine

### Should do anyways

- Combine the API stuff into one place
  - mock to the api we need needs to store UUID so that both apps can use the same data
- redux
- routing
- testing
- align day-of to pre-checkin

### Notes

- try to do it better
- accidentaly breaking things in day of

-

### Questions

- Health questionaires
  - day of
  - timely
  - configurable per appointment/type/location
