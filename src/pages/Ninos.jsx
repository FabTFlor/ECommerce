import React from "react";
import banner_ninos_img from "../components/assets/banner_kids.png";
import data from "../components/assets/all_product.js";
import Cards from "../components/cards/Cards.jsx";

function Ninos() {
  const filterdata = data.filter(
    (producto) => producto.id >= 25 && producto.id <= 36
  );
  return (
    <>
      <img
        src={banner_ninos_img}
        alt="banner_ninos_img"
        style={{ width: "100%" }}
      />
      <Cards data={filterdata} titulo="Niños" />
    </>
  );
}

export default Ninos;
