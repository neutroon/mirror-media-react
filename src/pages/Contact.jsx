// import React from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import PageTitle from "../components/PageTitle/PageTitle";

const Contact = () => {
  return (
    <div className="continer">
      <PageTitle title="Contact Us" />
      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
        })}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        <Form>
          <div className="py-3">
            <label htmlFor="name" className="text-primary-800 font-bold">
              name:{" "}
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              className="border-b-2 border-primary outline-none rounded-md p-2"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component={"div"} />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

/*
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        message: Yup.string().required("Message is required"),
      })}
      onSubmit={(values) => {
        console.log(values);
        // You can call the email-sending function here (e.g., EmailJS)
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage name="message" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

*/

export default Contact;
