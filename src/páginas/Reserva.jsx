import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';

function Reserva() {
  return (
    <>
    <div className="reserva-page">
     <h1 className='title-acomodações'>Acomodações</h1>
      <div className="content">

        
        <p>Explore o que temos de oferecer e faça seu login ou registre uma nova conta!</p>
        <div className="buttons-container">
          <a href="/login" className="btn-h">Login</a>
          <a href="/cadastro" className="btn-h">Registrar</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Reserva