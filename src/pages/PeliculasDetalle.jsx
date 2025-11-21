import { useParams, Link } from "react-router-dom";
import peliculas from "../data/peliculas";

function PeliculaDetalle() {
    const { id } = useParams();

    const pelicula = peliculas.find((p) => String(p.id) === id);

    return (
        <div>
            <h1 className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]" >{pelicula.nombre}</h1>

            <a class="botton" href="/peliculas" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors">Volver</a>

            <img
                src={pelicula.cartelera}
                alt={pelicula.nombre}
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
            />

            <p><strong>Director:</strong> {pelicula.director}</p>
            <p><strong>Clasificación:</strong> {pelicula.clasificacion}</p>
            <p><strong>Nota:</strong> {pelicula.nota}</p>

            <p className="mt-4">{pelicula.resumen}</p>

            <h3 className="mt-4 font-bold">Intérpretes</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"  >
                {pelicula.actores.map((actor, index) => (
                    <li key={index}>
                        <Link to={`/interpretes/${pelicula.id}/${index}`}>
                        <h3 className="text-center text-lg font-semibold mt-2">{actor.nombre}</h3>
                            <img
                                src={actor.imagen}
                                className="w-80 h-80 mx-auto rounded-lg shadow-lg object-cover"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
          
        </div>
    );
}

export default PeliculaDetalle;