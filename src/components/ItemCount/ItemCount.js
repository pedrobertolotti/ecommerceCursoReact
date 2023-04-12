import styles from '../ItemCount/itemcount.module.css';
import React, { useState } from 'react';

const ItemCount=({stock, initial, onAdd}) => {

const [quantity, setQuantity]= useState(initial);

const add=() => {
    if (quantity<stock) {setQuantity(quantity + 1);}
}

const substract=() => {
    if (quantity>0) {setQuantity(quantity - 1);}
}

    return (
        <div>
            <button onClick={substract} className={styles.buttons}>-</button>
            <h3 className={styles.inline}>{quantity}</h3>
            <button onClick={add} className={styles.buttons}>+</button>
            <div>
            <button onClick={onAdd(quantity)} className="btn btn-warning margintop">    AGREGAR AL CARRITO </button>
            </div>
        </div>

    )
}

export default ItemCount