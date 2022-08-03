import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useEffect, useState } from "react";
import SocialMediaEmail from "../components/Home/SocialMediaArround/SocialMediaEmail";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import ThisCantBeReached from "../components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import WhatIHaveWorked from "../components/Home/WhatIHaveWorked/WhatIHaveWorked";
export default function Home() {
  const [ShowElement,setShowElement] = useState(false);
  const [ShowThisCantBeReached,setShowThisCantBeReached] = useState(true);
  const [ShowAboutMe,setShowAboutMe] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setShowElement(true);
    },4500);
    setTimeout(()=>{
      setShowElement(false);
    },10400);
    setTimeout(()=>{
      setShowThisCantBeReached(false);
    },5400);
    setTimeout(()=>{
      setShowAboutMe(true);
    },5400);
  },[])
  return (
    // ? h-screen is changed to be deleted 
    // ? because it's making it fixed for the whole page
    <div className="relative  bg-AAprimary w-full ">
      {/* {ShowThisCantBeReached?<ThisCantBeReached/>:<></>}
      {ShowElement ? <Startup/>:<></>}
      <Header />
      <MyName />
      <SocialMediaEmail /> */}
      {/* {ShowAboutMe?<AboutMe />:<></>} */}
      <AboutMe />
      <WhatIHaveWorked />
    </div>
  );
}
