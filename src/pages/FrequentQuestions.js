import React, { Component } from 'react';
import Category from "./Category";
import '../hojas-de-estilo/PreguntasFrecuentes.css';

class FrequentQuestions extends Component {
    render(){
        return(
            <div className= "PreguntasFrecuentes">
                <ul>
                <Category name= "Sobre nosotros" items ={[
                "¿A quién va dirigida la página?", "Primero al cliente, luego y más importante a todos los usuarios que quieran adquirir alguno de los productos ofertados.",
                "¿Cuál es el propósito de la página?", "La página es una solución informática para un emprendimiento dedicado a la venta de productos personalizados.",
                "¿Qué diferencia a tu negocio del resto?", "Precios competitivos, envíos inmediatos y una interfaz amigable, fluida e intuitiva.",
                "¿Tu empresa tiene algún esquema de color definido?", "Usamos tonos azules de fondo, colores pastel afines a este esquema azul-blanco.",
                "¿Quién estará involucrado en el proyecto?", "El proyecto está siendo desarrollado por el grupo 9 llamado “Love In Box” somos 4 integrantes cada uno encargado de un área del proyecto: front end, back end, base de datos y el líder de proyecto o scrum máster.",
                "¿Cómo es el funcionamiento de la página?", "La página cuenta con una página principal que da la bienvenida al usuario y expone el negocio, otra página para la tienda donde se encontrarán los productos y contará con búsqueda y filtros. Se contará con un sistema de Login y cuentas y tendrá maneras de comunicarse con un vendedor mediante correo o un botón que llevará al contacto mediante WhatsApp.",
                "¿Los usuarios podrán acceder a algún tipo de información de otro usuario?", "No, los usuarios no tendrán ningún tipo de interacción entre ellos.",
                "¿Cómo se mantendrá en funcionamiento la página?"," Las ventas deben proporcionar el sustento económico para mantener en funcionamiento la página, la página debe ",
                "¿La página genera algún tipo de documento?", "Los datos generados al hacer una compra deben ser almacenados en la base de datos. Al momento de realizar una compra los datos de la compra y del cliente deben generar una factura en formato png la cual será enviada al correo vinculado a la cuenta que realiza la compra."
                ]}/>
                <Category name= "Métodos de pago" items= {["En Proceso"]}/>
                <Category name= "Entregas" items= {["En Proceso"]}/>
                <Category name= "Seguridad" items= {["En Proceso"]}/>
                <Category name= "Cuenta" items= {["En Proceso"]}/>
                </ul>
            </div>
        );
        }
    }
export default FrequentQuestions;