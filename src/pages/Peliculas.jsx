import Contenedor from "../components/Contenedor";
import Interprete from "./InterpreteAccesible";
import peliculas from "../data/peliculas";


   function Peliculas(){
    
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
              <Interprete
                key={index}
                nombre={actor.nombre}
                foto={actor.imagen}
                esNota10={pelicula.nota === 10} // pasamos si la nota es 10
              >
                {actor.biografia}
              </Interprete>
            ))
          )}
        </div>
    </Contenedor>
   )}

   export default Peliculas;