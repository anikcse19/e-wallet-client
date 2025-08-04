import { createBrowserRouter } from "react-router-dom";

import Register from "../pages/Register";
import Home from "../pages/home/Home";
import App from "../App";
import MobileRecharge from "../pages/MobileRecharge";
import Inbox from "../pages/inbox/Inbox";
import Login from "../pages/Login";
import P2pService from "../pages/p2p/P2pService";

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
      { path: "/recharge", element: <MobileRecharge></MobileRecharge> },
      { path: "/p2p", element: <P2pService></P2pService> },
    ],
  },
  {
    path: "/signup",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
export default router;
