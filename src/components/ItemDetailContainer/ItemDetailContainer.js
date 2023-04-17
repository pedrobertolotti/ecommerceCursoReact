import { useState, useEffect } from "react";
import { getProductById } from "../asyncMock";
import styles from  '../ItemDetail/itemDetail.module.css';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct]= useState(null);

    const {itemId} = useParams()

    useEffect(()=> {
        getProductById(itemId)
            .then(response =>{
                setProduct(response)
            })
            .catch(error=> {
                console.error(error)
            })
            }, [itemId])  // uso vacios cuando solo lo quiero ejecutar una vey al cargar el componente por primera vey

  return (
    <div className={styles.itemdetailpop}>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer