import React from "react";

function MenuModal({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <nav className="fixed top-0 right-0 min-h-screen w-1/2 bg-black text-slate-200">
      <section className="border-b p-4 flex flex-wrap md:flex-row items-center justify-between">
        <header>
          <a className=" hover:text-gray-900">First Link</a>
        </header>
        <button onClick={toggleMenu} className="mr-5 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
          >
            <path
              fill="#666666"
              d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z"
            />
          </svg>
        </button>
      </section>
    </nav>
  );
}

export default MenuModal;
