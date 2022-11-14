import React from 'react';
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import '../hojas-de-estilo/User.css';


export const User = () => {


    const [newName, setNewName] = useState("");
    const [newSurname, setNewSurname] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [users, setUsers] = useState([]);
    const usersCollectionsRef = collection(db, "users");


    const deleteUser = async (id) =>{
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
        window.location.replace('');
    };

    const updateUser = async (id, name, surname, email, address) =>{
        const userDoc = doc(db, "users", id);
        await updateDoc(userDoc, {name:newName, surname:newSurname, email:newEmail, address:newAddress});
    };

    const createUser = async () =>{
        await addDoc(usersCollectionsRef, {name:newName, surname:newSurname, email:newEmail, address:newAddress});
        window.location.replace('');
    };
    useEffect(() => {

        const getUsers = async () =>{
            const data = await getDocs(usersCollectionsRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log(data);
        }   

        getUsers()
    }, []);

    return(
        <div className="user-main">
            <input className="user-input"  placeholder="Name..."  onChange={(event) =>{setNewName(event.target.value);}}/>
            <input className="user-input"  placeholder="Surname..."  onChange={(event) =>{setNewSurname(event.target.value);}}/>
            <input className="user-input"  placeholder="E-Mail..."  onChange={(event) =>{setNewEmail(event.target.value);}}/>
            <input className="user-input"  placeholder="Address..."  onChange={(event) =>{setNewAddress(event.target.value);}}/>
            <button className="user-button-input"  onClick={createUser}>Create User</button>
            <h1></h1>
            {users.map((user) => {
                return <div>
                    {""}
                    <h1  className="user-h1">Name: {user.name}</h1>
                    <h1  className="user-h1">Surname: {user.surname}</h1>
                    <h1  className="user-h1">E-Mail: {user.email}</h1>
                    <h1  className="user-h1">Address: {user.address}</h1>
                    <button className="user-button-h1"  onClick={() =>{updateUser(user.id, user.name, user.surname, user.email, user.address);}}>Update User</button>
                    <button className="user-button-h1"  onClick={() =>{deleteUser(user.id);}}>Delete User</button>
                    <h1></h1>
                </div>
            })}
        </div>
    )
}