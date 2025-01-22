import PageTitle from "../components/PageTitle/PageTitle";
import ServiceCard from "../components/ServiceCard/ServiceCard";

// import React from "react";

const Services = () => {
  const Services = [
    {
      title: "Branding",
      description:
        "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
      image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
    },
    {
      title: "Social Media Management",
      description:
        "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
      image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
    },
    {
      title: "Branding",
      description:
        "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
      image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
    },
    {
      title: "Social Media Management",
      description:
        "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
      image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
    },
    {
      title: "Branding",
      description:
        "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
      image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
    },
    {
      title: "Social Media Management",
      description:
        "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
      image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
    },
    {
      title: "Branding",
      description:
        "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
      image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
    },
    {
      title: "Social Media Management",
      description:
        "We create visually appealing and memorable branding materials for businesses, organizations, and individuals.",
      image: "/service images/SOCIAL MEDIA MANAGEMENT.jpg",
    },
  ];
  return (
    <section className="py-10">
      <div className="text-[3rem]">
        <PageTitle title="Services" />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Services.map((service, index) => (
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
