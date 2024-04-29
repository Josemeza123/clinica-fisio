import React from "react";
import imagen from "./imagen-info.jpg";
const Informacion = () => {
  return (
    <>
      <div className="flex w-full p-12">
        <div className=" w-1/2">
          <img src={imagen} alt="weewewew" />
        </div>
        <div className=" w-1/2 px-6">
          <p className="text-7xl font-bold ">BIENVENIDOS </p>
          <span className="text-gray-400">a nuestra clinica</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            consequatur non vel quam autem eaque, laborum labore accusantium
            totam iure, vitae, atque minima molestiae inventore recusandae ad
            odio dolorum excepturi!
          </p>
        </div>
      </div>
    </>
  );
};

export default Informacion;
