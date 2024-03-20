import React from "react";
import loc11 from "../../assets/images/loc11.jpg";
import loc22 from "../../assets/images/loc22.jpg";
import loc33 from "../../assets/images/loc33.jpg";

const Maps = () => {
  return (
    <>
      <section className=" pt-[60px] 2xl:h-[800px]">
        <div className=" flex justify-center m-[20px] mt-0">
          <h2 className="text-[33px] leading-[40px] text-headingColor font-[800] md:text-[45px] md:leading-[60px]">Visit us</h2>
        </div>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div className="">
              <iframe
                className="rounded-xl drop-shadow-2xl md:w-[500] lg:w-[550] sm:w-[48]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55116.01259120381!2d77.96016600048932!3d30.301155547319528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092be2ce7ecd8b%3A0xfa03c36bb60922c8!2sDr%20Anuradha&#39;s%20Multispeciality%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1708357626706!5m2!1sen!2sin"
                // width="390"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p 
              className="m-[20px] from-stone-400">Opposite to sunergy hospital, Ballupur, Dehradun</p>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div className="">
                <img
                  className=" w-full  rounded-xl drop-shadow-2xl "
                  src={loc11}
                  alt=""
                />
              </div>
              <div className="mt-[30px]">
                <img
                  className=" mb-[30px] rounded-xl drop-shadow-xl"
                  src={loc22}
                  alt=""
                />
                <img
                  className=" w-[240px] rounded-xl drop-shadow-xl"
                  src={loc33}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  

    </>
  );
};

export default Maps;
