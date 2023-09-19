import React from "react";
import './Home.css'
import Header from "../Components/Header";
import HomeCover from "../Components/HomeCover";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";

const Home = () => {
   return(
    <div>
         {/*Importing the compoonents */}
        <Header />
        <HomeCover />
        <Slider />
        <Footer />
    </div>
   )
}

export default Home;