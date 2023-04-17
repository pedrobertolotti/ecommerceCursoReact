import React from 'react'
import styles from '../Item/item.module.css'
import { Link } from 'react-router-dom'

export const Item = ({id, category, name, img, price, stock}) => {
  return (
    
    <article className={styles.articles}>
        <header>
            <h2>{name}</h2>
        </header>
        <picture>
            <img className={styles.imageprops} src={img} alt={name}/>
        </picture>
        <section>
            <p>
                Precio: ${price}
            </p>
            <p>
                Stock disponible: {stock} 
            </p>
            
        </section>
        <footer>
            <Link to={`/item/${id}`} className='option'> Ver Detalle </Link>
        </footer>
    </article>
  )
}

export default Item 