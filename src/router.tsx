import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/home";
import Index from "./pages/app";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <div>login</div>,
  }
]);

export default routes;