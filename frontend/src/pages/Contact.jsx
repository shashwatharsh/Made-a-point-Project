import {useState} from "react";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

      setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/contactus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Clear form data upon successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Optionally, display a success message to the user
      // console.log("Form submitted successfully");
      toast.message("Form submitted successFully");
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, display an error message to the user
    }
  };


  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Got a technical Issur ? Want to send Feedback about our beta Feature?
          Let us know.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="">
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="form_input mt-1"
            />
          </div>
          <div className="">
            <label htmlFor="subject" className="form_label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name."
              className="form_input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form_label">
              Message
            </label>
            <textarea
            rows="6"
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a comment..... you can drop your phone number or directly call us by google map or whatsapp us."
              className="form_input mt-1"
            />
          </div>
          <button type="submit" className=" btn rounded sm:w-fit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
