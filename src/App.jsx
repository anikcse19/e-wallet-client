import { Outlet } from "react-router-dom";

import BottomNavbar from "./components/shared/BottomNavbar";
import Navbar from "./components/shared/Navbar";


function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>
     <Outlet></Outlet>
      <BottomNavbar></BottomNavbar>
    </div>
  );
}

export default App;
