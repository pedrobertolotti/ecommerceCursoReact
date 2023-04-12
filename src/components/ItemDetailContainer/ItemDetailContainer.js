import { useState, useEffect } from "react";
import { getProductById } from "../asyncMock";
import styles from  '../ItemDetail/itemDetail.module.css';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct]= useState(null);

    useEffect(()=> {
        getProductById('1')
            .then(response =>{
                setProduct(response)
            })
            .catch(error=> {
                console.error(error)
            })
            }, [])  // uso vacios cuando solo lo quiero ejecutar una vey al cargar el componente por primera vey

  return (
    <div className={styles.itemdetailpop}>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer