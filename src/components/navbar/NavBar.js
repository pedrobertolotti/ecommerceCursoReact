import CartWidget from '../CartWidget/CartWidget';
import styles from '../navbar/navbar.module.css';

const NavBar = () => {
    var cant=0;
    return (
        <nav className={styles.background2}>
            <div class="row">
            <div class="col-3">
                <button className="btn btn-primary">Tablas </button>
                <button className="btn btn-success">Wetsuits </button>
                <button className="btn btn-warning">Accesorios </button>
            </div>
            <div class="col-6">
                <h1 className={styles.title}>SURF ECOMMERCE</h1>
            </div>
            <div class="col-1 alright">
            <CartWidget cantcart={cant} />
            </div>
            </div>
        </nav>
    )
}

export default NavBar