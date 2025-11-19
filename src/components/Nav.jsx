import { Link } from 'react-router-dom';
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  // return (
  //   // <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg">

  //   //   {/* Título a la izquierda */}
  //   //   <h1 className="text-2xl font-extrabold text-white">
  //   //     Películas
  //   //   </h1>

  //   //   {/* Links a la derecha */}
  //   //   <div className="flex gap-6">
  //   //     <Link
  //   //       to="/"
  //   //       className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
  //   //     >
  //   //       Inicio
  //   //     </Link>
  //   //     <Link
  //   //       to="/Peliculas"
  //   //       className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
  //   //     >
  //   //       Películas
  //   //     </Link>
  //   //     <Link
  //   //       to="/Interpretes"
  //   //       className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
  //   //     >
  //   //       Intérpretes
  //   //     </Link>
  //   //     <Link
  //   //       to="/admin"
  //   //       className="text-white font-medium hover:text-yellow-300 transition-colors duration-300"
  //   //     >
  //   //       Admin
  //   //     </Link>
  //   //   </div>
  //   // </nav>
  // );
  // Estado del menú: abierto o cerrado
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Botón hamburguesa */}
      <nav className="relative p-4 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg rounded-lg">

        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-white">
            Películas
          </h1>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir o cerrar menú de navegación"
            aria-expanded={open}
            aria-controls="menu-principal"
            className="text-3xl text-white p-2"
          >
            ☰
          </button>

          {/* Menú controlado por el estado */}
          <nav className={open ? "block" : "hidden"}>
            <NavLink to="/" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-gray-700 transition">Inicio</NavLink>
            <NavLink to="/peliculas" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-gray-700 transition">Películas</NavLink>
            <NavLink to="/interpretes" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-gray-700 transition">Intérpretes</NavLink>
            <NavLink to="/admin" onClick={() => setOpen(false)} className="px-3 py-2 rounded hover:bg-gray-700 transition">Admin</NavLink>
          </nav>
        </div>
      </nav>
    </>
  );
}

export default Nav;