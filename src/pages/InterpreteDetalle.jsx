/**
 * InterpreteDetalle.jsx
 * Componente para mostrar los detalles de un intérprete específico y las películas en las que ha participado.
 */

import { useParams,Link, useNavigate } from "react-router-dom";
import peliculas from "../data/peliculas";


function InterpreteDetalle() {
    const { idPelicula, index } = useParams();
    const indexNum = Number(index);

    const pelicula = peliculas.find(p => p.id === Number(idPelicula));

    const actor = pelicula.actores[indexNum];
    //const boton=useNavigate
    const pelisDelActor = peliculas.filter(p =>
        p.actores.find(a => a.nombre === actor.nombre)
    );

    return (

        <div className="max-w-3xl mx-auto mt-10 p-4">
            <a  href="/interpretes" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors">Volver</a>
            {/* <button onClick={()=> boton(-1)}> 
                Volver in
            </button> */}
            <h1 className="font-heading-h1 leading-(--heading-h1-line-height) text-(--colorprimary) [text-shadow:0px_4px_4px_#00000040]">{actor.nombre}</h1>

            <img
                src={actor.imagen}
                alt={actor.nombre}
                className="w-80 h-80 mx-auto rounded-lg shadow-lg object-cover"
            />

            <p className="mt-6 text-gray-700 text-lg">{actor.biografia}</p>

            <p className="mt-4 text-gray-500">
                <strong>Fecha de nacimiento:</strong> {actor.fechaNacimiento}
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4">Películas donde participa</h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pelisDelActor.map(p => (
                    <li key={p.id} className="bg-gray-100 p-4 rounded-lg shadow flex flex-col items-center">
                        <figure className="w-48 h-64 overflow-hidden rounded-md">
                            <img src={p.cartelera} alt={`Cartel de ${p.nombre}`} className="w-full h-full object-cover" />
                        </figure>
                        <strong className="mt-2">{p.nombre}</strong> Nota: {p.nota}
                    </li>
                ))}
            </ul>
           

        </div>

    );
}

export default InterpreteDetalle;