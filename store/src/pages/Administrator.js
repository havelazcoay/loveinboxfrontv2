import React from 'react';
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import '../hojas-de-estilo/Administrator.css';

export const Administrator = () => {
    const [newProduct, setNewProduct] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newUnits, setNewUnits] = useState("");
    const [products, setProducts] = useState([]);
    const productsCollectionsRef = collection(db, "products");


    const deleteProduct = async (id) =>{
        const productDoc = doc(db, "products", id);
        await deleteDoc(productDoc);
        window.location.replace('');
    };

    const updateProduct = async (id, product, description, price, units) =>{
        const productDoc = doc(db, "products", id);
        await updateDoc(productDoc, {product:newProduct, description:newDescription, price:newPrice, units:newUnits});
    };

    const createProduct = async () =>{
        await addDoc(productsCollectionsRef, {product:newProduct, description:newDescription, price:newPrice, units:newUnits});
        window.location.replace('');
    };
    useEffect(() => {

        const getProducts = async () =>{
            const data = await getDocs(productsCollectionsRef);
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            console.log(data);
        }   

        getProducts()
    }, []);

    return(
        <div className="administrator-main">
            <input className="administrator-input"  placeholder="Product..."  onChange={(event) =>{setNewProduct(event.target.value);}}/>
            <input className="administrator-input"  placeholder="Description..."  onChange={(event) =>{setNewDescription(event.target.value);}}/>
            <input className="administrator-input"  placeholder="Price..."  onChange={(event) =>{setNewPrice(event.target.value);}}/>
            <input className="administrator-input"  placeholder="Units..."  onChange={(event) =>{setNewUnits(event.target.value);}}/>
            <button className="administrator-button"  onClick={createProduct}>CreateProduct</button>
            <h1></h1>
            {products.map((product) => {
                return <div>
                    {""}
                    <h1  className="administrator-h1">Product: {product.product}</h1>
                    <h1  className="administrator-h1">Description: {product.description}</h1>
                    <h1  className="administrator-h1">Price: {product.price}</h1>
                    <h1  className="administrator-h1">Units: {product.units}</h1>
                    <button className="administrator-button"  onClick={() =>{updateProduct(product.id, product.product, product.description, product.price, product.units);}}>UpdateProduct</button>
                    <button className="administrator-button"  onClick={() =>{deleteProduct(product.id);}}>DeleteProduct</button>
                    <h1></h1>
                </div>
         })}
        
        
        </div>
    )
}