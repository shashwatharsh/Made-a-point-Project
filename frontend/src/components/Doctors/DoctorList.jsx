import React from "react";
import DoctorCard from "./DoctorCard";
import Loader from '../../components/Loader/Loading'
import Error from "../Error/Error";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";

const DoctorList = () => {

  const {data:doctors, loading, error} = useFetchData(`${BASE_URL}/doctors/`)

  // Loader at 1:26
  return (<>
  {loading && <Loader />}
  {error && <Error />}
    { !loading && !error && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {doctors.map((doctor,index) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>}
    </>
  );
};

export default DoctorList;
