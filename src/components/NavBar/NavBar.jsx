import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        {/* img[src=logo alt=logo] -> emet */}
        <img src={logo} alt="logo" />
        <p>Mi tienda en linea</p>
      </div>
      <ul className="nav-menu">
        <li>Tienda</li>
        <li>Hombre</li>
        <li>Mujer</li>
        <li>Niños</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
      </div>
    </div>
  );
}

export default NavBar;
