import React from "react";

const ObjecaoItem = ({ icon, title, descricao }) => {
  return (
    <div className="my-5 p-5 w-full md:w-4/6 flex flex-col items-center border-2 border-slate-800 rounded-xl shadow-xl shadow-slate-400">
      {icon}
      <h1 className="text-3xl text-center font-bold my-5">{title}</h1>
      <p className="text-base text-center">{descricao}</p>
    </div>
  );
};

export default ObjecaoItem;
