import React from "react";
import { Tarjeta } from "../components/Tarjeta";
import '../App.css'

export default function About() {
    return (
      <>
        <div className="About">
            <div className="contenedor-principal">
              <Tarjeta
                nombre='Harold Velazco'
                pais='Colombia'
                imagen='harold'
                cargo='ingeniero de sistemas'
                empresa='UNAL'
                testimonio='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis tellus tellus, hendrerit vitae blandit non, 
                finibus sed augue. Ut et purus non risus ultrices pharetra. Nunc vel augue ultrices, scelerisque tellus consectetur, laoreet eros. Ut eu odio eu ipsum tempor iaculis eget ut magna. '/>

              <Tarjeta
                nombre='Daniel Delgadillo'
                pais='Colombia'
                imagen='aa'
                cargo='ingeniero de sistemas'
                empresa='UNAL'
                testimonio='Estudiante de ingeniería de sistemas en universidad nacional de colombia creador del front end utilizado para este proyecto. '/>

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

            </div>
        </div>
        
      </>
    )
  }