import React from 'react'
import styles from '../ItemDetail/itemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
  return (
      
    <article className={styles.articles}>
        <header>
            <h2>{name}</h2>
        </header>
        <picture>
            <img className={styles.imageprops} src={img} alt={name}/>
        </picture>
        <section>
        <p className={styles.par}>
                Categoria: {category}
            </p>
            <p className={styles.par}>
                Precio: ${price}
            </p>
            <p className={styles.par}>
                Descripcion: {description}
            </p>
            <p className={styles.par}>
                Stock disponible: {stock}
            </p>
        </section>
        <footer>
        <ItemCount initial={0} stock={stock} onAdd={(quantity) => {console.log(`la cantidad es `, quantity)}} />
        </footer>
    </article>
  )

}

export default ItemDetail