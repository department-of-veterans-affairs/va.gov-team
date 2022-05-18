# Full Auth Notes

## Where we are

- Punting for now with a simple link to the profile for the user to edit their details.

## Prototype

- Prototype is located on [a branch](https://github.com/department-of-veterans-affairs/vets-website/pull/20673)
- In a demo-able state
- Not production ready
- The BE needs to be running to use it locally.
- Has not be merged into main
- created a new HOC called `withSession` that loads the session from the BE after the user logs
- deprecates `withAuth` and `withForm`
- Adds the id being passed in the URL on every page in the useFormHook
- Storing the session in the URL, there is problably a better place to store this information (session, local, redis, etc)
- Loads the session if the session doesn't exist and the user just logged in the edit page
- Added more data to the edit handler  to make passing around context easier
- No back end changes needed, this was all done inside the current Authentication system

### Outstanding issues for this branch

- Clean up the handle edge cases in the `withSession` HOC
- Disabled editing for NoK and EC by passing false instead the feature flip value
- Local testing is rough and needs to be streamlined
- Thed Edit demographic endpoint needs hooked up in the BE

### Relevant Code Samples

> Edit handler to save details and open log in modal

``` js
 const editHandler = useCallback(
    dataToEdit => {
      if (currentlyLoggedIn) {
        dataToEdit.editAction(dataToEdit);
      } else {
        const params = appendQuery(window.location.pathname, {
          id: token,
          title: dataToEdit.title,
          key: dataToEdit.key,
          originatingUrl: dataToEdit.originatingUrl,
          editingPage: dataToEdit.editingPage,
        });

        getBackendStatuses();
        browserHistory.push(params);
        // add some URL params of what we are edit,
        dispatch(toggleLoginModal(true, 'cta-edit'));
      }
    },
    [currentlyLoggedIn, dispatch, token],
  );
```

> withSession, useEffect

``` js
    useEffect(
      () => {
        const token = getCurrentToken(window)?.token;
        const params = router.location.query;
        if (token && params.editingPage) {
          setIsLoading(true);
          // need to load sessions
          api.v2
            .getSession({ token, checkInType: APP_NAMES.PRE_CHECK_IN })
            .then(session => {
              // console.log({ session });
              // init form
              const pages = createForm();
              const firstPage = pages[0];
              initForm(pages, firstPage);
              // insert session in redux
              setSession(session.uuid, session.permissions);
              setLoadingMessage('found session, loading your details');
              // // need to GET the data
              api.v2.getPreCheckInData(session.uuid).then(data => {
                // console.log({ data });
                setLoadingMessage('found your details, restoring form');
                // insert data in redux
                dispatchSetVeteranData(data.payload);
                // get value from payload
                const value = data.payload[params.editingPage][params.key];
                // redirect to editing page
                const editingData = {
                  ...params,
                  value,
                };
                setEditContext(editingData);
                const url = URLS.EDIT_PHONE_NUMBER;
                // console.log({ url });
                jumpToPage(url);
              });
            });
        } else {
          setIsLoading(false);
        }
      },
      [
        goToErrorPage,
        jumpToPage,
        getCurrentToken,
        router.location.query,
        initForm,
        setSession,
        dispatchSetVeteranData,
        setEditContext,
      ],
    );

```

> useFormRouting

``` js
 const goToNextPage = useCallback(
    () => {
      const here = getCurrentPageFromRouter();
      const currentPageIndex = pages.findIndex(page => page === here);
      const nextPage = pages[currentPageIndex + 1] ?? URLS.ERROR;
      const query = {
        pathname: nextPage,
      };
      // get all url keys
      const queryParams = new URLSearchParams({ id: token }).toString();
      // append to string
      const search = queryParams ? `?${queryParams}` : '';
      // add to query
      query.search = search;
      router.push(query);
    },
    [getCurrentPageFromRouter, pages, router, token],
  );
```

## Next Steps

- Figure out if the duplication of work is worth it or not.
- Investigate ways to track usage and drop off point during flows
- Complete the BE endpoints to push data to the correct systems
- Figure out when we are sending the demographics confirmation status
- Test and find edge cases
