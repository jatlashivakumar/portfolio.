import React from "react";
import react from "../assets/portfolio/react.jpg";
import weather from "../assets/portfolio/weather.png";

const Portfolio = () => {
  
  const portfolios = [
    {
      id: 1,
      src: weather,
      demo: "https://stirring-horse-4f5d0f.netlify.app/",
      code: "https://github.com/jatlashivakumar/weather-website"
    },
    {
      id: 2,
      src: react,
      demo: "https://665acf99ea270e9eb6c1487d--gorgeous-lollipop-aed4fe.netlify.app/",
      code: "https://github.com/jatlashivakumar/Reactjs-tailwind-food-web"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-10">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-60 w-full"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
