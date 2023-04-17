import styles from '../ItemListContainer/itemlistcontainer.module.css';
import React, { useState, useEffect } from 'react';
import { getProducts, getProductsbyCategory } from '../asyncMock';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const[products, setProducts] = useState([])

    const {categoryId} = useParams()  

    useEffect(()=> {
   
      const async = categoryId ? getProductsbyCategory(categoryId) : getProducts();
      
      async
         .then(response => { 
            setProducts(response)
         })
         .catch(error => {
            console.error(error)
         } ) 
    } , [categoryId])

 return (
    <div className={styles.background1}>
        <h1 className={styles.margentop}> Productos </h1>
        {products ? <ItemList products={products}/> : <h3>Cargando...</h3>}
    </div>
 )
}

export default ItemListContainer;