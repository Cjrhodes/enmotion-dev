import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface ContactFormProps {
  selectedPackage: string;
}

interface Inputs {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedPackage }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "newclient@enmotionfit.com",
          to: ['miguelricaurte@hotmail.com', 'chrisxrhodes@gmail.com', 'enmotionfit@gmail.com'],
          subject: `New message from ${data.fullName}`,
          html: `
      
            <p>Email: ${data.email}</p>
           
            <p>Message: ${data.message}</p>
            ${selectedPackage && `<p>Selected Package: ${selectedPackage}</p>`}
          `,
        }),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        toast.success("Form submitted successfully!");
        reset();
      } else {
        const errorData = await response.json();
        console.error(errorData.message || "Failed to send email");
        throw new Error(errorData.message || "Failed to send email");
      }
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          {...register('email', { required: true })}
        />
        {errors.email && <span className="text-danger">This field is required</span>}
      </Form.Group>

     
      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          {...register('message', { required: true })}
        />
        {errors.message && <span className="text-danger">This field is required</span>}
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={isSubmitting}
        className="mt-3"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </Button>
    </Form>
  );
};

export default ContactForm;