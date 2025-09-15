import React from 'react';
import { Form, redirect, useLocation, useNavigation, useActionData } from 'react-router-dom';

import authProvider from '../auth';

const LoginPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const from = params.get('from') || '/';

  const navigation = useNavigation();
  const isLoggingIn = navigation.formData?.get('userOptionsKey') != null;

  const actionData = useActionData();

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <Form method='post' replace>
        <input type='hidden' name='redirectTo' value={from} />
        <label htmlFor='user-select'>Choose a user: </label>
        <select name='userOptionsKey' id='user-select'>
          {Object.entries(authProvider.userOptions).map(([id, user]) => {
            return <option key={id} value={id}>{user.username}</option>;
          })}
        </select>
        <button type='submit' disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging in...' : 'Login'}
        </button>
        {actionData?.error && (
          <p style={{ color: 'red' }}>{actionData.error}</p>
        )}
      </Form>
    </div>
  );
};

LoginPage.loader = () => {
  if (authProvider.user) {
    return redirect('/');
  }
};

LoginPage.action = async ({ request }) => {
  const formData = await request.formData();

  const userOptionsKey = formData.get('userOptionsKey');
  await authProvider.signin(userOptionsKey);

  const redirectTo = formData.get('redirectTo');
  return redirect(redirectTo || '/');
};

export default LoginPage;
