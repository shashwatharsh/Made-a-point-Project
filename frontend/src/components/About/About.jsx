import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/dr3.png";
import { Link } from "react-router-dom";
import drimg from "../../assets/images/Dr_mam.png"
import mamP from "../../assets/images/drmam1.jpeg"

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/* Dra anu image  */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={mamP} alt="Dr Anuradha " className="rounded-xl"/>
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="Dr Anuradha card" />
            </div>
          </div>
          {/* Content about Dr Anuradha */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
            About Clinic
            </h2>
            <p className="text_para">
              Dr. Anuradha&#39;s Multispecialty Dental Clinic is a state of art
              modern dental clinic run by a renowned and experienced Dental
              Specialist. The clinic is hygienic and equipped with two state of
              art dental chairs, Latest portable X- Ray Machine, Digital X Rays
              (Radiovisiography), Fibro-optic hand pieces and Ultrasonic
              scalers, Electronic Apex locators ,Endomotors, Ultrasonic
              instrument cleaner and Autoclaves for certified sterilization .
              Very <span className=" font-[700] underline"> high quality</span> imported dental materials are utilised for the
              patient treatment.
            </p>
            <p className="text_para mt-[30px] ">
              Clinic maintains total asepsis with all precautions to prevent
              cross infection by utilizing world class <span className=" font-[700] underline"> sterilization</span> protocol
              and equipment. The Senior specialist consultants offers
              patient-friendly,<span className="font-[700]"> pain free professional treatment </span> to your dental
              problems while maintaining the highest professional and ethical
              values. All types of dental treatment can be availed under one
              roof as all specialists are called for different specialised
              treatments.
            </p>
            {/* <Link to="/"> */}
            <a href="tel:09897517437">
              <button className="btn" >Call Me</button>
              </a>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
