import NavBar from "./components/NavBar/NavBar";
import Tienda from "./pages/Tienda";
import Mujer from "./pages/Mujer";
import Hombre from "./pages/Hombre";
import Ninos from "./pages/Ninos";

import { Routes, Route } from "react-router-dom";
import Producto from "./pages/Producto";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Tienda />}></Route>
        <Route path="/mujer" element={<Mujer />}></Route>
        <Route path="/hombre" element={<Hombre />}></Route>
        <Route path="/ninos" element={<Ninos />}></Route>
        <Route path="/producto/:id" element={<Producto />}></Route>
      </Routes>
    </>
  );
}
export default App;
