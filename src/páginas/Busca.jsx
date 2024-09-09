import React, { useState } from 'react';

export default function Busca() {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Buscando hotéis em', destination);
    console.log('Datas:', checkInDate, 'a', checkOutDate);
    console.log('Número de hóspedes:', guests);
  };

  return (
    <div className="reserva-container">
      <div className="Align2">
        {/* Título movido para logo acima da quarto-box */}
        <h1 className="titulo-busca">Encontre o Quarto Perfeito para você</h1>

        <div className="quarto-box">
          <img src="https://via.placeholder.com/100" alt="Imagem Exemplo" className="quarto-image" />
          <div className="quarto-text">
            <h1 className="quarto-title">Título Principal</h1>
            <h2 className="quarto-subtitle">Subtítulo Explicativo</h2>
            <button className="select-button">Selecionar</button>
          </div>
        </div>
      </div>

      <div className="Align1">
        <form onSubmit={handleSearch} className="busca-form">
          <div className="form-group">
            <label htmlFor="destination">Destino:</label>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Para onde você vai?"
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkInDate">Data de Check-in:</label>
            <input
              type="date"
              id="checkInDate"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkOutDate">Data de Check-out:</label>
            <input
              type="date"
              id="checkOutDate"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Número de Hóspedes:</label>
            <input
              type="number"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
            />
          </div>
          <button type="submit" className="search-button">Buscar</button>
        </form>
      </div>
    </div>
  );
}
