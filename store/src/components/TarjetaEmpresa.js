import React from 'react';
import '../hojas-de-estilo/Tarjeta.css';

//usamos props para reutilizar el codigo, es como hacerlo una plantilla 
//llamamos en el parentesis a los props en la funcion
//<>

export function TarjetaEmpresa(props) {
  return (
    <div className='contenedor-Tarjeta'>
      <img
        className='imagen-Tarjeta'
        src={require(`../Imagenes/profile-${props.imagen}.png`)}
        alt='foto vacia'
        />
      <div className='contenedor-texto-tarjeta'>
        <p className='nombre-tarjeta'><strong>{props.nombre}</strong></p>
        <p className='texto-tarjeta'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}