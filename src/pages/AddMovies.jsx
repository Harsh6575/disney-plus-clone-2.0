import React from "react";
import { useForm } from "react-hook-form";

import Input from "../components/Input";
import db from "../firebase.config";
import useStore from "../store/store";

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

  const fileds = [
    {
      name: "title",
      type: "text",
      label: "Enter Title",
      required: true
    },
    {
      name: "titleImg",
      type: "text",
      label: "Enter Title Image",
      required: true
    },
    {
      name: "cardImg",
      type: "text",
      label: "Enter Card Image",
      required: true
    },
    {
      name: "filter",
      type: "text",
      label: "Enter Filter",
      required: true
    },
    {
      name: "backgroundImg",
      type: "text",
      label: "Enter Background Image",
      required: true
    },
    {
      name: "description",
      type: "text",
      label: "Enter Description",
      required: true
    },
    {
      name: "subTitle",
      type: "text",
      label: "Enter Sub Title",
      required: true
    },
  ];


  const onSubmit = (data, event) => {
    event.preventDefault(); // Prevent default form submission

    data.endpoint = data.title.toLowerCase().replace(/ /g, "-"); // Generate endpoint from title
  
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

    db.collection("movies").add(data); // Add data to the firestore

    db.collection("movies").onSnapshot((snapshot)=>{
      let tempMovies = snapshot.docs.map((doc)=>{
        return {id:doc.id,...doc.data()}
      });
      store.setMovies(tempMovies);
    })
    
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
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovies;
