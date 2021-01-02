import React , {useState} from 'react'
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import {  homeObjFour, homeObjOne, homeObjThree, homeObjTwo, homeObjFive ,homeObjSix, homeObjSeven } from '../Components/InfoSection/data';
import Navbar from '../Components/Navbar/Index'
import Services from '../Components/Services';
import Sidebar from '../Components/Sidebar/Index'


function Home() {
const [isOpen , setIsOpen ] = useState(false)

const toggle = () =>{
    setIsOpen(!isOpen);
};

    return (
        <>
        <Sidebar isOpen={isOpen} toggle= {toggle} />
        <Navbar toggle={toggle} />
        <HeroSection  />
        <InfoSection {...homeObjSeven} />
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjFour} />
        <InfoSection {...homeObjFive}/>
        <InfoSection {...homeObjSix} />
       
      
        <Footer />
     
        </>
    )
}

export default Home
