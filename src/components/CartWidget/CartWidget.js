import cart from './assets/cart.svg';
import styles from './assets/cart.module.css';

const CartWidget = ({cantcart}) => {
    return (
        <div>
            <img className={styles.imagen} src={cart} alt="cart"/>
             <h3 style={{ display: "inline-block",  margin: "15px" }}>=> {cantcart}</h3>
        </div>
    )
}

export default CartWidget;
