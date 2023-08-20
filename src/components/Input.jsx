import React from "react";

const Input = ({ id, register, required, label, name, errors }) => {
  return (
    <div className="w-full relative gap-[10px]f ocus:underline-rose-500 border-white">
      <input
        {...register(id, required)}
        className={`peer font-light bg-transparent rounded-md outline-none transition border-2 w-[800px] p-1 focus:underline-rose-500 border-white focus:bg-te 
        ${errors[id] ? "border-rose-500" : "border-none"}
        ${errors[id] ? "focus:border-rose-500" : "focus:border-none"}
        `}
        placeholder={label}
        required
      />
    </div>
  );
};

export default Input;
