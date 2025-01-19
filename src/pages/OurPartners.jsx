// import React from "react";
import PageTitle from "../components/PageTitle/PageTitle";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink } from "react-router-dom";

const OurPartners = () => {
  const partners = [
    {
      categoryName: "Cafes Partners",
      partners: [
        {
          id: "partner1",
          name: "Partner 1",
          logo: "/ourParteners images/partner1.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: "partner2",
          name: "Partner 2",
          logo: "/ourParteners images/partner2.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: "partner3",
          name: "Partner 3",
          logo: "/ourParteners images/partner3.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: "partner4",
          name: "Partner 4",
          logo: "/ourParteners images/partner2.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="absolute text-[1.7rem] sm:text-[3rem] top-0 md md:top-10 start-1/2 -translate-x-1/2 ">
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
        {partners.map((category, index) => {
          return (
            <div key={index} className="category">
              <h3 className="text-[3rem] mt-10 underline underline-offset-8 decoration-2 border-primary font-bold text-primary">
                {category.categoryName}
              </h3>
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.partners.map((partner, index) => {
                  return (
                    <div
                      key={index}
                      className="partner overflow-hidden border-primary border-2 rounded-md relative"
                    >
                      <div className="absolute top-0 start-0 end-0 bottom-0 opacity-0 hover:opacity-100 transition-all duration-500 bg-primary-400">
                        <button
                          className="absolute top-1/2 start-1/2 main-btn
                -translate-y-1/2 -translate-x-1/2"
                        >
                          <NavLink to={`/partners/${partner.name}`}>
                            Details
                          </NavLink>
                        </button>
                      </div>
                      <img src={partner.logo} alt="" />
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
