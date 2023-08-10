import { Star } from "@phosphor-icons/react";

type Props = {};

const Avaliacao = (props: Props) => {
  return (
    <div className="bg-white flex gap-3 w-[193px] rounded justify-between">
      <p className="text-slateGray">Avaliação</p>
      <div className="flex justify-around items-center gap-1">
        <p className="font-bold">4.9</p>
        <Star size={15} weight="fill" color="#FFCE00" />
      </div>
    </div>
  );
};

export default Avaliacao;
