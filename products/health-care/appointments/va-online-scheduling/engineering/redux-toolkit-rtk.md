# **Redux Toolkit RTK Query Guide for Developers**

## **Introduction to Redux Toolkit RTK Query**

Redux Toolkit RTK Query is a powerful data fetching and caching tool built into **Redux Toolkit (RTK)**. It simplifies API calls, reduces boilerplate code, and provides features like **caching, automatic re-fetching, optimistic updates, and invalidation**.

### **Why Use RTK Query?**

✅ **Simplifies API calls** – Reduces the need for Redux actions and reducers.  
✅ **Auto Caching & Re-fetching** – Prevents unnecessary network requests.  
✅ **Data Invalidation** – Ensures fresh data when required.  
✅ **Optimistic Updates** – Provides real-time UI updates before the server responds.  
✅ **Middleware Integration** – Easily integrates with Redux middleware.

🔗 **Official Documentation:** [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)

---

## **1️⃣ Setting Up RTK Query**

To use RTK Query, install Redux Toolkit and React-Redux:

```sh
npm install @reduxjs/toolkit react-redux
```

🔗 **Setup Guide:** [RTK Query Quick Start](https://redux-toolkit.js.org/rtk-query/overview#quick-start)

Import the required functions in your **API slice**:

```javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
```

---

## **2️⃣ Creating an API Slice**

To define API endpoints, use `createApi`.

```javascript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
  reducerPath: 'myApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
      providesTags: ['Users'],
    }),
    createUser: builder.mutation({
      query: (newUser) => ({
        url: 'users',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation } = myApi;
```

### **Example in Vets-Website Repo**
Here is an example of RTK being used in the `vets-website` repo. This implementation utilizes a pre-existing utility function and integrates error logging using `captureError` for Sentry.

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
          return await apiRequestWithUrl(
            `/vaos/v2/epsApi/referrals/${referralId}`
          );
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

🔗 **More on API Slices:** [RTK Query API Definition](https://redux-toolkit.js.org/rtk-query/api/createApi)

---

## **3️⃣ Adding API Slice to Redux Store**

To integrate RTK Query into Redux, add the API slice to the store:

```javascript
import { configureStore } from '@reduxjs/toolkit';
import { myApi } from './myApi';

export const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});
```

### **Example in Vets-Website Repo**
In `vets-website/src/platform/startup/store.js`, we add the middleware:

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

🔗 **Store Setup Guide:** [RTK Query with Redux](https://redux-toolkit.js.org/rtk-query/usage/setting-up-the-store)

---

## **4️⃣ Using API Hooks in React Components**

Once the API slice is set up, use the generated hooks inside React components.

### **Example in Vets-Website Repo**

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

🔗 **More on Query Hooks:** [Using Queries](https://redux-toolkit.js.org/rtk-query/usage/queries)

---

## **6️⃣ Additional Resources**

🔗 **Official Documentation:** [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)  
🔗 **API Reference:** [RTK Query API](https://redux-toolkit.js.org/rtk-query/api/createApi)  
🔗 **Caching Guide:** [RTK Query Caching](https://redux-toolkit.js.org/rtk-query/usage/cache-behavior)  
🔗 **Store Setup Guide:** [RTK Query with Redux](https://redux-toolkit.js.org/rtk-query/usage/setting-up-the-store)  
🔗 **Examples on GitHub:** [RTK Query Examples](https://github.com/reduxjs/redux-toolkit/tree/master/examples/query)  

---

## **🚀 Conclusion**

RTK Query simplifies data fetching by **reducing boilerplate code, handling caching, and improving performance**. It is a **must-use tool for modern Redux applications**.

Try implementing RTK Query in your project today! 🎉

