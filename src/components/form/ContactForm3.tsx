import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  btnStyle?: string;
  btnCentered?: boolean;
};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const ContactForm3 = ({ btnStyle, btnCentered }: Props) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Form submitted successfully!");

    // Reset the form to default values
    reset();
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="row gx-4 gy-lg-5 gy-4">
        <div className="col-sm-6">
          <input
            {...register("name")}
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="col-sm-6">
          <input
            {...register("email")}
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="col-12">
          <input
            {...register("subject")}
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
        </div>
        <div className="col-12">
          <textarea
            {...register("message")}
            name="message"
            placeholder="Write Your message"
          ></textarea>
        </div>
        <div className={`col-12 ${btnCentered && "text-start"}`}>
          <button type="submit" className={`def-btn ${btnStyle}`}>
            <span className="dot"></span>{" "}
            <span className="txt">
              Send Message <i className="fa-solid fa-arrow-right-long"></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm3;
