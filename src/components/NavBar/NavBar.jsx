import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";

function NavBar() {
  /* const [nombreDeVariable, function modificadorDeVariable] = useState(calorInicialdelaVariable) 
    La convencion es que la funcion modificadora de la variable se le anteponfa un set más el nombre de variable en, camelCase*/
  const [menu, setMenu] = useState("tienda");
  return (
    <div className="navbar">
      <div className="nav-logo">
        {/* img[src=logo alt=logo] -> emet */}
        <img src={logo} alt="logo" />
        <p>Mi tienda en linea</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          Tienda
          {/* sintaxis de operador ternario: evaluador ? siCumpleConsicion : SiNocumple */}
          {/* sintaxis de operador AND: evaluador && siCumpleCondicion */}
          {menu === "tienda" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("hombre")}>
          Hombre
          {menu === "hombre" && <hr />}
        </li>
        <li onClick={() => setMenu("mujer")}>
          Mujer
          {menu === "mujer" && <hr />}
        </li>
        <li onClick={() => setMenu("niños")}>
          Niños
          {menu === "niños" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
      </div>
    </div>
  );
}

export default NavBar;
