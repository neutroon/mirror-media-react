import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchPartners } from "../redux/partnersSlice";
import { fetchServices } from "../redux/servicesSlice";

const ItemDetails = () => {
  const { Id } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();
  const { partners } = useSelector((state) => state.partners);
  const { services } = useSelector((state) => state.services);
  const [selectedData, setSelectedData] = useState(null);

  // Fetch data based on the pathname (partners or services)
  useEffect(() => {
    if (location.pathname.includes("partners")) {
      dispatch(fetchPartners());
    } else {
      dispatch(fetchServices());
    }
  }, [dispatch, location.pathname]);

  // Set the selected data based on Id
  useEffect(() => {
    if (location.pathname.includes("partners")) {
      const selected = partners
        .flatMap((category) => category.partners)
        .find((partner) => partner.id == Id);
      setSelectedData(selected); // Set the selected partner
    } else if (location.pathname.includes("services")) {
      const selected = services.find((service) => service.id == Id);
      setSelectedData(selected); // Set the selected service
    }
  }, [partners, services, Id, location.pathname]);

  // Handle loading and error states
  if (!selectedData) return <div>Data not found</div>;

  return (
    <div className="partner-details">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          {/* Correct the image path */}
          <img
            src={selectedData.logo || selectedData.image}
            alt={selectedData.name || selectedData.title}
          />
        </div>
        <div>
          {/* Correct the usage of partner/service data */}
          <h3 className="text-[2rem] font-bold text-primary">
            {selectedData.name || selectedData.title}
          </h3>
          <p className="text-[1.2rem] text-gray-500">
            {selectedData.description}
          </p>
          <div className="my-5">
            <h3 className="text-[1.5rem] font-bold text-primary">Contact</h3>
            {selectedData.phone && (
              <p className="text-[1.2rem] text-gray-500">
                Phone: {selectedData.phone}
              </p>
            )}
            {selectedData.email && (
              <p className="text-[1.2rem] text-gray-500">
                Email:{" "}
                <span className="text-gray-500 underline">
                  {selectedData.email}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
      {location.pathname.includes("/partners") ? (
        <div className="m-5 mt-20 rounded-3xl overflow-hidden ">
          <video
            width={"100%"}
            poster="https://cdn.pixabay.com/video/2022/03/17/111036-689918641_tiny.jpg"
            controls
            autoPlay
            muted
            src={selectedData.video}
          ></video>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ItemDetails;
