import React from "react"
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div className="">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Tapesh Dashila
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          doloribus voluptatem nisi corporis quaerat est debitis, suscipit
          temporibus! Error eos animi ipsum minus libero, deleniti optio
          accusantium fuga ea maxime recusandae repellendus excepturi magni nisi
          repellat laboriosam omnis placeat nulla sapiente quos illo itaque
          neque veritatis praesentium. Qui, natus recusandae.
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px]">
            <div className="">
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2010")}-{formateDate("12-04-2010")}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-textColor">
                MDS{" "}
              </p>
            </div>
            <p className=" text-[14px] leading-5 font-medium text-textColor">
              Dr. Anuradha Multispecilaity Clinic{" "}
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className=" text-yellowColor text-[15px] leading-6 font-semibold">
                    More than 35 years 
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                    Dentist
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                    Dr. Anuradha MultiSpeciality Clicin 
                </p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
