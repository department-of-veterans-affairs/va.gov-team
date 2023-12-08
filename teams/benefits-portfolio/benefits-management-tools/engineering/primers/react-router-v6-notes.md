# React Router V3 -> V6 Notes

**Disclaimer**: This is not meant to be exhaustive and does not replace migration guides. Most migration guides however are focused on v3 → v4, v4 → v5, v3 → v5, etc. Not many are focused on v3 → v6, though I tried v3 → v5 as well and found v3 → v6 to be more straightforward. The below are notes about the things that were relevant to me as I migrated the code in `src/applications/claims-status`

## Application entry

```jsx
// Bad
import startApp from 'platform/startup';

// Good
import startApp from 'platform/startup/router';
```

## `<Routes>`, `<Route>`, `<Navigate>`

```jsx
// Old
import { Route } from 'react-router';

<Route path="/" component={ClaimsStatusApp}>
  {/* Nested routes here */}
</Route>

// New
// <Routes> must be parent element of <Route> elements
// `element` replaces `component`
import { Route, Routes } from 'react-router-dom-v5-compat';

// Pay attention to the fact that this is an actual instance of the component, not just the class
<Routes>
  <Route path="/" element={<ClaimsStatusApp />}>
    {/* Nested routes here */}
  </Route>
</Routes>
```

### `<Link>`

```jsx
// Links are pretty much the same as they were before, the main difference is the `to` prop uses relative routing now

// NOTE: navigate also uses relative routing as well

// All examples
// baseURL: /track-claims

// Example #1
// This is an example of using Links for breadcrumbs, this one happens
// to be pointing to the URL the user is currently on
// Current URL: /track-claims/your-claim-letters
// Desired URL: /track-claims/your-claim-letters

// Old
<Link to="your-claim-letters" />

// New
<Link to="../your-claim-letters" />

// Example #2
// This is an example of routing to an adjacent route one level up
// Current URL: /track-claims/your-claims/:id/document-request/:anotherId
// Desired URL: /track-claims/your-claims/:id/files

// Old
<Link to={`your-claims/${id}/files`} />

// New
<Link to={`../files`} />

// Example #3
// Current URL: /track-claims/your-claims/*
// Desired URL: /track-claims/your-claims

// Old
<Link to="your-claims" />

// New
<Link to="/your-claims" />
```

### Navigate

```jsx
// Component-based navigation
<Navigate to="your-claims" />
```

### `router.push`
```jsx
// Old
const { router } = this.props;

router.push('your-claims');

// New
import { useNavigate } from 'react-router-dom-v5-compat';

const navigate = useNavigate();

// NOTE: navigate uses relative routing, see the section on `<Link>`
// for more details
navigate('/your-claims');
```

### `router.replace`

```jsx
// Old
const { router } = this.props;

router.replace('your-claims');

// New

// NOTE: navigate uses relative routing, see the section on `<Link>`
// for more details
navigate('/your-claims', { replace: true });
```

### Redirect

```jsx
// Old
<Redirect
  from="/disability-benefits/track-claims*"
  to="/your-claims"
/>

// New
<Route
  path="/disability-benefits/track-claims*"
  element={<Navigate to="your-claims" replace>}
/>
```

### Index Redirect

```jsx
// Old
<IndexRedirect to="status" />

// New
<Route index element={<Navigate to="status" replace />} />
```

## `<Outlet>`

### Rendering nested routes

```jsx
// Old
export default function ParentComponent({ children }) {
  return (
    <>{children}</>
  );
}

// New
import { Outlet } from 'react-router-dom-v5-compat';

export default function ParentComponent({ children }) {
  return (
    <Outlet />
  );
}
```

### Inject props into `children`

```jsx
// Old

// Parent
export default function ParentComponentThatInjectsProps({ children }) {
  const propToInject = 'I\'m an injected prop!';
  return (
    <>
      {React.Children.map(children, child =>
        React.cloneElement(child, { injectedProp: propToInject }),
      )}
    </>
  );
}

// Child
export default function ChildComponentWithInjectedProp({ injectedProp }) {
  return (
    <>Injected Prop value: {injectedProp}</>
  );
}

// New

// Parent
export default function ParentComponentThatInjectsProps() {
  const propToInject = 'Injected Prop';
  return (
    <Outlet context={[propToInject]} />
  );
}

// Child
import { useOutletContext } from 'react-router-dom-v5-compat';

export default function ChildComponentWithInjectedProp() {
const [injectedProp] = useOutletContext();
  return (
    <>Injected Prop value: {injectedProp}</>
  );
}
```

### withRouter HOC

```jsx
// I found this useful for situations where I had class based components that
// I wasn't ready to convert to functional components. Later versions of React
// Router do not include the withRouter HOC

// NOTE: This is not an exact replacement, but should serve as a decent
// approximation of the withRouter HOC that we use in our apps currently
import React from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom-v5-compat';

export default function withRouter(Component) {
  return props => (
    <Component
      {...props}
      location={useLocation()}
      navigate={useNavigate()}
      params={useParams()}
    />
  );
}
```

### NavLink replacement

```jsx
// This is a slightly different scenario than the one with withRouter
// React Router still provides a NavLink component, but it does not accept
// styling props like the current one does

// NOTE: This may not provide all of the functionality of the current NavLink
// but should be fairly close
import * as React from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom-v5-compat';
import PropTypes from 'prop-types';

const NavLink = React.forwardRef(
  ({ activeClassName, activeStyle, ...props }, ref) => {
    return (
      <BaseNavLink
        ref={ref}
        {...props}
        className={({ isActive }) =>
          [props.className, isActive ? activeClassName : null]
            .filter(Boolean)
            .join(' ')
        }
        style={({ isActive }) => ({
          ...props.style,
          ...(isActive ? activeStyle : null),
        })}
      />
    );
  },
);

NavLink.propTypes = {
  activeClassName: PropTypes.string,
  activeStyle: PropTypes.object,
};

export default NavLink;
```

## Hooks

### `useResolvedPath`

```jsx
// Useful for getting the full path from a string you would provide as
// the "to" prop for a Link

// Example
// Current URL: /track-claims/your-claims/status

const { pathname: currentPath } = useLocation();
const { pathname: resolvedPath } = useResolvedPath('../status');
const { pathname: otherResolvedPath } = useResolvedPath('../files');

console.log(currentPath); -> 'your-claims/status'
console.log(resolvedPath); -> 'your-claims/status'
console.log(otherResolvedPath) -> 'your-claims/files'
```

### `useHistory`

```jsx
// I found that we can still use `useHistory` from the 'react-router-dom'
// package and it seems to work alongside 'react-router-dom-v5-compat'

// There may be a better option for getting the history, but for my purposes
// at the time it seemed to work

// Old
router.listen(location => {
  // Do something with location
});

// New
import { useHistory } from 'react-router-dom';

const history = useHistory();

history.listen(location => {
  // Do something with location
});
```
