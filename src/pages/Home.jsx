import HeroSection from "../components/HeroSection/HeroSection";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import VerticalSlider from "../components/VerticalSlider/VerticalSlider";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHomePageData } from "../redux/partnersSlice";
import { fetchServices } from "../redux/servicesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.homePage);
  const {
    services,
    status: servicesStatus,
    error: servicesError,
  } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchHomePageData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <>
      <section className="max-h-screen -mt-24">
        <HeroSection imgs={data[0]} />
      </section>
      <section className="container py-10">
        <WelcomeSection img={data[0]} />
      </section>
      <section className="py-10">
        <VerticalSlider>
          {services.map((service, index) => (
            <ServiceCard key={index} inSlider={true} service={service} />
          ))}
        </VerticalSlider>
      </section>
    </>
  );
};

export default Home;
