import BannerSlider from "./components/home/BannerSlider";
import MyBkash from "./components/home/MyBkash";
import ServiceSection from "./components/home/ServiceSection";
import BottomNavbar from "./components/shared/BottomNavbar";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className=" ">
      <Navbar></Navbar>
      <ServiceSection></ServiceSection>
      <MyBkash></MyBkash>
      <BannerSlider></BannerSlider>
      <BottomNavbar></BottomNavbar>
    </div>
  );
}

export default App;
