When testing components that update in response to asynchronous behavior (e.g. - responding to events, fetching and updating state) you may encounter a scenario where your tests pass in isolation, yet fail in when grouped with the larger test suite. Consider the following React component that calls a `redirect` function if the user is signed in, state is not loading, and the feature toggle is not enabled.

```jsx
export const App = ({ enabled, loading, redirect, signedIn }) => {
  // call redirect if application is not enabled
  const redirecting = signedIn && !loading && !enabled;
  useEffect(() => redirecting && redirect(), [redirecting]);

  if (loading || redirecting) {
    return <va-loading-indicator data-testid="app-loading">;
  }
  return <LandingPage />;
}
// ...
export connect(mapStateToProps, mapDispatchToProps)(App);
```

A unit test scenario for this component in `vets-website` might look like the following:

```jsx
import React from 'react';
import { render } from 'testing-library/react';
import { expect } from 'chai';
import sinon from 'sinon';
import { App } from './App'; // import component disconnected from redux

describe('<App />', () => {
  it('redirects when signed in, state is loaded, and feature is disabled', () => {
    const redirect = sinon.spy();
    const props = { enabled: false, loading: false, redirect, signedIn: true };
    const { getByTestId } = render(<App {...props} />);
    getByTestId('app-loading');
    expect(redirect.calledOnce).to.be.true;
  });
});
```

Running this test works fine when run in isolation, or when grouped with other unit tests within a `vets-website` application. However, because of the asynchronous nature of `useEffect`, problems will arise when running many tests in parallel.

```bash
$ yarn test:unit
...
expected false to be true
```

The solution here is to `waitFor` the asynchronous call to `redirect` by `useEffect`.

```jsx
// ...
import { waitFor } from '@testing-library/dom';

describe('<App />', () => {
  it('redirects when signed in, state is loaded, and feature is disabled', async () => {
    const redirect = sinon.spy();
    const props = { enabled: false, loading: false, redirect, signedIn: true };
    const { getByTestId } = render(<App {...props} />);
    getByTestId('app-loading');
    await waitFor(() => {
      expect(redirect.calledOnce).to.be.true;
    });
  });
});
```

If you find yourself scratching your head as to why your unit tests run "just fine" locally, yet fail as part of the larger test suite, ask yourself, "Is my expectation dependent on the execution of asynchronous code, such as fetching data, a promise resolving, or calls to `useEffect`?" If so, try wrapping your expectation with `waitFor`, push your changes, and let CI tell you if your test flakiness has been resolved.