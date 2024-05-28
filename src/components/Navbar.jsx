import React, { useState } from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import coin from "../assets/coin.jpg";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b-2 mt-3">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img className="w-[120px]" src={logo.toString()} alt="Logo" />
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full flex  p-1 text-yellow-400 hover:text-yellow-700"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
              <span>&#x25BE;</span>
            </button>

            <button
              type="button"
              className="relative rounded-full flex items-center gap-1 text-sm"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View funds</span>
              <img
                className="h-8 w-8 rounded-full"
                src={coin.toString()}
                alt="coin"
              />
              <span>234</span>
            </button>

            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex items-center rounded-full text-lg text-gray-400"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={toggleMobileMenu}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={avatar.toString()}
                    alt="avatar"
                  />
                  <span>&#x25BE;</span>
                </button>
              </div>
              <div
                className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  isMobileMenuOpen
                    ? "transition ease-out duration-100 transform opacity-100 scale-100"
                    : "transition ease-in duration-75 transform opacity-0 scale-95"
                }`}
              >
                <a className="block px-4 py-2 text-sm text-gray-700">
                  Your Profile
                </a>
                <button
                  className="block px-4 py-2 text-sm text-gray-700"
                  onClick={() => navigate("/funds")}
                >
                  Funds
                </button>
                <button className="block px-4 py-2 text-sm text-red-600">
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
