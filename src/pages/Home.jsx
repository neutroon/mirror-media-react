import HeroSection from "../components/HeroSection/HeroSection";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import VerticalSlider from "../components/VerticalSlider/VerticalSlider";

const Home = () => {
  return (
    <>
      <section className="max-h-screen -mt-24">
        <HeroSection />
      </section>
      <section className="container py-10">
        <WelcomeSection />
      </section>
      <section className="py-10">
        <VerticalSlider
          slideContent={[
            <ServiceCard inSlider={true} key={1} cardDirection={"left"} />,
            <ServiceCard inSlider={true} key={2} cardDirection={"right"} />,
            <ServiceCard inSlider={true} key={3} cardDirection={"left"} />,
            <ServiceCard inSlider={true} key={4} cardDirection={"right"} />,
            <ServiceCard inSlider={true} key={4} cardDirection={"right"} />,
          ]}
        />
      </section>
    </>
  );
};

export default Home;
