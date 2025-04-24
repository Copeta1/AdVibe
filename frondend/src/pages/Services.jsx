import Navbar from "../components/navbar/Navbar";
import Banner4 from "../assets/images/Banner4.png";
import Footer from "../components/footer/Footer";
import Banner5 from "../assets/images/Banner5.png";

const flows = [
  {
    number: 1,
    title: "Consultation",
    description:
      "We start with a consultation to understand your business goals and target audience.",
  },
  {
    number: 2,
    title: "Strategy Development",
    description:
      "We develop a customized digital marketing strategy tailored to your needs.",
  },
  {
    number: 3,
    title: "Implementation",
    description:
      "We implement the strategy using the latest tools and techniques.",
  },
  {
    number: 4,
    title: "Monitoring & Optimization",
    description:
      "We continuously monitor and optimize the campaign for maximum results.",
  },
  {
    number: 5,
    title: "Reporting & Analysis",
    description:
      "We provide regular reports and analysis to track progress and ROI.",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <section className=" bg-orange-100">
        <div className="container mx-auto px-2 flex">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-orange-400">Our Services</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-1/2">
            <img src={Banner4} alt="Banner4" className="w-60" />
          </div>
        </div>
      </section>
      <div className="grid grid-cols-3 gap-4 py-10 px-24 ">
        {[
          {
            title: "Social Media Marketing",
            text: "We create and manage top-performing social media campaigns for businesses.",
            icon: "https://img.icons8.com/?size=100&id=117483&format=png&color=000000",
          },
          {
            title: "Search Engine Optimization",
            text: "improve the quality and quantity of website traffic to a website from search engines.",
            icon: "https://img.icons8.com/?size=100&id=2fd_SEW9qqzz&format=png&color=000000",
          },
          {
            title: "Content Marketing",
            text: "Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant content to attract and retain a clearly defined audience.",
            icon: "https://img.icons8.com/?size=100&id=WCf4kcsJ1PWW&format=png&color=000000",
          },
          {
            title: "Email Marketing",
            text: "Email marketing is the act of sending a commercial message, typically to a group of people, using email.",
            icon: "https://img.icons8.com/?size=100&id=12580&format=png&color=000000",
          },
          {
            title: "Web Diesign Optimization",
            text: "Web design optimization is the process of improving the performance and user experience of a website.",
            icon: "https://img.icons8.com/?size=100&id=1349&format=png&color=000000",
          },
          {
            title: "Web Analytics & Reporting",
            text: "Web analytics is the measurement, collection, analysis, and reporting of web data for purposes of understanding and optimizing web usage.",
            icon: "https://img.icons8.com/?size=100&id=53451&format=png&color=000000",
          },
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="bg-orange-50 shadow-lg rounded-lg p-6 relative"
            >
              <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center hover:bg-orange-300">
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mt-6">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{item.text}</p>
              <button className="btn bg-orange-500 text-white px-5 py-2 rounded mt-4">
                Read More
              </button>
            </div>
          );
        })}
      </div>
      <section className="py-5">
        <div className="justify-center text-center">
          <h3 className="text-orange-200">HOW IT WORKS</h3>
          <h1 className="text-4xl text-orange-500 font-bold">
            Our Process Workflow
          </h1>
        </div>
        <div className="container mx-auto px-12 my-12 flex">
          <div className="flex flex-col justify-center w-1/2">
            <div className="space-y-6">
              {flows.map((flow) => (
                <div key={flow.number} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    {flow.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {flow.title}
                    </h4>
                    <p className="text-sm text-gray-500">{flow.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 items-center justify-center">
            <img src={Banner5} alt="Banner5" className="w-96" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
