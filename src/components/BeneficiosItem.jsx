const BeneficiosItem = ({ id, icon, title, desc }) => {
  return (
    <div
      key={id}
      className="w-full sm:p-5 md:flex md:flex-col p-5 bg-gradient-to-l from-gray-700"
    >
      <div className="text-4xl text-white flex justify-center mb-3">{icon}</div>
      <h2 className="text-white font-bold text-2xl mb-3">{title}</h2>
      <h2 className="text-stone-200 text-base leading-5 text-justify">
        {desc}
      </h2>
    </div>
  );
};

export default BeneficiosItem;
