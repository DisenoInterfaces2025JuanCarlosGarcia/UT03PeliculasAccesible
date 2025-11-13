import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Contenedor from "./components/Contenedor";
import Home from "./pages/Home";
import Peliculas from "./pages/Peliculas";
import Admin from "./pages/Admin";
import InterpreteAccesible from "./pages/InterpreteAccesible";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    
      <Header>
        
      <Routes>
        <Route element={<Contenedor />}>
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Navigate to="/" />} />
          <Route path="/Peliculas" element={<Peliculas />} />
          <Route path="/Interpretes" element={<InterpreteAccesible />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>

      </Header>
  
  );
}

export default App;
