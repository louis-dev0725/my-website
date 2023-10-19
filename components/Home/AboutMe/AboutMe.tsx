import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["JavaScript (ES6+)", "React", "Vue.js", "Angular", "Ionic framework", "Material UI", "Node.js", "PHP"],
    ["TypeScript", "Next.js", "Nuxt.js", "React Native", "Tailwind CSS", "BootStrap", "Nest.js", "Laravel"],
  ];
  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* // ?Image in Mobile */}
        <div className=" relative w-full h-48 md:hidden  flex justify-center items-center !my-16">
          <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
          <div className="absolute w-48 h-full rounded overflow-hidden">
            <Img
              src={"/Portfolio-portrait.png"}
              className={"object-contain rounded-lg"}
              alt="My Image Not Found"
            />
          </div>
          <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
        </div>

        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hello! My name is <span className="text-AAsecondary">Louis Walter</span>, 
                a <span className="text-AAsecondary">talented software engineer</span> with 
                a <span className="text-AAsecondary">strong passion</span> for 
                <span className="text-AAsecondary"> problem-solving</span> and creating 
                <span className="text-AAsecondary"> impactful codes</span>. I embarked on my computer science 
                journey in 2014, initially exploring game developing. However, I soon realized 
                the importance of <span className="text-AAsecondary">web programming</span> skills and began my journey.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Throughout my career, I have gained extensive experience in 
                <span className="text-AAsecondary"> web, mobile and desktop </span> 
                app development, working across various industries. I have honed my expertise in HTML,  
                CSS, JavaScript, TypeScript, React, Next.js, Vue.js, Nuxt.js, Angular, React Native, 
                Ionic framework, Electron.js, Tailwind CSS, Material UI, Chakra UI, Node.js, Nest.js, 
                PHP, and Laravel, among others. I&apos;m also interested 
                in Web3 and Solidity.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
                My dedication to pushing boundaries and driving advancements is particularly evident 
                in my work in the <span className="text-AAsecondary">frontend development</span>.  
                My passion for <span className="text-AAsecondary">frontend development</span> and 
                <span className="text-AAsecondary"> continuous learning fuels</span> my desire to make a 
                positive impact and contribute to the advancement of technology.
              </span>
            </div>
            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/Portfolio-portrait.png"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
