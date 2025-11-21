import peliculas from "../data/peliculas";
import { Link } from "react-router-dom";

function Peliculas() {
    return (
        <>
       
            <h1 className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]">
                Películas
            </h1>

            <p className="body-text">
                Listado de películas disponibles:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 w-full mt-8">
                {peliculas.map((pelicula) => (
                    <Link
            //key={pelicula.id}
            to={`/peliculas/${pelicula.id}`}
            //className="block"
          >
                    <article
                    tabIndex={0}
                        key={pelicula.id}
                        className="bg-white rounded-lg shadow p-4 flex flex-col items-start"
                    >
                        <figure className="w-full aspect-[2/3] rounded-lg overflow-hidden">
                            <img
                                src={pelicula.cartelera}
                                alt={`Cartel de ${pelicula.nombre}`}
                                className="w-full h-full object-cover"
                            />
                        </figure>

                        <h2 className="text-xl font-bold mt-4">{pelicula.nombre}</h2>
                        <p><strong>Director:</strong> {pelicula.director}</p>
                        <p><strong>Clasificación:</strong> {pelicula.clasificacion}</p>
                        <p><strong>Nota:</strong> {pelicula.nota}</p>

                        <p className="mt-2 text-sm opacity-80">
                            {pelicula.resumen}
                        </p>
                    </article>
                    </Link>
                ))}
            </div>
            

        </>
    );
}

export default Peliculas;