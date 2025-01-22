// import React from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const PartnerName = useParams();
  return (
    <>
      <div className="partner-details">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <img src="/ourParteners images/partner1.png" alt="" />
          </div>
          <div>
            <h3 className="text-[2rem] font-bold text-primary">
              {PartnerName.Id}
            </h3>
            <p className="text-[1.2rem] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quas, quia, natus, quidem quod quae voluptas quibusdam autem
              voluptatum doloremque quos.
            </p>
            <div className="my-5">
              <h3 className="text-[1.5rem] font-bold text-primary">Contact</h3>
              <p className="text-[1.2rem] text-gray-500">Phone: 1234567890</p>
              <p className="text-[1.2rem] text-gray-500">
                Email:{" "}
                <span className="text-gray-500 underline">
                  info@mirrormaedia.me
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
