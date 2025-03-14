# VAOS front end architecture

The VAOS front end application is a client-side React/Redux application built on the Veteran Services Platform (VSP).

## Data flow

![fedataflow](https://user-images.githubusercontent.com/634932/127175054-89996321-b8d7-4e85-88a8-27c4cde8ff9c.png)

The front end can be broken into two layers, roughly:

- The UI layer. This layer is responsible for how to present data to users and maintaining the current state of the UI
- The domain layer. This layer is responsible for managing the data that the UI layer uses.

This distinction can be somewhat fuzzy. The domain layer should be able to answer any domain specific questions and also complete domain related tasks. By domain specific questions we mean questions where the answer is something about the data that you're using, rather than questions about how to present something. "Where is this appointment located?" is a domain specific question, but "How should I format this location's address?" is a presentation question. And by domain related tasks, we mean things that retrieve or change information about the domain. Since the front end does not own any of the domain or data, those tasks are always calls to external services.

Generally, the domain layer should be as simple as possible. We prefer that business logic lives server-side, not in the client. There will always be some kind of domain specific logic in the front end, but we should be wary of being the source of any business rules.

### Redux Toolkit RTK for API Calls

#### **Introduction**
Redux Toolkit RTK Query is being integrated into our application to simplify API interactions, reduce boilerplate code, and improve efficiency in data fetching and state management. This document outlines why we are making this change, the benefits, and how RTK Query is being used in our codebase. For more information on how to use RTK you can refer to [Redux Toolkit RTK](../redux-toolkit-rtk.md)

---

#### **Why Are We Using RTK Query?**
Our application has traditionally used Redux with manual API calls, reducers, and action creators. However, this approach has led to increased complexity, redundant API calls, and unnecessary state management overhead. RTK Query provides:

✅ **Simplified API Calls** – Reduces the need for manually writing reducers and actions for handling API responses.
✅ **Automatic Caching & Re-fetching** – Prevents redundant API requests by storing responses in Redux and refetching only when needed.
✅ **Optimistic Updates** – Allows UI to update before the server response, providing a better user experience.
✅ **Automatic State Synchronization** – Keeps API state consistent without writing additional logic.
✅ **Built-in Error Handling** – Provides standardized error responses and easy integration with error logging tools like Sentry.

---

#### **How RTK Query is Used in Our Application**

RTK Query has been integrated into our application for managing API calls efficiently. Here’s an example of how it's implemented:

1. **Defining an API Slice:**
```javascript
import { createApi } from '@reduxjs/toolkit/query/react';
import { apiRequestWithUrl } from 'applications/vaos/services/utils';
import { captureError } from '../../utils/error';

export const vaosApi = createApi({
  reducerPath: 'api',
  baseQuery: () => ({ data: null }),
  endpoints: (builder) => ({
    getReferralById: builder.query({
      async queryFn(referralId) {
        try {
          return await apiRequestWithUrl(`/vaos/v2/epsApi/referrals/${referralId}`);
        } catch (error) {
          captureError(error);
          return {
            error: { status: error.status || 500, message: error.message },
          };
        }
      },
    }),
  }),
});

export const { useGetReferralByIdQuery } = vaosApi;
```

2. **Adding the API Middleware to Redux Store:**
```javascript
import { vaosApi } from 'applications/vaos/redux/api/vaosApi';

export default function createCommonStore(appReducer = {}, analyticsEvents = []) {
  const reducer = {
    ...appReducer,
    ...commonReducer,
  };

  const store = createStore(
    combineReducers(reducer),
    compose(
      applyMiddleware(
        thunk,
        createAnalyticsMiddleware(analyticsEvents),
        vaosApi.middleware,
      ),
      persistState('i18State'),
      useDevTools ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    ),
  );

  return store;
}
```

3. **Using API Hooks in a Component:**
```javascript
import { useGetReferralByIdQuery } from '../redux/api/vaosApi';

export default function ReferralAppointments(id) {
  const { data: referral, error, isLoading } = useGetReferralByIdQuery(id, {
    skip: !id,
  });

  return (
    <div>
      {isLoading && <div>Loading .......</div>}
      {referral && !isLoading && <div>{referral.uuid}</div>}
    </div>
  );
}
```

---

#### **Benefits in Our Application**
✅ **Cleaner & More Maintainable Code** – Less boilerplate code to manage API calls.
✅ **Better Performance** – Automatic caching prevents redundant network requests.
✅ **Simplified State Management** – No need for custom reducers or actions to handle API state.
✅ **Improved Developer Productivity** – Faster implementation of new features that require API calls.
✅ **Seamless Error Handling** – Standardized error handling using `captureError` for logging and debugging.

---

### **Conclusion**
RTK Query significantly improves how we handle API calls, making our application more efficient and easier to maintain. By leveraging caching, automatic state updates, and simplified API interactions, we reduce unnecessary complexity and improve overall performance.
