import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
// import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className="grioup-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com",
    icon: <AiFillGithub className="grioup-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com",
    icon: <AiOutlineFacebook className="grioup-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com",
    icon: <AiOutlineInstagram className="grioup-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com",
    icon: <AiOutlineWhatsApp className="grioup-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.youtube.com",
    icon: <AiOutlineMail className="grioup-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Frequently Asked Questions",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find Location",
  },
  {
    path: "/",
    display: "Get an Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear;
  return (
    <footer
      className="pb-16 p-10"
      style={{ background: "#131d1e", color: "white" }}
    >
      <div className="container" style={{ background: "" }}>
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div className="">
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-white">
              Copyright {year} developer by Shashwat Harsh all right reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#bbb6b6] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mt-6 text-white">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((items, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={items.path}
                    className="text-[16px] leading-7 font-[400] text-white"
                  >
                    {items.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mt-6 text-white">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((items, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={items.path}
                    className="text-[16px] leading-7 font-[400] text-white"
                  >
                    {items.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h2 className="text-[20px] leading-[30px] font-[700] mt-6 text-white">
              Support:
            </h2>
            <ul>
              {quickLinks03.map((items, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={items.path}
                    className="text-[16px] leading-7 font-[400] text-white"
                  >
                    {items.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
