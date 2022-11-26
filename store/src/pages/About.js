import React from "react";
import { Tarjeta } from "../components/Tarjeta";
import { TarjetaEmpresa } from "../components/TarjetaEmpresa";
import '../App.css'

export default function About() {
    return (
      <>
        <div className="contenedor-principal">
          <h1>LoveInBox</h1>
        </div>
        <div className="contenedor-principal">
          <TarjetaEmpresa
            nombre='Misión'
            imagen='mision'
            testimonio='Brindar un servicio e-Commerce de regalos y detalles personalizados, con posibilidad de enviar tus propias ideas y materializarlas a un bajo costo, con alcance en todo el territorio nacional. '/>
          <TarjetaEmpresa
            nombre='Visión'
            imagen='vision'
            testimonio='Para el año 2024 Love-In-Box será una empresa posicionada en el mercado nacional, dispuesta a atender las sugerencias de sus compradores, con precios al alcance del consumidor y un servicio al cliente efectivo y satisfactorio. '/>
        </div>
        <div className="contenedor-principal">
          <h1>Developers</h1>
        </div>
        <div className="About">
            <div className="contenedor-principal">
              <Tarjeta
                nombre='Harold Velazco'
                pais='Colombia'
                imagen='harold2'
                cargo='ingeniero de sistemas'
                empresa='UNAL'
                testimonio='Estudiante de ingenieria de sistemas en la universidad nacional de colombia, creador del front end del proyecto e-store Love In Box'/>

              <Tarjeta
                nombre='Daniel Delgadillo'
                pais='Colombia'
                imagen='delgadillo'
                cargo='ingeniero de sistemas'
                empresa='UNAL'
                testimonio='Estudiante de Ingeniería de Sistemas en Universidad Nacional de Colombia, creador del front end utilizado para este proyecto. '/>

              <Tarjeta
                nombre='Juan Felipe Bejarano'
                pais='Colombia'
                imagen='ab'
                cargo='Ingeniero de Sistemas'
                empresa='UNAL'
                testimonio='Estudiante de Ingeniería de Sistemas. Encragado de la base de datos y el despliegue de la aplicación'/>

              <Tarjeta
                nombre='Daniel Galvis'
                pais='Colombia'
                imagen='ac'
                cargo='ingeniero de sistemas'
                empresa='UNAL'
                testimonio='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tellus tellus, hendrerit vitae blandit non, 
                finibus sed augue. Ut et purus non risus ultrices pharetra. Nunc vel augue ultrices, scelerisque tellus consectetur, laoreet eros. Ut eu odio eu ipsum tempor iaculis eget ut magna. '/>

            </div>
        </div>
        
      </>
    )
  }