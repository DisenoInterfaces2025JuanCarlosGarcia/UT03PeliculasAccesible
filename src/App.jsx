import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Contenedor from "./components/Contenedor.jsx";
import Home from "./pages/Home.jsx";
import Peliculas from "./pages/Peliculas.jsx";
import Admin from "./pages/Admin.jsx";
import Interpretes from "./pages/Interpretes.jsx";



function App() {
  return (
    <>
    <Header />
    {/* <main id="main-content"> */}
      <Routes>
        <Route element={<Contenedor />}>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Navigate to="/" />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/interpretes" element={<Interpretes />} />
          <Route path="/admin" element={<Admin />} />
        </Route>


        <Route
        path="*"
        element={
          <Contenedor titulo="Pagina no encontrada">
            <p> La ruta no existe.</p>
          </Contenedor>
        
        }

        />
      </Routes>
      {/* </main> */}
    </>
  );
}

export default App;
