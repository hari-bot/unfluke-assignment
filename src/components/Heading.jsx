import React from "react";

const Heading = ({ value }) => {
  return (
    <div className="bg-white w-full rounded-lg p-6 mt-20 text-3xl text-center font-bold  shadow-2xl">
      {value}
    </div>
  );
};

export default Heading;
