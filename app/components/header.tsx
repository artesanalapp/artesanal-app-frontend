"use client";
import React, { useState } from "react";
import MenuModal from "@/app/components/menuModal";

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-cover bg-no-repeat bg-center bg-[url('/bg-image-4.webp')] h-[100vh]">
      <div className="border-b p-4 flex flex-wrap md:flex-row items-center justify-between">
        <span className="text-6xl text-white">Artesanal</span>
        <button onClick={toggleMenu} className="mr-5 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
          >
            <path
              fill="#FFF"
              d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"
            />
          </svg>
        </button>
      </div>

      {isOpen ? <MenuModal toggleMenu={toggleMenu} /> : ""}
    </header>
  );
}

export default Header;
