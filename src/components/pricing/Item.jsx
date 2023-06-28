const Item = ({ id, title, price, features, selected, isMonthly }) => {
  let containerStyle = selected ? "lg:py-54" : "lg:mt-22 lg:pt-32";

  if (id === 1) {
    containerStyle += " lg:rounded-none lg:rounded-l-lg";
  } else if (id === 3) {
    containerStyle += " lg:rounded-none lg:rounded-r-lg";
  }

  const themes = {
    primary: {
      title: "text-grayish-blue",
      price: "text-dark-grayish-blue",
      container: `bg-white lg:w-350 rounded-lg shadow-md shadow-light-grayish-blue ${containerStyle}`,
      link: "text-white bg-gradient-to-r from-light-purple to-purple relative border border-inherit hover:border-purple before:content-[''] before:rounded-lg before:top-0 before:left-0 before:right-0 before:bottom-0 before:absolute before:bg-gradient-to-r before:from-white before:to-white before:opacity-0 hover:before:opacity-100 hover:text-purple transition-all duration-700 before:transition-all before:duration-700 before:-z-[1] z-[1]",
      feature: "text-grayish-blue border-b-grayish-blue",
      featureContainer: "border-t-grayish-blue",
    },

    secondary: {
      title: "text-white",
      price: "text-white",
      container: `bg-gradient-to-r from-light-purple to-purple lg:w-350 rounded-lg shadow-md shadow-light-grayish-blue ${containerStyle}`,
      link: "bg-white text-purple  hover:text-white border border-transparent hover:bg-transparent hover:border-white transition-all duration-700",
      feature: "text-white border-b-white",
      featureContainer: "border-t-white",
    },
  };

  const theme = selected ? themes.secondary : themes.primary;

  return (
    <article className={`px-30 pb-30 pt-27 ${theme.container}`}>
      <h2 className={`text-center text-19 capitalize ${theme.title}`}>
        {title}
      </h2>
      <div className={`mt-10 flex items-center justify-center ${theme.price}`}>
        <span className="text-40">$</span>
        <p className="text-70">{isMonthly ? price.monthly : price.annually}</p>
      </div>
      <ul className={`mt-12 flex flex-col border-t ${theme.featureContainer}`}>
        {features.map((item, index) => {
          return (
            <li
              className={`border-b py-14 text-center ${theme.feature}`}
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div className="mt-32 flex rounded-lg">
        <a
          href="#"
          className={`flex-grow rounded-lg py-12 text-center text-14 uppercase tracking-10 ${theme.link}`}
        >
          learn more
        </a>
      </div>
    </article>
  );
};

export default Item;
