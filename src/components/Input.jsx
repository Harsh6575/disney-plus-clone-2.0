import React from "react";

const Input = ({ id, register, required, label, name, errors }) => {
  return (
    <div className="w-full relative gap-[10px]f ocus:underline-rose-500 border-white">
      <input
        {...register(id, required)}
        className={`peer font-light bg-transparent rounded-md outline-none transition border-0 border-b-2 w-[800px] p-1 focus:border-blue-400
        `}
        placeholder={label}
        required
      />
    </div>
  );
};

export default Input;
