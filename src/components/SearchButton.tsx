import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchButton = () => {
  return (
    <div className="bg-white p-1 rounded-full shadow-md">
      <MagnifyingGlass size={24} weight="light" className="text-primaryBlue" />
    </div>
  );
};

export default SearchButton;
