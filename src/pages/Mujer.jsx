import React from "react";
import banner_mujer_image from "../components/assets/banner_women.png";
import data from "../components/assets/all_product.js";
import Cards from "../components/cards/Cards";

function Mujer() {
  const filterdata = data.filter(
    (producto) => producto.id >= 1 && producto.id <= 12
  );

  return (
    <>
      <img
        src={banner_mujer_image}
        alt="banner_mujer_image"
        style={{ width: "100%" }}
      />
      <Cards data={filterdata} titulo="Mujer" />
    </>
  );
}

export default Mujer;
