import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchPartners } from "../redux/partnersSlice";

const ItemDetails = () => {
  const { Id } = useParams();
  const loc = useLocation();
  const dispatch = useDispatch();
  const { partners, status, error } = useSelector((state) => state.partners);

  const [selectedData, setSelectedData] = useState(null);

  // Fetch partners data when status is idle
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPartners());
    }
  }, [status, dispatch]);

  // Set the selected partner based on Id
  useEffect(() => {
    // Loop through partners and find the one that matches the Id
    const selected = partners
      .flatMap((category) => category.partners) // Flatten all partner categories into one list
      .find((partner) => partner.id == Id);

    setSelectedData(selected); // Set the selected partner
  }, [partners, Id]); // Re-run this when partners or Id change

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;
  if (!selectedData) return <div>Data not found</div>;

  return (
    <div className="partner-details">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          {/* Correct the image path */}
          <img src={selectedData.logo} alt={selectedData.name} />
        </div>
        <div>
          {/* Correct the usage of partner data */}
          <h3 className="text-[2rem] font-bold text-primary">
            {selectedData.name}
          </h3>
          <p className="text-[1.2rem] text-gray-500">
            {selectedData.description}
          </p>
          <div className="my-5">
            <h3 className="text-[1.5rem] font-bold text-primary">Contact</h3>
            <p className="text-[1.2rem] text-gray-500">
              Phone: {selectedData.phone}
            </p>
            <p className="text-[1.2rem] text-gray-500">
              Email:{" "}
              <span className="text-gray-500 underline">
                {selectedData.email}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
