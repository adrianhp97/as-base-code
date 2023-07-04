/** Components */
import Layout from "components/layout";
import Main from "pages/main";

/** Utils */
import { createBrowserRouter } from "react-router-dom";

/** Types */
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
    ],
  },
];

export default createBrowserRouter(routes);
