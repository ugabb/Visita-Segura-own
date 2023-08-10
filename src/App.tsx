import DefaultButton from "./components/DefaultButton";
import Header from "./components/Header";
import Avaliacao from "./components/widgets/Avaliacao";
import { Avaliacoes } from "./components/widgets/Avalicoes";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col gap-3 m-3 md:flex-row">
        {/* ---------------- */}
        <div className="flex flex-col gap-3 text-center md:w-1/2">
          <h1 className="text-3xl font-bold text-secondaryBlue font-inter">
            Descubra um lugar você vai adorar viver
          </h1>
          <p className="text-sm font-roboto">
            Visita Segura é uma solução imobiliária que lhe dá informações
            locais sobre casas. Pesquise com confiança com sua fonte confiável
            de casas para venda ou aluguel.
          </p>
          <DefaultButton text="Conheça mais sobre a Visita Segura" />
        </div>
        {/* ---------------- */}

        <div className="flex flex-col md:w-1/2">
          <img src="./bg-room.png" alt="" className="shadow-bgBoxShadow" />
          {/* <Avaliacoes /> */}
        </div>
        {/* <Avaliacao /> */}
      </main>
    </div>
  );
}

export default App;
