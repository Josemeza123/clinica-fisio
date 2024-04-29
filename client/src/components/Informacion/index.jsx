import React from "react";
import imagen from "./imagen-info.jpg";
const Informacion = () => {
  return (
    <>
      <div>
        <div>
          <img src={imagen} alt="weewewew" />
        </div>
        <div>
          <p>BIENVENIDOS </p>
          <span>a nuestra clinica</span>{" "}
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
