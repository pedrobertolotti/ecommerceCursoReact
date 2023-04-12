import React from 'react'
import styles from  '../ItemList/itemlist.module.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <div className={styles.itemlist}>
        {products.map( prod => <Item key={prod.id} {...prod}/> )}
    </div>
  )
}

export default ItemList
