import PreNavbar from "./components/PreNavbar"
import Midnavbar from "./components/Midnavbar"
import Mainnavbar from "./components/Mainnavbar"
import Banner1 from "./components/Banner1"
import Slider from "./components/Slider"
import {bannerImage} from "./data/data.json"

import './App.css'

function App() {
  

  return (
    <>
      <PreNavbar/>
      <Midnavbar/>
      <Mainnavbar/>
      <Banner1/>
      <Slider image={bannerImage.image}/>
      
      
    </>
  )
}

export default App
