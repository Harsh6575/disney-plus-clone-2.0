import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../store/store";

const Login = () => {
  const navigate = useNavigate();

  const state = useStore();
  const setUser = state.setUser;
  const user = state.user;

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="relative h-[calc(100vh-70px)] flex items-center justify-center">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 z-[-1] opacity-70"
        style={{
          backgroundImage: `url("/images/login-background.jpg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      />
      <div className="max-w-[650px] w-90% mt-100px px-10 py-20 flex flex-col items-center">
        <img src="/images/cta-logo-one.svg" alt="CTA Logo One" />
        <Link
          className="w-full bg-blue-600 font-bold py-4 text-white rounded-md text-center text-lg cursor-pointer transition duration-250 ease-in-out hover:bg-blue-700 mt-8 mb-4"
          onClick={() => {
            setTimeout(() => {
              setUser(true);
              localStorage.setItem("userinfo", true);
            }, 1000);
            navigate("/");
          }}
        >
          GET ALL THERE
        </Link>
        <p className="text-xs text-center leading-relaxed mb-6">
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img
          src="/images/cta-logo-two.png"
          alt="CTA Logo Two"
          className="w-90%"
        />
      </div>
    </div>
  );
};

export default Login;
