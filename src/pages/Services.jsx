import { useEffect } from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../redux/servicesSlice";

// import React from "react";

const Services = () => {
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.services);

  // const getServices = async () => {
  //   const response = await fetch(
  //     "https://jjgoegozmvelpbpghdri.supabase.co/rest/v1/services",
  //     {
  //       method: "get",
  //       headers: {
  //         apikey:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZ29lZ296bXZlbHBicGdoZHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjgyMDQsImV4cCI6MjA1Mjk0NDIwNH0.5IcSdFy13gInIB3NyL7S0O5TezDe_dW654fzVQlE03g",
  //       },
  //     }
  //   );
  //   const services = await response.json();
  //   return services;
  // };

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <section className="py-10">
      <div className="text-[3rem]">
        <PageTitle title="Services" />
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            // title={service.name}
            // description={service.description}
            // image={service.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
