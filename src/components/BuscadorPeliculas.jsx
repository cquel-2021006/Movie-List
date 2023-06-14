import React, { useState } from "react"

export const BuscadorPeliculas = ({ onBuscar }) => {

    const [buscar, setBuscar] = useState('');

    const handleChange = (event) => {
        setBuscar(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onBuscar(buscar);
    }

    return (
        <div className="container" style={{textAlign: "center"}}>
            
            <form onSubmit={handleSubmit} aria-label="form">
                <input type="text" placeholder="Buscar Pelicula..." value={buscar} onChange={handleChange} />
                <button type="submit">Buscar</button>
            </form>

        </div>

    )
}