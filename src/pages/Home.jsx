import React, { useEffect } from "react";

import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import Movies from "../components/Movies";
import db from "../firebase.config";
import useStore from "../store/store";

const Home = () => {

  const store = useStore();

  const movies = store.movies;

  useEffect(()=>{
    db.collection("movies").onSnapshot((snapshot)=>{
      let tempMovies = snapshot.docs.map((doc)=>{
        return {id:doc.id,...doc.data()}
      });
      store.setMovies(tempMovies);
    })
  },[movies]);
  
  return (
    <div
      className="min-h-[calc(100vh-70px)] px-[calc(3.5vw+5px)] relative overflow-x-hidden before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:z-[-1]bg-center bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url("/images/home-background.png")` }}
    >
      <ImgSlider />
      <Viewers />
      <Movies />
    </div>
  );
};

export default Home;
