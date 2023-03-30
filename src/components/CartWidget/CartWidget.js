import cart from './assets/cart.svg';
import styles from './assets/cart.module.css';

const CartWidget = () => {
    return (
        <div>
            <img className={styles.imagen} src={cart} alt="cart"/>
            0
        </div>
    )
}

export default CartWidget;
