import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import ServiceCard from "../components/ServiceCard/ServiceCard";

// import React from "react";

const Services = () => {
  const getServices = async () => {
    const response = await fetch(
      "https://jjgoegozmvelpbpghdri.supabase.co/rest/v1/services",
      {
        method: "get",
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZ29lZ296bXZlbHBicGdoZHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjgyMDQsImV4cCI6MjA1Mjk0NDIwNH0.5IcSdFy13gInIB3NyL7S0O5TezDe_dW654fzVQlE03g",
        },
      }
    );
    const services = await response.json();
    return services;
  };

  const [services, setServices] = useState([]);
  useEffect(() => {
    getServices().then((data) => {
      console.log(services);
      setServices(data);
    });
  }, []);

  // const Services = [
  //   {
  //     title: "Branding",
  //     description:
  //       "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
  //     image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
  //   },
  //   {
  //     title: "Social Media Management",
  //     description:
  //       "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
  //     image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
  //   },
  //   {
  //     title: "Branding",
  //     description:
  //       "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
  //     image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
  //   },
  //   {
  //     title: "Social Media Management",
  //     description:
  //       "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
  //     image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
  //   },
  //   {
  //     title: "Branding",
  //     description:
  //       "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
  //     image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
  //   },
  //   {
  //     title: "Social Media Management",
  //     description:
  //       "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
  //     image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
  //   },
  //   {
  //     title: "Branding",
  //     description:
  //       "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
  //     image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
  //   },
  //   {
  //     title: "Social Media Management",
  //     description:
  //       "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
  //     image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
  //   },
  // ];
  return (
    <section className="py-10">
      <div className="text-[3rem]">
        <PageTitle title="Services" />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
