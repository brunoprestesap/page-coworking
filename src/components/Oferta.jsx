import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

const Oferta = () => {
  return (
    <div className="p-5">
      <h2 className="text-5xl text-center">Oferta para novos membros</h2>

      <p className="text-xl mt-5">
        Inscreva-se agora e ganhe um dia de acesso gratuito para experimentar
        nosso espaço de coworking. Descubra como podemos ajudá-lo a alcançar
        seus objetivos profissionais!
      </p>

      <div className="bg-slate-600 p-5 my-5 flex flex-col items-center">
        <FaWhatsapp size='40' color="white" />
        <p className="text-3xl text-center text-white font-bold">
          Experimente gratuitamente agora
        </p>
      </div>
    </div>
  );
};

export default Oferta;
