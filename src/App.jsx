import { Outlet } from "react-router-dom";

import BottomNavbar from "./components/shared/BottomNavbar";


function App() {
  return (
    <div className=" ">
     <Outlet></Outlet>
      <BottomNavbar></BottomNavbar>
    </div>
  );
}

export default App;
