import banner_mans_image from "../components/assets/banner_mens.png";
import data from "../components/assets/all_product.js";
import Cards from "../components/cards/Cards.jsx";

function Hombre() {
  console.log(data);

  /* array-a-recorrer +.+ metodo filter + (argumento) => argumento.dato-a-evaluar + operador y comparación */
  /*                                                                      ejm: producto.id >= 13 && producto.id <= 24 */
  const filterdata = data.filter(
    (producto) => producto.id >= 13 && producto.id <= 24
  );

  return (
    <>
      <div className="hombre">
        {/* TAMOS LISTOOO */}
        <img
          src={banner_mans_image}
          alt="banner_mans_image"
          style={{ width: "100%" }}
        />
      </div>

      <Cards data={filterdata} titulo="Hombre" />
    </>
  );
}

export default Hombre;
