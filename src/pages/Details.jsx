import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    title: null,
    titleImg: null,
    backgroundImg: null,
    description: null,
    subTitle: null,
  });

  useEffect(() => {
    movies.forEach((movie) => {
      if (movie.endpoint === id) {
        setMovie(movie);
      }
    });
  }, [id, setMovie]);
  return (
    <div className="min-h-[calc(100vh-70px)] px-[calc(3.5vw+5px)] relative overflow-y-hidden">
      {movie && (
        <>
          <div className="fixed top-0 bottom-[10px] right-0 left-0 z-[-1]">
            <img
              className="w-full md:h-full object-fill"
              src={movie.backgroundImg}
              alt={movie.title}
            />
          </div>
          <div className="h-[30vh] min-h-[170px] w-[35vw] min-w-[200px] mt-[60px]">
            <img
              className="w-full h-full object-contain"
              src={movie.titleImg}
              alt={movie.title}
            />
          </div>
          <div className="flex items-center">
            <button className="rounded-[4px] text-[15px] px-[24px] mr-[22px] flex items-center h[56px] bg-[rgb(249,249,249)] tracking-[1.8px] cursor-pointer text-black hover:bg-[rgb(198,198,198)]">
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </button>
            <button className="rounded-[4px] text-[15px] px-[24px] mr-[22px] flex items-center h[56px] bg-[rgba(0,0,0,0.3)] tracking-[1.8px] cursor-pointer border-[1px] border-solid border-white hover:bg-[rgba(0,0,0,0)]">
              <img src="/images/play-icon-white.png" alt="" />
              <span>TRAILER</span>
            </button>
            <button className="h-[44px] w-[44px] rounded-full flex justify-center items-center border-[2px] border-solid border-white bg-[rgba(0,0,0,0.6)] cursor-pointer mr-[16px]">
              <span className="text-[30px]">+</span>
            </button>
            <button className="h-[44px] w-[44px] rounded-full flex justify-center items-center border-[2px] border-solid border-white bg-[rgb(0,0,0)] cursor-pointer mr-[16px]">
              <img src="/images/group-icon.png" alt="" />
            </button>
          </div>
          <div className="bg-slate-800 text-white w-max p-4 mt-[26px] ">
            <div className="text-[15px] min-h-[20px] text-justify">{movie.subTitle}</div>
            <div className="leading-6 text-[20px] mt-[16px] max-w-md text-justify">
              {movie.description}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
