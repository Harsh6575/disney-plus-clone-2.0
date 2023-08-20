import React from "react";
import { useForm } from "react-hook-form";

import Input from "../components/Input";
import db from "../firebase.config";
import useStore from "../store/store";

import {fileds} from '../constant'; 

const AddMovies = () => {
  const store = useStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      register: {
        title: "",
        titleImg: "",
        cardImg: "",
        filter: "",
        endpoint: "",
        backgroundImg: "",
        description: "",
        subTitle: "",
      },
    },
  });

  const onSubmit = (data, event) => {
    event.preventDefault(); // Prevent default form submission

    data.endpoint = data.title.toLowerCase().replace(/ /g, "-"); // Generate endpoint from title
    data.id = data.endpoint;

    if (
      data.title === "" ||
      data.titleImg === "" ||
      data.cardImg === "" ||
      data.filter === "" ||
      data.endpoint === "" ||
      data.backgroundImg === "" ||
      data.description === "" ||
      data.subTitle === ""
    ) {
      return;
    }

    const {
      title,
      titleImg,
      backgroundImg,
      filter,
      endpoint,
      cardImg,
      description,
      subTitle,
    } = data;

    db.collection("movies").doc(endpoint).set({
      title,
      titleImg,
      backgroundImg,
      filter,
      endpoint,
      cardImg,
      description,
      subTitle,
    });

    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      store.setMovies(tempMovies);
    });

    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-70px)] px-[calc(3.5vw+5px)] flex-col">
      <h1 className="text-4xl font-bold my-10">Add Movies and Series</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center flex-col gap-[30px] flex-1"
      >
        {fileds.map((field) => (
          <Input
            key={field.name}
            id={field.name}
            label={field.label}
            type={field.type}
            register={register}
            errors={errors}
            required={field.required}
          />
        ))}
        <input 
          className='flex items-center justify-center p-3 border-2 border-gray-300 curpor-pointer hover:bg-gray-800 transition duration-200 rounded-xl' 
          type="submit" 
          />
      </form>
    </div>
  );
};

export default AddMovies;
