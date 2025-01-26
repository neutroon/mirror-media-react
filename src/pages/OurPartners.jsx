// import React from "react";
// import { useState } from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPartners } from "../redux/partnersSlice";
const OurPartners = () => {
  const dispatch = useDispatch();
  const { partners, status, error } = useSelector((state) => state.partners);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPartners());
    }
  }, [status, dispatch]);

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
        {partners.map((partner, index) => {
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
                      className="partner flex items-center content-center overflow-hidden border-primary border-2 rounded-md relative"
                    >
                      <div className="absolute top-0 start-0 end-0 bottom-0 z-10 opacity-0 hover:opacity-100 transition-all duration-500 bg-primary-400">
                        <NavLink to={`/partners/${partner.id}`}>
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
