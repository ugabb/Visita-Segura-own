import RadiusButton from "../RadiusButton";

type Props = {};

export const Avaliacoes = (props: Props) => {
  return (
    <div className="bg-white w-56 flex flex-col justify-center items-center p-5 font-roboto shadow-lg rounded">
      <p className="text-slateGray">A casa dos seus sonhos</p>
      <span className="text-xl text-primaryBlue font-bold">80+</span>
      <p className="text-slateGray">Avaliações</p>
      <div className="text-sm">
        <RadiusButton text="Ver Detalhes" />
      </div>
    </div>
  );
};
