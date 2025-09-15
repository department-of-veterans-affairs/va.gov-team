import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      fallbackElement={<p>Initial Load...</p>}
      router={createBrowserRouter(routes)}
    />
  </React.StrictMode>
);
