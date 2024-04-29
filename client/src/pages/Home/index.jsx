import React from "react";
import portada from "./portada.jpg";
import Informacion from "../../components/Informacion";
const Home = () => {
  return (
    <>
      <div>
        <img className="w-full h-auto rounded-lg shadow-2xl p-3" src={portada} alt="portada" />
      </div>
      <Informacion/>
    </>
  );
};

export default Home;
