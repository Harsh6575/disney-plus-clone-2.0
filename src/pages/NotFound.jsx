import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-[calc(100vh-70px)] px-[calc(3.5vw+5px)] bg-black text-blue-500 flex items-center justify-center">
    <Link to="/">
      <h1 className="text-4xl">404 - Not Found!</h1>
      <h1 className="flex items-center justify-center">Go Home</h1>
    </Link>
  </div>
);

export default NotFound;
