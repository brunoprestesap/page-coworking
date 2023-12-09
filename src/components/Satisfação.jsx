import React from "react";
import { FaFaceGrinWide } from "react-icons/fa6";

const Satisfação = () => {
  return (
    <div className="p-5 bg-black flex flex-col items-center">
      <FaFaceGrinWide color="white" size={45} />
      <h2 className="text-white text-5xl text-center my-5">
        Garantia de Satisfação
      </h2>

      <p className="text-white text-2xl text-center md:w-4/6">
        Estamos confiantes de que nosso espaço atenderá às suas expectativas.
        Oferecemos uma garantia de satisfação, sem perguntas.
      </p>
    </div>
  );
};

export default Satisfação;
