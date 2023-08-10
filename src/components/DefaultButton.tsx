import React from "react";

type Props = {
  text: string;
};

const DefaultButton = ({ text }: Props) => {
  return (
    <div>
      <button className="bg-primaryBlue text-white px-8 py-3 font-inter">
        {text}
      </button>
    </div>
  );
};

export default DefaultButton;
