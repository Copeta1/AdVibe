import { Link } from "react-router-dom";
import Banner3 from "../../assets/images/Banner3.jpg";

const OurAgency = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-2 flex">
        <div className="flex flex-col justify-center w-1/2 px-16">
          <h1 className="text-5xl py-5">
            Our <span className="text-orange-500">Agency</span>
          </h1>
          <p className="text-gray-400 py-3">
            We harness the power of data to drive smarter decisions. With a
            strategic, analytics-first mindset, we help refine your marketing
            efforts and boost your ROI. By transforming raw data into clear,
            actionable insights, we deliver customized solutions that align with
            your business goals.
          </p>
          <div className="py-4">
            <Link
              to="/"
              className=" bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-full" src={Banner3} alt="Banner3" />
        </div>
      </div>
    </section>
  );
};

export default OurAgency;
