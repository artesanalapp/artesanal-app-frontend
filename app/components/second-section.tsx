import React from "react";
import Image from "next/image";

function second() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="capitalize sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Una plataforma para artesanos latinoamericanos
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Podría atender al mercado local, que también tendría la
              oportunidad de llegar a consumidores internacionales interesados
              en adquirir productos auténticos y únicos de la región.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                height={900}
                width={450}
                alt="hero"
                src="/third-section-1.webp"
              />
            </div>
            <h2 className="capitalize text-xl font-medium title-font text-gray-900 mt-5">
              El trabajo manual artesanal
            </h2>
            <p className="text-base leading-relaxed mt-2">
              permite la transmisión de conocimientos que hacen parte del
              patrimonio cultural inmaterial, fomenta la tradición, la
              sostenibilidad y la creación de comunidad.
            </p>
            <a className="capitalize text-indigo-500 inline-flex items-center mt-3">
              Aprende con nosotros
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                height={900}
                width={450}
                alt="hero"
                src="/third-section-2.webp"
              />
            </div>
            <h2 className="capitalize text-xl font-medium title-font text-gray-900 mt-5">
              América Latina
            </h2>
            <p className="text-base leading-relaxed mt-2">
              es conocida por su rica diversidad cultural y tradiciones
              artesanales. Hay una amplia variedad de técnicas, materiales y
              estilos artesanales en toda la región, lo que brinda una gran
              cantidad de productos únicos y auténticos para ofrecer.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Aprende con nosotros
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                height={900}
                width={450}
                alt="hero"
                src="/third-section-3.webp"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              No obstante
            </h2>
            <p className="text-base leading-relaxed mt-2">
              nuestro sector se ve mediado por mucha precariedad, informalidad,
              autogestión que resta tiempo al creativo, carencia de canales,
              entre otras. Definir a un público resulta difícil, especialmente
              porque así como el creativo no tiene facilidad de acceso a canales
              de divulgación, el usuario no cuenta con suficiente información
              del creativo, su oficio y su producto.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default second;
