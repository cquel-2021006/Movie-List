import React from "react";

export const DetallePelicula = ({ pelicula, onPeliculaSeleccionada }) => {

    const handleClick = () => {
        onPeliculaSeleccionada(pelicula.imdbID);
      };


    return (
            <div onClick={handleClick} style={{ textAlign: "center", }}>
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img src={pelicula.Poster} alt={pelicula.Title} className="card-img" />
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{pelicula.Title}</h5>
                                <p className="card-text">Año de Estreno: {pelicula.Year}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}