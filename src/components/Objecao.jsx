import React from "react";
import { FaMoneyBillTrendUp, FaSackDollar, FaArrowUpFromBracket } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

import ObjecaoItem from "./ObjecaoItem";

const Objecao = () => {
  const objecao = [
    {
      icon: <FaSackDollar size={40} />,
      title: "Elimine os Custos Iniciais, Mantenha o Foco no Seu Negócio",
      descricao:
        "Aqui, você não precisa se preocupar com a compra de móveis caros, equipamentos de escritório ou custos de manutenção. Nossa infraestrutura já está pronta para você! Oferecemos um ambiente profissional, moderno e totalmente equipado para que você possa começar a trabalhar imediatamente",
    },
    {
      icon: <FaApple size={40} />,
      title: "Desperte Seu Potencial Empreendedor sem as Dores Financeiras",
      descricao:
        "Imagine a liberdade de se concentrar no crescimento do seu negócio, sem ser afetado por gastos excessivos ou preocupações com a gestão de um escritório próprio. Aqui, você terá acesso a todos os recursos necessários para o seu trabalho, sem o ônus financeiro.",
    },
    {
      icon: <FaArrowUpFromBracket  size={40} />,
      title: "Não Deixe os Custos Iniciais Impedirem o Sucesso do Seu Negócio",
      descricao:
        "Nós entendemos as dores e desafios de começar um novo negócio. É por isso que estamos comprometidos em oferecer uma alternativa acessível e eficiente para empreendedores visionários como você. Afinal, acreditamos que o foco deve ser no desenvolvimento do seu negócio, não em despesas desnecessárias.",
    },
  ];
  return (
    <div className="p-5 flex flex-col items-center">
      <FaMoneyBillTrendUp size="50" />
      <h2 className="text-4xl font-bold text-center my-5">
        Transforme Seu Negócio: Elimine Custos Iniciais com nosso Coworking
      </h2>

      <p className="text-xl mt-5 md:text-2xl text-center md:w-4/6">
        Você já sentiu o peso dos altos custos de manter um escritório
        convencional ao iniciar um novo negócio? A busca por um espaço para
        chamar de seu pode ser desafiadora e dispendiosa. Afinal, investir em
        mobília, equipamentos e despesas operacionais pode consumir boa parte do
        seu orçamento inicial
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {objecao.map((e, idx) => {
          return (
            <ObjecaoItem
              key={idx}
              icon={e.icon}
              title={e.title}
              descricao={e.descricao}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Objecao;
