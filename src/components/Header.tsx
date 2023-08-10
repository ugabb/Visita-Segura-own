import { List } from "@phosphor-icons/react";
import SearchButton from "./SearchButton";
import DefaultButton from "./DefaultButton";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between items-center bg-bgHeader p-3">
      <img src="./logo.png" className="logo m-3 md:w-[87px]" />
      <ul className="gap-5 text-slateGray text-inter hidden md:flex">
        <li>Home</li>
        <li>Sobre</li>
        <li>Imóveis</li>
      </ul>
      <div className="hidden md:block">
        <SearchButton />
      </div>
      <div className="hidden md:block">
        <DefaultButton text="Entrar" />
      </div>

      <List size={32} className="text-primaryBlue md:hidden" />
    </div>
  );
};

export default Header;
