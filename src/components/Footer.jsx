import React from 'react'

import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="bg-[#1A1A1A] p-5 md:p-12 w-full grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:mx-8">
          <div className="border-slate-300 border-l-2">
            <h2 className="text-slate-300 ml-5 text-4xl font-bold">
              Pronto para alugar seu espaço?
            </h2>
          </div>
          <div className="flex justify-center w-full">
            <a
              href="https://wa.me/5596981285542"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-5 bg-slate-600/80 w-full my-5">
                <h2 className="text-2xl text-slate-300">
                  Solicite uma cotação
                </h2>
              </button>
            </a>
          </div>
        </div>

        <div className="w-full lg:mx-8">
          <div className="w-full mb-5">
            <h2 className="text-slate-300 text-2xl font-bold">Contate-nos</h2>
          </div>
          <div className="w-full">
            <h2 className="text-slate-200 text-xl">
              contato@villacoworking.com.br
            </h2>
            <h2 className="text-slate-200 text-xl my-3">+55(96)98128-5542</h2>
            <h2 className="text-slate-200 text-xl">
              Rua tal, 200 - Dom Bosco, Juiz de Fora - MG / 36025-430
            </h2>
            <div className="flex items-center gap-3 my-5">
              <FaInstagram size={40} color="819DC4" />
              <h2 className="text-2xl text-slate-300 font-bold">villacoworking</h2>
            </div>
          </div>
        </div>

        <div className="my-5 lg:mx-8 lg:my-0">
          <h2 className="text-slate-300 text-lg mb-3">Home</h2>
          <h2 className="text-slate-300 text-lg mb-3">
            Benefícios
          </h2>
          <h2 className="text-slate-300 text-lg mb-3">Ofertas</h2>
          <h2 className="text-slate-300 text-lg mb-3">Garantia de satisfação</h2>
          <h2 className="text-slate-300 text-lg mb-3">Vantagens</h2>
          <h2 className="text-slate-300 text-lg mb-3">Contato</h2>
          <h2 className="text-slate-300 text-lg mb-3">Solicite uma cotação</h2>
        </div>
      </div>
      <div className="bg-[#1A1A1A] p-5 w-full flex flex-col justify-center items-center">
        {/* <img src={logo} alt="logo rodapé" className="w-24" /> */}
        <h2 className="text-sm text-slate-300 my-5 text-center">
          Copyright © 2023 by Bruno Prestes.
        </h2>
      </div>
    </div>
  )
}
