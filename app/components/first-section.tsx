import React from "react";
import Image from "next/image";

function first() {
  return (
    <section className="flex flex-col-reverse md:flex-row max-h-screen mt-1">
      <Image height={750} width={750} alt="hero" src="/first-section-1.webp" />
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          {/* <h1 className="sm:text-4xl text-2xl mb-4">
            Bienvenida al destino para los amantes de la artesanía tanto dentro
            como fuera de la región
          </h1> */}
          <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <h2 className="uppercase tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              bienvenid@s
            </h2>

            <p className="leading-relaxed mb-3">
              al destino para los amantes de la artesanía tanto dentro como
              fuera de la región.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default first;
