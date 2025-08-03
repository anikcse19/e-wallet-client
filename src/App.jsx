import { Outlet } from "react-router-dom";
import BannerSlider from "./components/home/BannerSlider";
import MyBkash from "./components/home/MyBkash";
import ServiceSection from "./components/home/ServiceSection";
import BottomNavbar from "./components/shared/BottomNavbar";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className=" ">
     <Outlet></Outlet>
      <BottomNavbar></BottomNavbar>
    </div>
  );
}

export default App;
