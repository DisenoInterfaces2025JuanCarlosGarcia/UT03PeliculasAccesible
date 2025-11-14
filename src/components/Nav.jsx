import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg">
      
      {/* Título a la izquierda */}
      <h1 className="text-2xl font-extrabold text-white">
        Películas
      </h1>

      {/* Links a la derecha */}
      <div className="flex gap-6">
        <Link
          to="/"
          className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
        >
          Inicio
        </Link>
        <Link
          to="/Peliculas"
          className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
        >
          Películas
        </Link>
        <Link
          to="/Interpretes"
          className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
        >
          Intérpretes
        </Link>
        <Link
          to="/admin"
          className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
        >
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Nav;