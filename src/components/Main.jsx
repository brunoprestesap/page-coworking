import React from "react";
import bgMain from "../assets/bg.jpeg";
// import logo from "../assets/logo.jpeg";

const Main = () => {
  return (
    <div id="main">
      {/* Backgroud hero */}
      <div className="relative w-full bg-slate-300">
        <img src={bgMain} className="w-full h-screen object-cover" alt="/" />

        {/* Container main */}
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50 justify-center">
          <h1 className="font-bold text-4xl m-5">Villa CoWorking</h1>

          <div className="max-w-[850px] m-auto h-96 px-5 w-full absolute bottom-36 md:bottom-24">
            <div className="border-l-4 border-stone-800 p-2">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
                Um espaço moderno para voce fazer networking, crescer
                profissionalmente e ter liberdade
              </h1>
              <h2 className="text-base mt-2 md:mt-5 md:text-xl font-bold">
                Reduza custos com espaços de coworking e promova seu
                crescimento profissional. Escolha entre diferentes espaços de
                trabalho e tenha acesso a recursos de infraestrutura de
                qualidade.
              </h2>
            </div>

            <div className="flex justify-center md:justify-start mt-3">
              <a
                href="https://wa.me/5596981285542"
                target="_blank"
                rel="noreferrer"
              >
                <button className="py-5 w-64 bg-slate-900 text-gray-200">
                  Faça uma cotação
                </button>
              </a>
            </div>
          </div>

          <div className="absolute bottom-2 left-24 md:bottom-4 md:right-4 flex flex-col md:flex-row md:mt-5 justify-center md:justify-end items-center">
            <div className="text-center">
              <h2 className="text-sm md:text-lg">Área de cobertura</h2>
              <h2 className="font-bold">Macapá e Santana</h2>
            </div>

            <div className="text-center md:m-3">
              <h2 className="text-sm md:text-lg">
                contato@villacoworking.com.br
              </h2>
              <h2 className="text-sm md:text-lg">(96)98128-5542</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
