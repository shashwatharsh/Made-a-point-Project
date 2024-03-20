import React from "react"
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = ({name, about, qualifications, experiences}) => {
  return (
    <div>
      <div className="">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {name}
          </span>
        </h3>
        <p className="text_para">
         {about}
        </p>
      </div>

      {/* can changel on sencond last 1 : 10  */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px]">
            <div className="">
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold">
                {/* {formateDate("12-04-2010")}-{formateDate("12-04-2010")} */}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-textColor">
                MDS
              </p>
            </div>
            <p className=" text-[14px] leading-5 font-medium text-textColor">
              {/* Dr. Anuradha Multispecilaity Clinic{" "} */}
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px]">
            <div className="">
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold">
                {/* {formateDate("12-04-2010")}-{formateDate("12-04-2010")} */}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-textColor">
                BDS
              </p>
            </div>
            <p className=" text-[14px] leading-5 font-medium text-textColor">
              {/* Dr. Anuradha Multispecilaity Clinic{" "} */}
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px]">
            <div className="">
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold">
                {/* {formateDate("12-04-2010")}-{formateDate("12-04-2010")} */}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-textColor">
              Dental Consultant in specialty of
              </p>
            </div>
            <p className=" text-[14px] leading-5 font-medium text-textColor">
              {/* Dr. Anuradha Multispecilaity Clinic{" "} */}
              Conservative Dentistry &amp;
Endodontics from Govt Dental College &amp; Hospital Patiala,Punjab.
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
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className=" text-yellowColor text-[15px] leading-6 font-semibold">
                    {/* More than 35 years  */}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                    Dentist
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                PGIMER Chandigarh 
                </p>
            </li>
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className=" text-yellowColor text-[15px] leading-6 font-semibold">
                    {/* More than 35 years  */}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                    Dentist
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                Army Dental Corps
                </p>
            </li>
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className=" text-yellowColor text-[15px] leading-6 font-semibold">
                    {/* More than 35 years  */}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                    Dentist
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                HIHT Hospital Jollygrant
                </p>
            </li>
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className=" text-yellowColor text-[15px] leading-6 font-semibold">
                    {/* More than 35 years  */}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                    Dentist
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                HIDS Paonta Sahib(H P)
                </p>
            </li>
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className=" text-yellowColor text-[15px] leading-6 font-semibold">
                    {/* More than 35 years  */}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                    Dentist
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                TMU Moradabad (UP)
                </p>
            </li>
            <li className="p-4 rounded bg-[#fff9ea]">
                <span className=" text-yellowColor text-[15px] leading-6 font-semibold">
                    {/* More than 35 years  */}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                    Dentist
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                HDCRC Hazaribagh and UDMRI Dehradun
                </p>
            </li>

        </ul>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Awards
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px]">
            <div className="">
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold">
                {/* {formateDate("12-04-2010")}-{formateDate("12-04-2010")} */}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-textColor">
              The Honour of working on Govt. of India deputation to BPKIHS, Nepal as well as worked in Kingdom of Saudi Arabia.
              </p>
            </div>
            <p className=" text-[14px] leading-5 font-medium text-textColor">
              {/* Dr. Anuradha Multispecilaity Clinic{" "} */}
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px]">
            <div className="">
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semibold">
                {/* {formateDate("12-04-2010")}-{formateDate("12-04-2010")} */}
              </span>
              <p className=" text-[16px] leading-6 font-medium text-textColor">
                Health icon award in 2016 by CM Uttrakhand
              </p>
            </div>
            <p className=" text-[14px] leading-5 font-medium text-textColor">
              {/* Dr. Anuradha Multispecilaity Clinic{" "} */}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
