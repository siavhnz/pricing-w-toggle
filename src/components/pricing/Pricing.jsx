import { useState } from "react";
import IOSSwitch from "../ui/IOSSwitch";
import Item from "./Item";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);
  const data = [
    {
      id: 1,
      title: "basic",
      price: {
        monthly: 19.99,
        annually: 199.99,
      },
      features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
      selected: false,
    },
    {
      id: 2,
      title: "professional",
      price: {
        monthly: 24.99,
        annually: 249.99,
      },
      features: ["1 TB Storage", " 5 Users Allowed", "Send up to 10 GB"],
      selected: true,
    },
    {
      id: 3,
      title: "master",
      price: {
        monthly: 39.99,
        annually: 399.99,
      },
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
      selected: false,
    },
  ];
  return (
    <section className="mx-22 my-65 lg:my-72 font-Montserrat">
      <h1 className="font-bold text-center text-grayish-blue text-32 leading-40 capitalize">
        our pricing
      </h1>
      <div className="flex justify-center items-center gap-x-28 mt-38">
        <button
          onClick={() => setIsMonthly(false)}
          aria-label="select annually plan"
          className="capitalize text-15 text-light-grayish-blue"
        >
          annually
        </button>
        <IOSSwitch
          checked={isMonthly}
          onChange={() => setIsMonthly((prevState) => !prevState)}
        />
        <button
          onClick={() => setIsMonthly(true)}
          aria-label="select monthly plan"
          className="capitalize text-15 text-light-grayish-blue"
        >
          monthly
        </button>
      </div>
      <div className="mt-80 flex flex-col gap-y-32 lg:flex-row lg:justify-center lg:mt-62 lg:items-start">
        {data.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              isMonthly={isMonthly}
              features={item.features}
              selected={item.selected}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
