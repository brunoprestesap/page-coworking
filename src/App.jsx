import "./App.css";
import Beneficios from "./components/Beneficios";
import BtnZap from "./components/BtnZap";
import { Footer } from "./components/Footer";
import Main from "./components/Main";
import Objecao from "./components/Objecao";
import Oferta from "./components/Oferta";
import Satisfação from "./components/Satisfação";

function App() {
  return (
    <>
      <Main />
      <BtnZap />
      <Beneficios />
      <Oferta />
      <Satisfação />
      <Objecao />
      <Footer />
    </>
  );
}

export default App;
