import React from 'react';
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import '../hojas-de-estilo/User.css';
import {Modal, TextField, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles=makeStyles((theme)=>({
    modal:{
        position: 'absolute',
        width: 400,
        backgroundcolor: '  white',
        border: '2px solid #000',
        boxshadow: theme.shadows[5],
        // padding: theme. spacing (2,4, 3),
        padding:"16px 32px 24px",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    textfield:{
        width: '100%'
    },
    button:{
        textAlign: 'center'
    }
}))


export const Prueba = () => {


    const styles=useStyles();
    const [modal, setModal]=useState(false);
    const abrirCerrarModal =()=>{
    setModal(!modal);
    }

    
    const body=(
        <div className={styles.modal}>
            <div align="center">
                <h2>Formulario</h2>
            </div>
            <TextField label="Nombre" classame={styles. textfield}/>
            <br />
            <TextField label="Apellidos" classame={styles. textfield}/>
            <br />
            <TextField label="Correo Electrónico" classame={styles. textfield}/>
            <br /> <br />
            <div align="right">
            <Button color="primary">Enviar</Button>
            <Button onClick={ ()=>abrirCerrarModal()}>Cancelar</Button>
            </div>
        </div>
    )


    return(
        <div className="user-main">
            <Button className={styles.button} onClick={()=>abrirCerrarModal()}>Abrir Modal</Button>
            <Modal open={modal} onclose={abrirCerrarModal}>
                {body}
            </Modal>
        </div>
    )
}