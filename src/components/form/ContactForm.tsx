import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "chrisxrhodes@gmail.com",
          to: data.email,
          subject: `New message from ${data.fullName}`,
          html: `
            <p>Name: ${data.fullName}</p>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>Subject: ${data.subject}</p>
            <p>Message: ${data.message}</p>
          `,
        }),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send email");
      }
    } catch (error) {

      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <form className="contact-8-form" onSubmit={handleSubmit(onSubmit)}>
    <input
      {...register("fullName")}
      type="text"
      placeholder="Full Name"
      required
    />
    <input
      {...register("email")}
      type="email"
      placeholder="Email Address"
      required
    />
    <input
      {...register("phone")}
      type="tel"
      placeholder="Phone Number"
      required
    />
    <input
      {...register("subject")}
      type="text"
      placeholder="Subject Of Request"
      required
    />
    <textarea
      {...register("message")}
      placeholder="Message"
      rows={4}
      required
    />
    <button className="def-btn btn-hover def-btn-8" type="submit">
      <span className="dot"></span>
      <span className="txt">
        Submit Now <i className="fa-regular fa-arrow-up-right"></i>
      </span>
    </button>
  </form>
  );
};

export default ContactForm;