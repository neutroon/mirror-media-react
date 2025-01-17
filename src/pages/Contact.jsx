// import React from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import PageTitle from "../components/PageTitle/PageTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  return (
    <div className="container py-10">
      <PageTitle title="Contact Us" />
      <div className="grid pt-28 grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-1 w-full">
          <div className="hover:text-primary-800 text-white border-2 hover:border-primary hover:bg-white min-w-16 h-16 rounded-full flex items-center justify-center font-bold transition-all duration-500 text-[2rem] bg-black">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <p className="text-gray-600">
            Al-Mubtadiyan Tower, 3rd floor, Office 33 <br /> Cairo, Egypt.
          </p>
        </div>
        <div className="flex items-center gap-1 w-full">
          <div className="hover:text-primary-800 text-white border-2 hover:border-primary hover:bg-white min-w-16 h-16 rounded-full flex items-center justify-center font-bold transition-all duration-500 text-[2rem] bg-black">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <p className="text-gray-600">
            <a className="underline" href="mailto:info@mirrormaedia.me">
              info@mirrormaedia.me
            </a>
          </p>
        </div>
        <div className="flex items-center gap-1 w-full">
          <div className="hover:text-primary-800 text-white border-2 hover:border-primary hover:bg-white min-w-16 h-16 rounded-full flex items-center justify-center font-bold transition-all duration-500 text-[2rem] bg-black">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p className="text-gray-600">
            <a className="underline" href="tel:+201063986717">
              +20 106 398 6717
            </a>
          </p>
        </div>
      </div>
      <Formik
        initialValues={{ name: "", email: "", message: "", socialLinks: "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .required("Email is required")
            .email("Invalid email"),
          message: Yup.string().required("Message is required"),
          socialLinks: Yup.string().required("Social links is required"),
        })}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        <Form>
          <div className="pb-4 pt-20 flex items-center gap-3 text-[2rem]">
            <FontAwesomeIcon className="text-primary" icon={faEnvelope} />
            <h2>Leave A Message</h2>
          </div>
          <p className="text-gray-500 text-[1.3rem]">Get a free consultant </p>
          <div className="flex md:flex-row flex-col py-3 gap-3">
            {/* name */}
            <div className="flex-grow">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-primary-800 font-bold">
                  name:{" "}
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="focus:border-b-2 focus:border-b-primary border border-gray-300  outline-none rounded-sm focus:rounded-lg transition-all duration-700 p-2"
                  placeholder="Enter your name"
                />
              </div>
              <ErrorMessage
                className="text-red-600"
                name="name"
                component={"div"}
              />
            </div>
            {/* email */}
            <div className="flex-grow">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-primary-800 font-bold">
                  email:{" "}
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className="focus:border-b-2 focus:border-b-primary border border-gray-300  outline-none rounded-sm focus:rounded-lg transition-all duration-700 p-2"
                  placeholder="Enter your email"
                />
              </div>
              <ErrorMessage
                className="text-red-600"
                name="email"
                component={"div"}
              />
            </div>
          </div>
          {/* message */}
          <div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-primary-800 font-bold">
                message:{" "}
              </label>
              <Field
                as="textarea"
                type="text"
                name="message"
                id="message"
                className="focus:border-b-2 focus:border-b-primary border border-gray-300  h-32 outline-none rounded-sm focus:rounded-lg transition-all duration-700 p-2"
                placeholder="Enter your message"
              />
            </div>
            <ErrorMessage
              className="text-red-600"
              name="message"
              component={"div"}
            />
          </div>
          {/* social links */}
          <div>
            <div className="flex flex-col">
              <label
                htmlFor="socialLinks"
                className="text-primary-800 font-bold"
              >
                social links:{" "}
                <span className="text-gray-500 text-[.8rem]">optional</span>
              </label>
              <Field
                type="text"
                name="socialLinks"
                id="socialLinks"
                className="focus:border-b-2 focus:border-b-primary border border-gray-300  outline-none rounded-sm focus:rounded-lg transition-all duration-700 p-2"
                placeholder="Enter your social links"
              />
            </div>
          </div>

          <div className="bg-primary mt-8 rounded-sm hover:rounded-[1.5rem]">
            <button className="main-btn  w-full rounded-none" type="submit">
              Submit
            </button>
          </div>
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
