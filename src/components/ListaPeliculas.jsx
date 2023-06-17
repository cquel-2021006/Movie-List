import React from "react";
import { DetallePelicula } from './DetallePelicula'

export const ListaPeliculas = ({ peliculas, onPeliculaSeleccionada }) => {


    return (
        <div className="row justify-content-center rows-cols-1 row-cols-md-3 g-3">

            {peliculas.map((pelicula) => (
                <div className="col">
                    <DetallePelicula
                        key={pelicula.imdbID}
                        pelicula={pelicula}
                        onPeliculaSeleccionada={onPeliculaSeleccionada}
                    />
                </div>
            ))}

        </div>
    )
}