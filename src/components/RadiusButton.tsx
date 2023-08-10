import React from "react";

type Props = {
  text: string;
};

const RadiusButton = ({text}: Props) => {
  return (
    <div>
      <button className="bg-primaryBlue text-white px-8 py-3 font-inter rounded-sm">
        {text}
      </button>
    </div>
  );
};

export default RadiusButton;
