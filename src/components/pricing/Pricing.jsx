import { useEffect, useState } from "react";
import IOSSwitch from "../ui/IOSSwitch";
import Item from "./Item";

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

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      setIsMonthly(false);
    } else if (event.keyCode === 39) {
      setIsMonthly(true);
    }
  };

  return (
    <section className="mx-22 my-65 font-Montserrat lg:my-72">
      <h1 className="text-center text-32 font-bold capitalize leading-40 text-grayish-blue">
        our pricing
      </h1>
      <div className="mt-38 flex items-center justify-center gap-x-28">
        <button
          onClick={() => setIsMonthly(false)}
          aria-label="select annually plan"
          className="text-15 capitalize text-light-grayish-blue"
        >
          annually
        </button>
        <IOSSwitch
          inputProps={{ "aria-label": "click to change plan" }}
          checked={isMonthly}
          onChange={() => setIsMonthly((prevState) => !prevState)}
        />
        <button
          onClick={() => setIsMonthly(true)}
          aria-label="select monthly plan"
          className="text-15 capitalize text-light-grayish-blue"
        >
          monthly
        </button>
      </div>
      <div className="mt-80 flex flex-col gap-y-32 lg:mt-62 lg:flex-row lg:items-start lg:justify-center">
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
