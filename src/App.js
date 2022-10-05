import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter} from 'react-router-dom'
import Banner from "./components/Banner/Banner";
import Service from "./components/service/Service";
import Work from "./components/work/Work";
import About from "./components/about/About";
import HowWork from "./components/howWrok/HowWork";
import History from "./components/history/History";
import PriceTable from "./components/priceTable/PriceTable";
import CreativeWork from "./components/creativeWork/CreativeWork";
import GeniousPeople from "./components/geniousPeople/GeniousPeople";
import Blog from "./components/blog/Blog";
import Award from "./components/award/Award";
import Partners from "./components/partners/Partners";
import Contact from "./components/contact/Contact";
import Map from "./components/googleMap/Map";
import Footer from "./components/footer/Footer";
import PartnerCarousel from "./components/PartnerCarousel/PartnerCarousel";
import Faq from "./components/faq/Faq";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Banner/>
      <Service/>
      <Work/>
      <About/>
      <HowWork/>
      <History/>
      <PriceTable/>
      <Faq/>
      <CreativeWork/>
      <GeniousPeople/>
      <PartnerCarousel/>
      <Blog/>
      <Partners/>
      <Award/>
      <Contact/>
      <Map/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
