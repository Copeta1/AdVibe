import Navbar from "../components/navbar/Navbar";
import Banner6 from "../assets/images/Banner6.jpg";

const advantages = [
  {
    title: "Best Price Guaranteed",
    description:
      "We offer competitive pricing without compromising on quality.",
    img: "https://img.icons8.com/?size=100&id=121&format=png&color=000000",
  },
  {
    title: "Finance Analysis",
    description:
      "We provide in-depth financial analysis to help you make informed decisions.",
    img: "https://img.icons8.com/?size=100&id=11151&format=png&color=000000",
  },
  {
    title: "Professional Team",
    description:
      "Our team consists of experienced professionals in various fields.",
    img: "https://img.icons8.com/?size=100&id=40390&format=png&color=000000",
  },
];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="relative h-96 overflow-hidden">
        <div className="relative h-full w-full">
          {/* Image */}
          <img src={Banner6} alt="Banner6" className="w-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold drop-shadow-md">
              About Us
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-2 py-6 flex flex-col">
        <div className="bg-white shadow-lg rounded-full px-8 py-2 mb-6 w-fit">
          About Us
        </div>
        <div className="flex flex-row gap-6">
          <div className="w-1/3">
            <h1 className="text-4xl font-bold">
              <span className="text-orange-500">Introducion</span> To Best
              Digital Agency
            </h1>
          </div>
          <div className="w-1/3">
            <p>
              AdVibe is a forward-thinking digital agency that specializes in
              modern web design, performance-driven digital marketing, and
              strategic branding. We combine creativity with cutting-edge
              technology to deliver tailored solutions that align with your
              business goals.Our team of experts works closely with clients to
              craft
            </p>
          </div>
          <div className="w-1/3">
            <p>
              engaging digital experiences that not only look great but also
              drive measurable results. With a focus on innovation,
              transparency, and long-term partnerships, AdVibe empowers
              businesses to elevate their online presence, strengthen brand
              identity, and build meaningful connections with their target
              audience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4">
          {advantages.map((advantage, index) => {
            return (
              <div
                key={index}
                className="shadow-lg rounded-lg p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shrink-0">
                  <img
                    src={advantage.img}
                    alt={advantage.title}
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">{advantage.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {advantage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
