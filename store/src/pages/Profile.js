import React from 'react';
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import '../hojas-de-estilo/Profile.css';


export const Profile = () => {


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
        <div className="profile-main">
            <input className="profile-input"  placeholder="Name..."  onChange={(event) =>{setNewName(event.target.value);}}/>
            <input className="profile-input"  placeholder="Surname..."  onChange={(event) =>{setNewSurname(event.target.value);}}/>
            <input className="profile-input"  placeholder="E-Mail..."  onChange={(event) =>{setNewEmail(event.target.value);}}/>
            <input className="profile-input"  placeholder="Address..."  onChange={(event) =>{setNewAddress(event.target.value);}}/>
            <button className="profile-button-input"  onClick={createUser}>Create User</button>
            <h1></h1>
            {users.map((user) => {
                return <div>
                    {""}
                    <h1  className="profile-h1">Name: {user.name}</h1>
                    <h1  className="profile-h1">Surname: {user.surname}</h1>
                    <h1  className="profile-h1">E-Mail: {user.email}</h1>
                    <h1  className="profile-h1">Address: {user.address}</h1>
                    <button className="profile-button-h1"  onClick={() =>{updateUser(user.id, user.name, user.surname, user.email, user.address);}}>Update User</button>
                    <button className="profile-button-h1"  onClick={() =>{deleteUser(user.id);}}>Delete User</button>
                    <h1></h1>
                </div>
            })}
        </div>
    )
}