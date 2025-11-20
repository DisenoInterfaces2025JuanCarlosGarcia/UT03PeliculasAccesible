import Contenedor from "../components/Contenedor";
import Interprete from "../components/InterpreteAccesible";
import peliculas from "../data/peliculas.js";
import { Link } from "react-router-dom";


   function Interpretes(){
    
    return(
    
    
   <Contenedor titulo="Intérpretes de películas destacadas">
 
      <p className="body-text">
        Listado de intérpretes disponibles:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
     
          {peliculas
          // .filter(pelicula => pelicula.clasificacion === "Drama") // solo películas de Drama
          
          .map(pelicula =>
            pelicula.actores.map((actor, index) => (

              <Link
            // key={`${pelicula.id}-${index}`}
              to={`/interpretes/${index}`}
        >
              <Interprete
                key={index}
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10} // pasamos si la nota es 10
              >
                {actor.biografia}
              </Interprete>

            </Link>
            ))
          )}

        </div>
    </Contenedor>
   )}

   export default Interpretes;