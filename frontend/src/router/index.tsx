import { createBrowserRouter } from "react-router-dom";

import { SearchResult, ItemDescription } from '../components';
import Root from '../components/Root';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/items",
        element: <SearchResult />
      },
      {
        path: "/items/:id",
        element: <ItemDescription />
      },
      {
        path: "/",
        element: <h1>Nothing to display yet</h1>
      },
    ],
  },
]);
