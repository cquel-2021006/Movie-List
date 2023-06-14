import React from "react";
import { DetallePelicula } from './DetallePelicula'

export const ListaPeliculas = ({ peliculas, onPeliculaSelect }) => {
    return (
        <>
            <div className="card" >
                {peliculas.map((pelicula) => (
                    <DetallePelicula
                        key={pelicula.imdbID}
                        pelicula={pelicula}
                        onPeliculaSelect={onPeliculaSelect}
                    />
                ))}
            </div>
        </>
    )
}