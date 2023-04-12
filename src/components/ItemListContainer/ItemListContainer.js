import styles from '../ItemListContainer/itemlistcontainer.module.css';
import React, { useState, useEffect } from 'react';
import { getProducts } from '../asyncMock';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

    const[products, setProducts] = useState([])

    useEffect(()=> {
        getProducts()
         .then(response => { 
            setProducts(response)
         })
         .catch(error => {
            console.error(error)
         } ) 
    } , [])

 return (
    < div className={styles.background1}>
        <h1 className={styles.margentop}> {greeting} </h1>
        <ItemList products={products}/>  
    </div>
 )
}

export default ItemListContainer;