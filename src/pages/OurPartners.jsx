// import React from "react";
import { useState } from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
const OurPartners = () => {
  const getPartners = async () => {
    const res = await fetch(
      "https://jjgoegozmvelpbpghdri.supabase.co/rest/v1/partners?select=category_id,name,logo,description,categories(name)",

      {
        method: "GET",
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZ29lZ296bXZlbHBicGdoZHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjgyMDQsImV4cCI6MjA1Mjk0NDIwNH0.5IcSdFy13gInIB3NyL7S0O5TezDe_dW654fzVQlE03g",
        },
      }
    );
    const partners = await res.json();
    return partners;
  };
  const [partnersData, setPartnersData] = useState([]);
  useEffect(() => {
    getPartners().then((partners) => {
      const groubedPartners = partners.reduce((acc, partner) => {
        if (!acc.find((cat) => cat.categoryName === partner.categories.name)) {
          acc.push({
            categoryName: partner.categories.name,
            partners: [partner],
          });
        } else {
          const cat = acc.find(
            (cat) => cat.categoryName === partner.categories.name
          );
          cat.partners.push(partner);
        }
        return acc;
      }, []);
      console.log("groubedPartners", groubedPartners);

      setPartnersData(groubedPartners);
    });
  }, []);
  return (
    <>
      <div className="relative">
        <div className="absolute text-[27.2px] sm:text-[48px] top-0 md md:top-10 start-1/2 -translate-x-1/2 ">
          <PageTitle title="Our Parteners" />
        </div>
        {/* <img src="/ourParteners images/ourPartenr-header.png" alt="" /> */}
        <LazyLoadImage
          src="/ourParteners images/ourPartenr-header.png"
          alt="partner image"
          effect="blur"
        />
      </div>
      <div className="partners py-32 overflow-hiddens container">
        {partnersData.map((partner, index) => {
          return (
            <div key={index} className="category">
              <h3 className="text-[48px] mt-10 underline underline-offset-8 decoration-2 border-primary font-bold text-primary">
                {partner.categoryName || "Category Name"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {partner.partners.map((partner, partnerIndex) => {
                  return (
                    <div
                      key={partnerIndex}
                      className="partner overflow-hidden border-primary border-2 rounded-md relative"
                    >
                      <div className="absolute top-0 start-0 end-0 bottom-0 z-10 opacity-0 hover:opacity-100 transition-all duration-500 bg-primary-400">
                        <NavLink to={`/partners/${partner.name}`}>
                          <button className="absolute top-1/2 start-1/2 main-btn -translate-y-1/2 -translate-x-1/2">
                            Details
                          </button>
                        </NavLink>
                      </div>
                      <LazyLoadImage
                        src={partner.logo}
                        alt={partner.name}
                        effect="blur"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurPartners;
