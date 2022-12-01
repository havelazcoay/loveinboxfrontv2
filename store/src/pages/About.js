import React from "react";
import { Tarjeta } from "../components/Tarjeta";
import { TarjetaEmpresa } from "../components/TarjetaEmpresa";
import '../App.css'

export default function About() {
    return (
      <>
        <div style={{ textAlign: "center", fontSize: "xx-large" }}>
          <h1>LoveInBox about section</h1>
        </div>
        <div className="contenedor-principal">
          <TarjetaEmpresa
            nombre='Mission'
            imagen='mision'
            testimonio='Provide an e-Commerce service for gifts and personalized details, with the possibility of sending your own ideas and materializing them at a low cost, with a reach throughout the national territory. '/>
          <TarjetaEmpresa
            nombre='Visión'
            imagen='vision'
            testimonio='By the year 2024 Love-In-Box will be a company positioned in the national market, willing to attend to the suggestions of its buyers, with prices within the reach of the consumer and an effective and satisfactory customer service.'/>
        </div>
        <div style={{ textAlign: "center", display:"flex", fontSize: "xx-large", height:"70px", flex: "wrap", justifyContent:"space-around", alignContent:"space-around", flexWrap:"wrap"}}>
          <h1>Our Developers</h1>
        </div>
        <div className="About">
            <div className="contenedor-principal">
              <Tarjeta
                nombre='Harold Velazco'
                pais='Colombia'
                imagen='harold2'
                cargo='Systems engineering student'
                empresa='UNAL'
                testimonio='Systems engineering student at the National University of Colombia, creator of the front end of the Love In Box e-store project'/>

              <Tarjeta
                nombre='Daniel Delgadillo'
                pais='Colombia'
                imagen='delgadillo'
                cargo='Systems engineering student'
                empresa='UNAL'
                testimonio='Systems engineering student at the National University of Colombia, creator of the front end of the Love In Box e-store project'/>

              <Tarjeta
                nombre='Juan Felipe Bejarano'
                pais='Colombia'
                imagen='ab'
                cargo='Systems engineering student'
                empresa='UNAL'
                testimonio='Systems engineer student. In charge of the database and application deployment'/>

              <Tarjeta
                nombre='Daniel Galvis'
                pais='Colombia'
                imagen='empty'
                cargo='ingeniero de sistemas'
                empresa='UNAL'
                testimonio='Systems engineer student. In charge of the database and application deployment'/>

            </div>
        </div>
        
      </>
    )
  }