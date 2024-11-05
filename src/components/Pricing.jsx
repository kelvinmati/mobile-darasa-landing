import React from "react";

const Pricing = () => {
  return (
    <div className="py-16">
      <div className="w-mobile md:w-containerWidth mx-auto ">
        <div className="divider text-xl">FIND THE PERFECT PLAN FOR YOU.</div>

        <div className="flex justify-center items-center space-x-5">
          <p>Monthly</p>
          <input type="checkbox" className="toggle" defaultChecked />
          <p>Yearly</p>
        </div>
        <div className="grid grid-cols-4 gap-5 pt-16">
          {plans.map((plan) => {
            const { id, name, price, description, features, color } = plan;

            return (
              <div
                key={id}
                className={`bg-gray-50 p-3 shadow-lg rounded-lg space-y-3 border border-t-8 `}
                style={{ borderTopColor: color }}
              >
                <p>{name}</p>
                <p>
                  {" "}
                  <span className="text-2xl">{price.monthly}</span>/month
                </p>
                <p>{description}</p>
                <button
                  className="px-5 py-2 bg-${[
                    color,
                        ]} w-full rounded-lg text-white"
                  style={{ backgroundColor: color }}
                >
                  Sign Up with {name}
                </button>
                <div className="divider py-4">FEATURES.</div>

                {features.map((feature) => (
                  <div className="flex items-center space-x-2 ">
                    <ion-icon
                      size="medium"
                      name="checkmark-circle-outline"
                    ></ion-icon>
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

const plans = [
  {
    id: 1,
    name: "Basic",
    color: "black",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, doloribus ullam",
    price: {
      monthly: "25,000",
      yearly: "240,000",
    },
    features: [
      {
        name: "Institution Logo & Colours",
      },
      {
        name: "Basic Course Upload & Management",
      },
      {
        name: "2 Users Roles (Admin, Student)",
      },
      {
        name: "Basic Analytics",
      },
      {
        name: "Email Support",
      },
      {
        name: "1-800 students/users",
      },
      {
        name: "Limited Integrations e.g LMS",
      },
      {
        name: "Standard Updates",
      },
    ],
  },
  {
    id: 2,
    name: "Standard",
    color: "#00236a",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, doloribus ullam",
    price: {
      monthly: "40,000",
      yearly: "400,000",
    },
    features: [
      {
        name: "Institution Logo & Colours",
      },
      {
        name: "Advanced Course Management",
      },
      {
        name: "5 Users Roles (Admin, Instructor, Student, TA, Librarian)",
      },
      {
        name: "Advanced Analytics",
      },
      {
        name: "Email + Chat Support",
      },
      {
        name: "801-1500 students/users",
      },
      {
        name: "More Integrations Available",
      },
      {
        name: "Priority Updates",
      },
    ],
  },
  {
    id: 3,
    name: "Premium",
    color: "#F59E0B",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, doloribus ullam",
    price: {
      monthly: "65,000",
      yearly: "650,000",
    },
    features: [
      {
        name: "Institution Logo & Colours",
      },
      {
        name: "Comprehensive Course Management",
      },
      {
        name: "10 Users Roles",
      },
      {
        name: "Comprehensive Analytics",
      },
      {
        name: "24/7 Support",
      },
      {
        name: "Unlimited users",
      },
      {
        name: "Extensive Integrations",
      },
      {
        name: "Priority Updates + Features Requests",
      },
    ],
  },
  {
    id: 4,
    name: "Enterprise",
    color: "#c30800",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, doloribus ullam",
    price: {
      monthly: "custom pricing",
      yearly: "custom pricing",
    },
    features: [
      {
        name: "Full Branding & Customisation",
      },
      {
        name: "Customised Management Tools",
      },
      {
        name: "Unlimited user roles",
      },
      {
        name: "Custom Reporting Options",
      },
      {
        name: "Dedicated Account Manager for support",
      },
      {
        name: "Custom Storage Options",
      },
      {
        name: "Custom Integrations",
      },
      {
        name: "Custom Maintenance Plan",
      },
    ],
  },
];
