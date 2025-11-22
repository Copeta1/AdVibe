import { Link } from "react-router-dom";
import Banner2 from "../../assets/images/Banner2.png";

const steps = [
  {
    number: 1,
    title: "Contact us",
    description: "Contact us to boost your brand visibility",
  },
  {
    number: 2,
    title: "Consult",
    description: "Always available to answer your questions.",
  },
  {
    number: 3,
    title: "Place Order",
    description: "Buy our packages today to proceed",
  },
  {
    number: 4,
    title: "Payment",
    description: "We receive payments in all types of banking",
  },
];

const SimpleSolutions = () => {
  return (
    <section className="py-5 bg-orange-50">
      <div className="container mx-auto px-2 flex">
        <div className="w-1/2">
          <img className="w-full" src={Banner2} alt="Banner2" />
        </div>
        <div className="flex flex-col justify-center w-1/2">
          <h1 className="text-5xl">
            Simple <span className="text-orange-500">Solutions!</span>
          </h1>
          <h3 className="text-gray-400 py-3">
            We understand that no two businesses are alike, which is why we take
            the time to truly understand your unique goals, challenges, and
            audience—so we can craft solutions that make a real impact.
          </h3>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.number} className="flex item-start gap-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-9 mt-6">
            <Link
              to="/"
              className="btn bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition"
            >
              Get Started
            </Link>
            <Link
              to="/"
              className="btn border border-orange-500 text-orange-500 px-5 py-2 rounded hover:bg-orange-100 transition"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSolutions;
