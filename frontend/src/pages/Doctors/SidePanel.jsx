import { useEffect, useState } from "react";
import convertTime from "../../utils/convertTime";
import { BASE_URL, token } from "../../config";
// import Loading from "../../components/Loader/Loading";
import { useNavigate } from "react-router-dom";
// import Error from "../../components/Error/Error";
import useGetProfile from "../../hooks/useFetchData";
import { toast } from "react-toastify";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const navigate = useNavigate();
  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  const [sendData, setSendData] = useState({
    doctorId: "",
    ticketPrice: "",
    appointmentDate: "",
    email: "",
  });

  const [otp, setOtp] = useState("");
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    setSendData({
      doctorId: doctorId,
      ticketPrice: ticketPrice,
      appointmentDate: "",
      email: userData.email,
    });
  }, [userData]);

  const handleInputChange = (e) => {
    setSendData({ ...sendData, [e.target.name]: e.target.value });
  };

  console.log("doctor id " + sendData.doctorId);

  const submitHandler = async (Event) => {
    Event.preventDefault();
    // setLoading(true);

    try {
      // my route is user not users for frontent applicaiton
      const res = await fetch(`${BASE_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(sendData),

      });
      const dataB  = await res.json();


      if (!res.ok) {
        throw new Error(message);
      }

      //   setLoading(false);
      console.log(dataB);
      setBookingId(dataB.bookingId)
      toast.success("Otp send Successfully on "+userData.email);
    //   navigate("/user/profile/me");
    } catch (err) {
      toast.error(err.message);
      //   setLoading(false);
    }
  };


  const confirmBookingHandler = async () => {
    try {
      const res = await fetch(`${BASE_URL}/bookings/confirm/${bookingId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({bookingId, otp  }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      
      toast.success(data.message);
      navigate("/user/profile/me");
    } catch (err) {
      toast.error(err.message);
    }
  };


//   const bookingHandler = async () => {
//     try {
//       const res = await fetch(`${BASE_URL}/bookings`);
//     } catch (error) {}
//   };

  return (
    <div
      className=" shadow-planeShadow p-3 lg:p-5 rounded-md"
      title="Please Chose your date and time according to the list and you will be notified according to availability."
    >
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Ticket price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} INR
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className=" text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className=" text-[15px] leading-6 text-textColor font-semibold">
                {convertTime(item.startingTime)} -{" "}
                {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={submitHandler}>
        <div className="">
          <input
            title="Please select date and time of your choice."
            type="datetime-local"
            // placeholder=""
            name="appointmentDate"
            min={new Date().toISOString().slice(0, -8)}
            value={sendData.appointmentDate || ""}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
          />
        </div>
        {/* time */}
        {/* <div className="">
          <input
            title="Please select date and time of your choice."
            type="time"
            // placeholder=""
            name="appointmentDate"
            // min={new Date().toISOString().slice(0, -8)}
            // value={sendData.appointmentDate || ""}
            // onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
          />
        </div> */}
        <button type="submit" className="btn px-2 w-full rounded-md">
          Book Appointment
        </button>
      </form>


       {/* OTP confirmation section */}
       {bookingId && (
        <div className="">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
          />
          <button
            onClick={confirmBookingHandler}
            className="btn px-2 w-full rounded-md"
          >
            Confirm Booking
          </button>
        </div>
      )}

    </div>
  );
};

export default SidePanel;
