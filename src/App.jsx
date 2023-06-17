import React, { useState } from "react"
import { BuscadorPeliculas } from './components/BuscadorPeliculas'
import { ListaPeliculas } from './components/ListaPeliculas'
import { buscarPeliculas, obtenerDetallesPelicula } from "./Api/apiPelicula"


export const App = () => {

  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSelect, setPeliculaSelect] = useState(null);

  const handleBuscarPeliculas = async (termino) => {
    try {
      const resultado = await buscarPeliculas(termino);
      setPeliculas(resultado);
      setPeliculaSelect(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePeliculaSelect = async (id) => {
    try {
      const detalle = await obtenerDetallesPelicula(id);
      setPeliculaSelect(detalle);
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center", color: "white" }}>Movie List</h1>

        <BuscadorPeliculas onBuscar={handleBuscarPeliculas} />
        <br />

        {peliculas.length > 0 && (
          <ListaPeliculas
            peliculas={peliculas}
            onPeliculaSeleccionada={handlePeliculaSelect}
          />
        )}

        <br />

        <div>
          {peliculaSelect && (
            <div className="card">
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={peliculaSelect.Poster} alt={peliculaSelect.Title} className="card-img" />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h2>Detalles de la película</h2>
                    <h5 className="card-title">{peliculaSelect.Title}</h5>
                    <p className="card-text">Año de lanzamiento: {peliculaSelect.Year}</p>
                    <p className="card-text">Director: {peliculaSelect.Director}</p>
                    <p className="card-text">Descripción: {peliculaSelect.Plot}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <br />
      </div>

    </>
  )
}