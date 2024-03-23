import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
// import rctimg from "../../assets/images/loc33.jpg";

const ServiceCard = ({ item, index}) => {
  const { name, desc, bgColor, textColor,img } = item;
  // const image2 = require(`../../assets/images/${img}`).default;
  const imagePath = `../../assets/images/${img}`;

  return (
    <div className="py-[30px] px-3 lg:px-5 border rounded-xl bg-slate-50 shadow-lg hover:cursor-pointer hover:scale-105">
      <img src={img} alt="image of tooth" className="rounded-xl mx-auto my-3" />
      <h2 className="text-[26px] leading-9 text-headingColor font-[700] flex justify-center">
        {name}
      </h2>
      <p className="text-[16px] leading-7 font-[400] text-textColor mt-4 flex justify-center">
        {desc}
      </p>
      <div className="flex items-center justify-between mt-[30px]">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E]  mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
