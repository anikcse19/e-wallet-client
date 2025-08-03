import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Inbox from "../pages/Inbox";
import MobileRecharge from "../pages/MobileRecharge";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/inbox", element: <Inbox></Inbox> },
      { path: "/recharge", element:<MobileRecharge></MobileRecharge>},
    ],
  },
]);
export default router;
