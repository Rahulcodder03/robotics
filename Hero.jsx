import React from "react";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Team from "./Team";
import Contact from "./Contact";

const Hero = () => {
  return (
    <>
    <section className="flex flex-col md:flex-row justify-between items-center h-[70vh] px-10 ">
      <div className="flex-1 mt-16 text-black">
        <h1 className="text-4xl font-bold mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white pr-2">
          Empowering  WEBSITE <br/>Robotics AUTOMATION (codding)
        </h1>
        <p className="mb-6 text-lg">
          Hands-on robotics workshops <br />• Student-friendly kits <br />• School website development
        </p>
        <div className="flex gap-4">
          <a href="contact.html" className="bg-sky-500 hover:opacity-85 text-white px-5 py-2 rounded-md">Request Demo</a>
          <a href="services.html" className="border-2 border-sky-500 text-sky-500 px-5 py-2 rounded-md hover:bg-sky-500 hover:text-white">Our Services</a>
        </div>
      </div>
              <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src="NILA.jpeg" 
            alt="Robotics Automation"
            className="w-[350px] md:w-[300px] h-auto mt-24 md:mt-40  shadow-lg rounded-full object-contain"
          />
        </div>
    </section>
    <Services/>
    <Portfolio/>
    <Team/>
    <Contact/>
</>
  );
};

export default Hero;
