import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import walogo from "../../assets/images/waBg.png"
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";

const Doctors = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Book appointments</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            {/* <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            /> */}
          </div>
          <button className="btn mt-0 rounded-[0px] rounded-r-sm">
            Got to the doctors arrow mark option and book appointments
          </button>
        </div>
      </section>
      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading  text-center">What our Pateints Says:</h2>
            <p className="text_para text-center ">
              World-Class care for Everyone. Our health System offers Unmatched,
              experts health Care.{" "}
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      <div className="fixed bottom-14 right-14 bg-blue-500  py-2 px-4 rounded-full shadow-md">
        <a href="https://wa.me/9897517437?text=I want to know more about Dr. Anuradha's Dental Clinic." target="_blank">
        <img src={walogo} alt=""  className="w-[30px] h-[30px]"/>
        </a>
      </div>
    </>
  );
};

export default Doctors;
