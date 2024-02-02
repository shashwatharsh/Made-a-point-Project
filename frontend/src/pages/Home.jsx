import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import faqImg from "../assets/images/faq-img.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* //  poster section */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* poster content */}
            <div className="">
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Please smile, you have a healthy tooth.
                </h1>
                <p className="text_para ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus vel totam suscipit odio praesentium recusandae
                  laborum modi aut id harum amet reiciendis ducimus, culpa quod
                  cum facere quasi. Doloremque sequi voluptates molestiae libero
                  hic corporis ea in, temporibus dolore! Sunt sed quas
                  asperiores assumenda odit temporibus? Obcaecati quo mollitia
                  illo.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>

              {/* poster counter  */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div className="">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    35+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>
              </div>
            </div>
            {/* poster content  */}
            <div className="flex gap-[30px] justify-end">
              <div className="">
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full" src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // end poster section  */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Proving best tooth care in Dehradun.
            </h2>
            <p className="text_para text-center">
              World class care for everyone. Our health System offers unmatched,
              experienced and expert health care.
            </p>
          </div>
          {/* Grid of Second section  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            {/* Child one  */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="Doctor present in the classroom " />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Get an Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4  text-center">
                  Check Appointment Status Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Pariatur, dolores in dolorum
                  eos recusandae debitis sequi odio tenetur totam inventore!
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            {/* child two Locatoin */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="Doctor present in the classroom " />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Go to the location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4  text-center">
                  Check Location Status Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Pariatur, dolores in dolorum eos recusandae
                  debitis sequi odio tenetur totam inventore!
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            {/* Child three */}
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="Doctor present in the classroom " />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Check Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4  text-center">
                  Check Appointment Status Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Pariatur, dolores in dolorum
                  eos recusandae debitis sequi odio tenetur totam inventore!
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <About />

      {/* Services */}
      <section>
        <div className="container">
          <div className="mx-auto xl:w-[470px]">
            <h2 className="heading text-center">Our Dental Services</h2>
            <p className="text_para text-center">
              World-class care for every tooth, We maintain healty higene a very
              neat and clean clinic.{" "}
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* Feature Section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* feature content  */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Book a dental Treatment <br /> Anytime.
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule The Appointment Directly{" "}
                </li>
                <li className="text_para">2. Get consultancy and treatment.</li>
                <li className="text_para">3. Get to our clinic Directly </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/* feature img */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4  lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className=" text-[10px] leading-[10px] lg:text-[14px] lg:leading-5  text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className=" text-[10px] leading-[10px] lg:text-[14px] lg:leading-5  text-textColor font-[400]">
                      10:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px]  flex items-center justify-center bg-yellowColor rounded py-1 px-[6px]  lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2  lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Shashwat Harsh
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Doctor Section for now */}
      <section>
        <div className="container">
          <div className="mx-auto xl:w-[470px]">
            <h2 className="heading text-center">Our Dental Services</h2>
            <p className="text_para text-center">
              World-class care for every tooth, We maintain healty higene a very
              neat and clean clinic.{" "}
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/* Faq section    */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most Frequently asked question</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial  */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading  text-center">What our Pateints Says:</h2>
            <p className="text_para text-center ">World-Class care for Everyone. Our health System offers Unmatched, experts health Care. </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
