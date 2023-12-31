import React from "react";
import BeneficiosItem from "./BeneficiosItem";
import { FaInternetExplorer, FaUsersRectangle, FaMapLocationDot } from "react-icons/fa6"
import { IoBusiness } from "react-icons/io5";
import { SiGotomeeting } from "react-icons/si";
import { MdOutlineCastForEducation, MdChair, MdCleanHands, MdSentimentSatisfiedAlt } from "react-icons/md";

const Beneficios = () => {
  const beneficios = [
    {
      id: 1,
      icon: <FaInternetExplorer />,
      title: "Internet estável e rápida",
      desc: "Temos uma estrutura de internet super rápida. Internet lenta ou instável vai impactar na sua produtividade ou do seu time. Não fique sem internet no meio dos seus trabalhos, eventos ou reuniões. Livre-se dos custos com internet problemática e que lhe deixa na mão sempre quando você mais precisa.",
    },
    {
      id: 2,
      icon: <FaUsersRectangle />,
      title: "Ambiente Colaborativo",
      desc: "Proporcionamos um ambiente colaborativo para que você feche novos negócios e troque experiêcias com outras empresas ou profissionais interagindo no dia a dia em um coworking, seja em nossos ambientes compartilhados ou eventos realizados dentro do Villa Coworking.",
    },
    {
      id: 3,
      icon: <IoBusiness />,
      title: "Flexibilidade e adaptação",
      desc: "Tenha planos e espaços flexíveis que se ajustam ao crescimento da sua empresa, permitindo aumentar o espaço conforme a necessidade da sua empresa, sem as limitações, custos inicias e despesas fixas ao alugar um novo escritório tradicional.",
    },
    {
      id: 4,
      icon: <SiGotomeeting />,
      title: "Espaços para reuniões com privacidade",
      desc: "Espaços modernos, confortáveis e com privacidade garantida para realização de reuniões da sua empresa.",
    },
    {
      id: 5,
      icon: <FaMapLocationDot />,
      title: "Localização e acessibilidade estratégica",
      desc: "Estamos localizados estratégicamente com fácil acesso a transporte público, estacionamento conveniente e proximidade a áreas comerciais ou hubs empresariais.",
    },
    {
      id: 6,
      icon: <MdChair />,
      title: "Móveis premium de alta qualidade e confortáveis",
      desc: "Oferecemos espaços com móveis premium e confortáveis para sua equipe e clientes.",
    },
    {
      id: 7,
      icon: <MdCleanHands />,
      title: "Ambiente sempre limpo e agradável",
      desc: "Livre-se do ônus de preocupar-se com a limpeza do seu ambiente empresarial. Foque no seu negócio e deixe essas tarefas cotidianas conosco. 😊.",
    },
    {
      id: 8,
      icon: <MdOutlineCastForEducation />,
      title: "Realização de eventos de networking, workshops, mentorias",
      desc: "Estamos sempre realizando eventos de diversos tipos para nossos membros, onde terá a oportunidade de fazer networking.",
    },
    {
      id: 9,
      icon: <MdSentimentSatisfiedAlt />,
      title: "Valorização da satisfação do cliente",
      desc: "Oferecemos um atendimento ao cliente eficiente, suporte técnico ágil e a capacidade de resolver problemas prontamente.",
    },
  ];

  return (
    <div id="services">
      <div className="bg-stone-900 px-5 py-8 grid grid-cols-1 xl:grid-cols-2">
        <div className="w-full xl:px-16">
          <div className="border-l-2 border-stone-100 p-5">
            <h2 className="text-stone-200 font-bold text-4xl md:text-6xl">
              Benefícios
              <br />
              ao contratar
              <br />o Villa Coworking
            </h2>
          </div>

          <div className="px-5 py-8">
            <h2 className="text-base md:text-lg text-stone-200 landing-7">
                Bem-vindo ao Villa Coworking, onde a inovação encontra a produtividade! Oferecemos um ambiente dinâmico e estimulante que se adapta às suas necessidades de trabalho e impulsiona sua jornada profissional. Descubra por que somos a escolha certa para você.
            </h2>

            <h2 className="text-base font-bold text-stone-200 mt-5">
              Área de atendimento:
            </h2>
            <h2 className="text-stone-400 font-bold text-base">
              Macapá - Amapá
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {beneficios.map((e) => {
            return <BeneficiosItem id={e.id} icon={e.icon} title={e.title} desc={e.desc} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
