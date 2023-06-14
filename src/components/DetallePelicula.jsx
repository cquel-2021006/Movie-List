import React from "react";

export const DetallePelicula = ({ pelicula, onPeliculaSelect }) => {
    const handleClick = () => {
        onPeliculaSelect(pelicula.imdbID);
    };

    return (
        <>
            <div onClick={handleClick} className="card-grid" style={{ textAlign: "center", backgroundColor: "#D8CFC3" }}>
                <h3>{pelicula.Title}</h3>
                <p>Año de Estreno: {pelicula.Year}</p>
                <img src={pelicula.Poster} alt={pelicula.Title} />
                
            </div>
            {/* <div className="card" style="width: 18rem;" onClick={handleClick}>
                <div className="card-body">
                    <img src={pelicula.Poster} className="card-img-top" alt={pelicula.Title} />
                    <h5 className="card-title">{pelicula.Title}</h5>
                    <p className="card-text">Año de Estreno: {pelicula.Year}</p>
                </div>
            </div> */}
        </>
    )
}