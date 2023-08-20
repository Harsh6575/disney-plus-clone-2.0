import React from "react";

import { Link } from "react-router-dom";

import useStore from "../store/store";

const Movies = () => {
  const { filter,movies } = useStore();

  return (
    <div className="overflow-hidden mb-30">
      <h4 className="text-white text-xl mb-4">Recommended for You</h4>
      <div className="grid grid-cols-4 gap-6">
        {movies && movies.map((movie) => {
          if (filter !== "all" && filter === movie.filter) {
            return (
              <div
                className="border-[3px] border-solid border-[rgba(249,249,249,0.1)] rounded-[10px] overflow-hidden shadow-md md:shadow-lg lg:shadow-xl cursor-pointer transition-all duration-[250ms] ease-in-out transform hover:scale-105 hover:border-[rgba(249,249,249,0.6)] hover:shadow-2xl ml-[10px] mb-[30px]"
                key={movie.endpoint}
              >
                <Link to={`/details/${movie.endpoint}`}>
                  <img
                    src={movie.cardImg}
                    alt={movie.title}
                    className="w-[40vw] md:h-auto md:w-full object-cover"
                  />
                </Link>
              </div>
            );
          }
          if (filter === "all") {
            return (
              <div
                className="border-[3px] border-solid border-[rgba(249,249,249,0.1)] rounded-[10px] overflow-hidden shadow-md md:shadow-lg lg:shadow-xl cursor-pointer transition-all duration-[250ms] ease-in-out transform hover:scale-105 hover:border-[rgba(249,249,249,0.6)] hover:shadow-2xl ml-[10px] mb-[30px]"
                key={movie.endpoint}
              >
                <Link to={`/details/${movie.endpoint}`}>
                  <img
                    src={movie.cardImg}
                    alt={movie.title}
                    className="w-[40vw] md:h-auto md:w-full object-cover"
                  />
                </Link>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Movies;
