import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Inicio">Inicio</Link>
      <Link to="/Peliculas">Películas</Link>
      <Link to="/Interpretes">Intérpretes</Link>
      <Link to="/Admin">Admin</Link>
    </nav>
  );
}

export default Nav;