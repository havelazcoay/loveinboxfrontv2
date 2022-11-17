import React from 'react';
import '../hojas-de-estilo/Tarjeta.css';

//usamos props para reutilizar el codigo, es como hacerlo una plantilla 
//llamamos en el parentesis a los props en la funcion
//<>

export function Tarjeta(props) {
  return (
    <div className='contenedor-Tarjeta'>
      <img
        className='imagen-Tarjeta'
        src={require(`../Imagenes/profile-${props.imagen}.png`)}
        alt='foto vacia'
        />
      <div className='contenedor-texto-tarjeta'>
        <p className='nombre-tarjeta'><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-tarjeta'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-tarjeta'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}


/*
<Tarjeta
            nombre='Harold Velazco'
            pais='Colombia'
            imagen='harold'
            cargo='ingeniero de sistemas'
            empresa='UNAL'
            testimonio='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tellus tellus, hendrerit vitae blandit non, 
            finibus sed augue. Ut et purus non risus ultrices pharetra. Nunc vel augue ultrices, scelerisque tellus consectetur, laoreet eros. Ut eu odio eu ipsum tempor iaculis eget ut magna. '/>

          <Tarjeta
            nombre='Daniel D'
            pais='Colombia'
            imagen='aa'
            cargo='ingeniero de sistemas'
            empresa='UNAL'
            testimonio='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tellus tellus, hendrerit vitae blandit non, 
            finibus sed augue. Ut et purus non risus ultrices pharetra. Nunc vel augue ultrices, scelerisque tellus consectetur, laoreet eros. Ut eu odio eu ipsum tempor iaculis eget ut magna. '/>

          <Tarjeta
            nombre='Juan Felipe Bejarano'
            pais='Colombia'
            imagen='ab'
            cargo='ingeniero de sistemas'
            empresa='UNAL'
            testimonio='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tellus tellus, hendrerit vitae blandit non, 
            finibus sed augue. Ut et purus non risus ultrices pharetra. Nunc vel augue ultrices, scelerisque tellus consectetur, laoreet eros. Ut eu odio eu ipsum tempor iaculis eget ut magna. '/>

          <Tarjeta
            nombre='Daniel Galvis'
            pais='Colombia'
            imagen='ac'
            cargo='ingeniero de sistemas'
            empresa='UNAL'
            testimonio='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tellus tellus, hendrerit vitae blandit non, 
            finibus sed augue. Ut et purus non risus ultrices pharetra. Nunc vel augue ultrices, scelerisque tellus consectetur, laoreet eros. Ut eu odio eu ipsum tempor iaculis eget ut magna. '/>
*/
