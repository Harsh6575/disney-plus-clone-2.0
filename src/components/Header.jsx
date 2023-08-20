import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import useStore from "../store/store";

import { Navlinks } from "../constant";

const Header = () => {
  const navigate = useNavigate();

  const state = useStore();
  const user = state.user;
  const logout = state.logout;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <nav className="h-[70px] bg-gradient-to-b from-[#141b29] to-[#0c111b] flex items-center px-[36px] overflow-x-hidden">
      <img className="w-[80px]" src="/images/logo.svg" alt="logos" />
      {!user ? (
        <div className="flex-1 flex justify-end">
          <div
            className="border border-gray-300 py-2 px-4 rounded-md tracking-wider uppercase bg-opacity-60 hover:bg-gray-100 hover:text-black transition duration-200 cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-1 ml-[25px] px-[12px] items-center">
            {Navlinks.map((link) => (
              <Link
                className="flex items-center px-[12px] cursor-pointer text-inherit no-underline group"
                to={link.to}
                key={link.linkText}
              >
                <img
                  className="h-[20px]"
                  src={`/images/${link.iconName}`}
                  alt={link.linkText}
                />
                <span className="text-sm tracking-[1.42px] relative custom-span">
                  {link.linkText}
                </span>
              </Link>
            ))}
          </div>
          <Link
            onClick={() => {
              setTimeout(() => {
                logout();
                localStorage.clear();
                navigate("/login");
              }, 1000);
            }}
          >
            <img
              className="w-[48px] h-[48px] rounded-full cursor-pointer"
              src="/logo192.png"
              alt="logos"
            />
          </Link>
        </>
      )}
    </nav>
  );
};

export default Header;
