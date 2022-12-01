import React from 'react';
import '../hojas-de-estilo/Tarjeta.css';

//usamos props para reutilizar el codigo, es como hacerlo una plantilla 
//llamamos en el parentesis a los props en la funcion
//<>

export function TarjetaBlog(props) {
  return (
    <div className='contenedor-Tarjeta'>
      <img
        className='imagen-Tarjeta'
        src={require(`../Imagenes/profile-${props.imagen}.png`)}
        alt='foto vacia'
        />
      <div className='contenedor-texto-tarjeta'>
        <p className='nombre-tarjeta'><strong>{props.nombre}</strong>{props.pais}</p>
        <p className='cargo-tarjeta'>{props.cargo}<strong>{props.empresa}</strong></p>
        <p className='texto-tarjeta'>{props.testimonio}</p>
        <p className='texto-tarjeta'>{props.testimonio2}</p>
        <p className='texto-tarjeta'>{props.testimonio3}</p>
        <p className='texto-tarjeta'>{props.testimonio4}</p>
        <p className='texto-tarjeta'>{props.testimonio5}</p>
      </div>
    </div>
  );
}
