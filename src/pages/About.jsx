import PageTitle from "../components/PageTitle/PageTitle";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const About = () => {
  return (
    <>
      <div className="h-screen -mt-24 sticky -z-10 top-0">
        {/* <img
          className="h-screen object-cover"
          src="https://img.freepik.com/free-photo/halloween-composition-with-white-cookies_23-2147675071.jpg?t=st=1737283368~exp=1737286968~hmac=2a0542c1c5141b0e845f7f854e1f2f6f8d097ff2c96202bf8c84bd7a4257a8f6&w=1480"
        /> */}
        <LazyLoadImage
          className="h-screen object-cover w-screen "
          src="/public/about images/about.jpg"
          effect="blur"
        />
      </div>
      <div className="bg-white bg-opacity-50 rounded-t-box">
        <div className="text-[3rem]">
          <PageTitle title="About" />
        </div>
        <div className="container">
          <div className="flex gap-10 h-96 justify-around items-center">
            <h2 className="text-[2rem] mb-40 itme w-[60%] font-bold mt-10">
              <span className="font-bold">
                We build bridges <br /> between
              </span>{" "}
              <span className="text-gray-500">
                companies <br /> and customers
              </span>
            </h2>
            <p className="text-gray-500 w-[40%] mt-40 font-bold">
              We are a renowned, dynamic, and focused on providing exceptional
              service and quality to our clients. We strive to create a
              memorable and enjoyable experience for our customers.
            </p>
          </div>
          <div className="flex gap-10 h-96 justify-around items-center">
            <h2 className="text-[2rem] mb-40 itme w-[60%] font-bold mt-10">
              <span className="font-bold">
                We build bridges <br /> between
              </span>{" "}
              <span className="text-gray-500">
                companies <br /> and customers
              </span>
            </h2>
            <p className="text-gray-500 w-[40%] mt-40 font-bold">
              We are a renowned, dynamic, and focused on providing exceptional
              service and quality to our clients. We strive to create a
              memorable and enjoyable experience for our customers.
            </p>
          </div>
          <div className="flex gap-10 h-96 justify-around items-center">
            <h2 className="text-[2rem] mb-40 itme w-[60%] font-bold mt-10">
              <span className="font-bold">
                We build bridges <br /> between
              </span>{" "}
              <span className="text-gray-500">
                companies <br /> and customers
              </span>
            </h2>
            <p className="text-gray-500 w-[40%] mt-40 font-bold">
              We are a renowned, dynamic, and focused on providing exceptional
              service and quality to our clients. We strive to create a
              memorable and enjoyable experience for our customers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
