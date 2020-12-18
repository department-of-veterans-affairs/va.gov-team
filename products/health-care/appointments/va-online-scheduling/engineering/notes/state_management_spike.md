# React State Management Spike

## Background

The `vets-website` project was first created around 5 years ago, when one of the best practices of React was to use the now almost-universal state management tool, [Redux](https://redux.js.org/).  Redux solved a major headache of React developers at the time, [prop drilling](https://kentcdodds.com/blog/prop-drilling) and of course introduced a very simple way to access state, using `connect()` .

While Redux has made it very easy to interact with a global state, it also introduced a few major pain points that we've all become familiar with:

* Any changes to or access of state involves interacting with reducers, action creators/types, and dispatch calls, which ultimately results in having to open many files and trace through the code in your head to figure out what's happening and what impact it has on the rest of the codebase
* Any changes to state will cause all components that consume that value to re-render.  While this is a touted feature of redux, it can cause performance issues
* A global state results in a lot of data that likely doesn't need to be globally accessible, such as UI state for a particular component, or server data which can be cached instead

With the steady adoption of [hooks](https://reactjs.org/docs/hooks-intro.html), modern React is moving away from a single, global state, "back" to more localized state, as well as separating UI state from server data/state. In theory this would require less boilerplate, less files to trace through, and a clearer separation of state.

The purpose of this spike to explore how more modern methods fit into our application and determine:

1. How much page weight does adding a new library for this add?
2. Is the code clearer than the current action/thunk based code?
3. Can we access the cached data outside of React? Or is it easy to pass it from React components to places we need?

## Server Cache vs UI State
One way to reduce the amount of state we store globally is to separate UI from server cache.

From [Kent Dodd's article](https://kentcdodds.com/blog/application-state-management-with-react): 
> There are various categories of state, but every type of state can fall into one of two buckets:
> 
> 1. Server Cache - State that's actually stored on the server and we store in the client for quick-access (like user data).
> 1. UI State - State that's only useful in the UI for controlling the interactive parts of our app (like modal `isOpen` state).
> 
> We make a mistake when we combine the two. Server cache has inherently different problems from UI state and therefore needs to be managed differently. If you embrace the fact that what you have is not actually state at all but is instead a cache of state, then you can start thinking about it correctly and therefore managing it correctly.

The libraries we are testing in this spike are meant to handle server cache, allowing us to remove it from our Redux store.  Throughout VAOS, we store lots of data as well as loading statuses for that data in Redux that can be instead stored in a cache using these libraries.

## How much page weight does adding a new library for this add?
The two most popular libraries for managing server cache are:
1. [React Query](https://react-query.tanstack.com/) (10.5 KB)
1. [SWR](https://swr.vercel.app/) (5 KB)

A comparison of their features can be found [here](https://react-query.tanstack.com/comparison);

For the POC, I chose to use SWR due to the smaller bundle size.  Below you'll find an example of an implementation of SWR on the Past Appointments List.  To simplify it a bit, I removed the dropdown code that allows switching date ranges.

You can checkout the entire branch here: [https://github.com/department-of-veterans-affairs/vets-website/tree/12525-swr-spike](https://github.com/department-of-veterans-affairs/vets-website/tree/12525-swr-spike)

@jbalboni also experimented with using SWR on our provider selection page: https://github.com/department-of-veterans-affairs/vets-website/pull/15426/files

`useSWR()` accepts 2 arguments, a key and a fetcher function. The fetcher argument expects a promise to be returned, which allows us to use our existing `getBookedAppointments` service, so not much additional weight is added to the page.

Other React components can also access the cached `pastAppointments`.

```javascript
import React from 'react';
import useSWR from 'swr';
import {
  getVAAppointmentLocationId,
  isValidPastAppointment,
  sortByDateDescending,
  getBookedAppointments,
} from '../../../services/appointment';
import { getAdditionalFacilityInfo } from '../../redux/actions';
import LoadingIndicator from '@department-of-veterans-affairs/formation-react/LoadingIndicator';
import moment from 'moment';
import AlertBox from '@department-of-veterans-affairs/formation-react/AlertBox';
import { APPOINTMENT_TYPES } from '../../../utils/constants';
import ConfirmedAppointmentListItem from '../cards/confirmed/ConfirmedAppointmentListItem';

export default function PastAppointmentsList() {
  const startOfToday = moment().startOf('day');

  // Once our appointments are fetched, fetch additional facility info.  SWR
  // knows that this facilityData call is dependent on pastAppointments because
  // a function is passed as the first parameter.  A falsy return value will
  // prevent this fetch from occurring
  const { data: pastAppointments = [], error, isValidating } = useSWR(
    'pastAppointments',
    () =>
      getBookedAppointments(
        startOfToday
          .clone()
          .subtract(3, 'months')
          .format(),
        startOfToday
          .clone()
          .subtract(3, 'months')
          .format(),
      ),
  );

  // Once our appointments are fetched, fetch additional facility info.  SWR
  // knows that this facilityData call is dependent on pastAppointments
  const { data: facilityData } = useSWR(
    () => (pastAppointments ? 'pastAppointmentsFacilityInfo' : null),
    () => getAdditionalFacilityInfo(pastAppointments),
  );

  return (
    <div role="tabpanel" aria-labelledby="tabpast" id="tabpanelpast">
      <h2 tabIndex="-1" id="pastAppts" className="vads-u-font-size--h3">
        Past appointments
      </h2>

      {error && (
        <AlertBox
          status="error"
          headline="We’re sorry. We’ve run into a problem"
        >
          We’re having trouble getting your past appointments. Please try again
          later.
        </AlertBox>
      )}

      {isValidating && (
        <div className="vads-u-margin-y--8">
          <LoadingIndicator message="Loading your appointments..." />
        </div>
      )}

      {pastAppointments.length > 0 && (
        <ul className="usa-unstyled-list" id="appointments-list">
          {pastAppointments
            .filter(isValidPastAppointment)
            .sort(sortByDateDescending)
            .map((appt, index) => {
              switch (appt.vaos?.appointmentType) {
                case APPOINTMENT_TYPES.ccAppointment:
                case APPOINTMENT_TYPES.vaAppointment:
                  return (
                    <ConfirmedAppointmentListItem
                      key={index}
                      index={index}
                      appointment={appt}
                      facility={
                        facilityData?.[getVAAppointmentLocationId(appt)]
                      }
                    />
                  );
                default:
                  return null;
              }
            })}
        </ul>
      )}

      {!error &&
        pastAppointments === 0 && (
          <h3 className="vads-u-margin--0 vads-u-margin-bottom--2p5 vads-u-font-size--md">
            You don’t have any appointments in the selected date range
          </h3>
        )}
    </div>
  );
}
```
The most notable changes are calling the appointment service directly to fetch, and using SWR to track the fetch status instead of accessing `pastAppointmentStatus` in redux.

## Is the code clearer than the current action/thunk based code?

For fetching data and handling loading/error states, I think the code is much clearer than the current action/thunk based code.  We can reduce a significant amount of boilerplate by removing the many simple actions we use to update `FETCH_STATUS`es stored in redux as this is built into SWR.  Additionally, we can still keep a majority of our service logic within the service files.  

Note that the above code would get slightly heavier with analytics, as some of these events would be fired within our components instead of our actions.

## Can we access the cached data outside of React? Or is it easy to pass it from React components to places we need?

`useSWR()` is built on top of React hooks, so we would not be able to call it directly from let's say, a redux action creator. We could instead pass the data retrieved from `useSWR` from a react component to our other vanilla JavaScript functions without issue.

However this would definitely create some complexity in our redux actions where we make multiple API calls, such as the new appointment flow.

## Takeaways
Advances in React development have definitely made the use of Redux less necessary, particularly with the `useState` and `useReducer` hooks. While VSP and the forms system continue to use redux, it will be difficult to completely move away from redux, but we can begin to modernize other parts of are app that clearly do not need access to a  global state.

To start, we could potentially use SWR on pages that don't involve manipulating data heavily such as the Appointment List pages.  I think this would clear up a good portion of our redux data, since the data and loading statuses are only used by each individual list.

The new appointment flows are definitely more complex in how we use the fetched data though, so we would need more thought in if it makes sense to incorporate SWR there.

Overall, I do think it is worth beginning to separate our server data from our UI and being more mindful about what actually needs to be stored in our redux state.

## Resources

* [Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react)
* [Using Composition in React to Avoid "Prop Drilling"](https://www.youtube.com/watch?v=3XaXKiXtNjw)
* [swr](https://github.com/vercel/swr)

