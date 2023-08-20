import React from "react";
import useStore from "../store/store";

const Viewers = () => {
  const state= useStore();
  const showMarvel = state.showMarvel;
  const showPixar = state.showPixar;
  const showStarWars = state.showStarWars;
  const showNational = state.showNational;
  const showStarSpecials = state.showStarSpecials;
  const showAll = state.showAll;

  const ViewerDetails = [
    {
      imgSrc: "/images/viewers-disney.png",
      imgAlt: "Disney",
      videoSrc: "/videos/1564674844-disney.mp4",
      videoType: "video/mp4",
      onclick: showAll,
    },
    {
      imgSrc: "/images/viewers-pixar.png",
      imgAlt: "Pixar",
      videoSrc: "/videos/1564676714-pixar.mp4",
      videoType: "video/mp4",
      onclick: showPixar,
    },
    {
      imgSrc: "/images/viewers-marvel.png",
      imgAlt: "Marvel",
      videoSrc: "/videos/1564676115-marvel.mp4",
      videoType: "video/mp4",
      onclick: showMarvel,
    },
    {
      imgSrc: "/images/viewers-starwars.png",
      imgAlt: "Star Wars",
      videoSrc: "/videos/1608229455-star-wars.mp4",
      videoType: "video/mp4",
      onclick: showStarWars,
    },
    {
      imgSrc: "/images/viewers-national.png",
      imgAlt: "National Geographic",
      videoSrc: "/videos/1564676296-national-geographic.mp4",
      videoType: "video/mp4",
      onclick: showNational,
    },
    {
      imgSrc: "/images/viewers-star.png",
      imgAlt: "Hotstar Specials",
      videoSrc: "/videos/1608229455-star.mp4",
      videoType: "video/mp4",
      onclick: showStarSpecials,
    },
  ];

  return (
    <div className="viewerContainer">
      {ViewerDetails.map((viewer) => (
        <div
          className="border rounded-[10px] shadow-md md:shadow-lg lg:shadow-xl cursor-pointer overflow-hidden transition-transform duration-250 ease-in-out transform bg-gradient-to-b from-[#334366] to-[#1c2940] hover:scale-105 hover:shadow-lg"
          key={viewer.imgSrc}
          onMouseEnter={(e) => {viewer.videoType === "video/mp4" ? e.currentTarget.children[1].classList.add('opacity-100') : e.currentTarget.children[0].classList.add('opacity-100')}}
          onMouseLeave={(e) => {viewer.videoType === "video/mp4" ? e.currentTarget.children[1].classList.remove('opacity-100') : e.currentTarget.children[0].classList.remove('opacity-100')}}
          onClick={viewer.onclick}
        >
          <img
            src={viewer.imgSrc}
            alt={viewer.imgAlt}
            className="w-full h-full object-cover z-10"
          />
          <video
            className='absolute top-0 left-0 w-full h-full object-cover opacity-0 z-[-1] border rounded-md transition-opacity duration-250 ease-in-out'
            autoPlay
            loop
            playsInline
            muted
          >
            <source src={viewer.videoSrc} type={viewer.videoType} />
          </video>
        </div>
      ))}
    </div>
  );
};

export default Viewers;
