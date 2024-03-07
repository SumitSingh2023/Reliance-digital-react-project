import PreNavbar from "./components/PreNavbar"
import Midnavbar from "./components/Midnavbar"
import Mainnavbar from "./components/Mainnavbar"
import Banner1 from "./components/Banner1"
import Slider from "./components/Slider"
import TopDealsMobile from "./components/TopDealsMobile"
import {bannerImage} from "./data/data.json"
import {Ac} from "./data/data.json"
import NewRangeAc from "./components/NewRangeAc"


import './App.css'
import SignUp from "./components/SingUp"
import AllRoutes from "./components/AllRoutes"


function App() {
  

  return (
    <>
      <PreNavbar/>
      <Midnavbar/>
      <Mainnavbar/>
      <Banner1/>
      <Slider image={bannerImage.image}/>
      <TopDealsMobile/>
      <NewRangeAc Ac={Ac}/>
      <AllRoutes/>
      
      
      
    </>
  )
}

export default App
