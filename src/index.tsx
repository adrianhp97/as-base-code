import React from 'react';

/** Components */
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

/** constants */
import routes from 'routes';

/** Styles */
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
