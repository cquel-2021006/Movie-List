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



        {peliculaSelect && (
          <div>
            <h2>Detalles de la Pelicula</h2>
            <p>Titulo: {peliculaSelect.Title}</p>
            <p>año de Estreno: {peliculaSelect.Year}</p>
            <p>Director: {peliculaSelect.Director}</p>
            <p>Descripcion: {peliculaSelect.Plot}</p>
            <br />
          </div>
        )}

      </div>

    </>
  )
}