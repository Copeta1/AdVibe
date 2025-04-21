import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Banner1 from "../assets/images/Banner1.jpg";
import SimpleSolutions from "../components/SimpleSolutions/SimpleSolutions";
import OurAgency from "../components/OurAgency/OurAgency";
import Reviews from "../components/reviews/Reviews";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <section className="py-16">
        <div className="container mx-auto px-2 flex">
          <div className="flex flex-col justify-center w-1/2">
            <h1 className="text-5xl">
              We create <span className="text-orange-500">solutions</span> for
              your business
            </h1>
            <h2 className="text-gray-400 py-3">
              Our team keeps a keen eye on emerging trends and technologies to
              ensure your marketing campaigns remain cutting-edge.
            </h2>
            <span className="py-4">
              <Link
                to="/signup"
                className="btn bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 font-bold
                        rounded text-2xl transition duration-300"
              >
                Get Started
              </Link>
            </span>
            <Link
              to="aboutus"
              className="btn w-fit flex py-5 items-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <span className="flex items-center justify-center rounded-full w-10 h-10 border-2 border-orange-400">
                ❤
              </span>
              <p className="text-md ml-2 justify-center items-center font-bold">
                Explore More
              </p>
            </Link>
          </div>

          <div className="w-1/2">
            <img className="w-full" src={Banner1} alt="Banner" />
          </div>
        </div>
      </section>

      <div className="items-center text-center px-16">
        <div className="flex flex-col">
          <h1 className="text-3xl">
            We Provide The Best{" "}
            <span className="text-orange-500">Services</span>
          </h1>
          <h2 className="text-gray-400 py-3">
            Let us unleash the full potential of your business <br /> with our
            data-driven strategies
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-4 py-4">
          {[
            {
              title: "SEO/SEM",
              color: "bg-yellow-400",
              icon: "📢",
              text: "We optimize your online presence through targeted SEO and SEM strategies that drive real results.",
            },
            {
              title: "Marketing",
              color: "bg-green-400",
              icon: "📈",
              text: "Our marketing approach blends creativity and data-driven insights to craft campaigns that truly connect with your audience",
            },
            {
              title: "Viral Campaign",
              color: "bg-purple-400",
              icon: "👥",
              text: "We create bold, share-worthy campaigns designed to go viral and spark genuine engagement across platforms.",
            },
            {
              title: "Others",
              color: "bg-red-400",
              icon: "🅱",
              text: "Whatever your brand needs, we’re here to craft innovative solutions that go beyond the ordinary.",
            },
          ].map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 relative"
              >
                <div
                  className={`absolute -top-4 left-4 w-12 h-12 ${item.color} rounded-lg flex items-center justify-center`}
                >
                  <span className="text-white text-xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold mt-6">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <SimpleSolutions />
      <OurAgency />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
