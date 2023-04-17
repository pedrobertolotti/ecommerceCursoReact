import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import styles from '../navbar/navbar.module.css';


const NavBar = () => {
    var cant = 0;
    return (
        <nav className={styles.background2}>
            <div className="row">
                <div className="col-6">
                    <Link to='/'>
                        <h1 className={styles.title}>SURF ECOMMERCE</h1>
                    </Link>
                </div>

                <div className="col-3">

                    <NavLink to={`category/tablas`} className={(({ isActive }) => isActive ? 'ActiveOption' : 'Option' ) + ' btn btn-success m-1'  } >Tablas </NavLink>
                    <NavLink to={`category/wetsuits`} className={(({ isActive }) => isActive ? 'ActiveOption' : 'Option') + ' btn btn-warning m-1'}>Wetsuits </NavLink>
                    <NavLink to={`category/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option' + ' btn btn-danger m-1'}>Accesorios </NavLink>
                </div>
                <div class="col-1 alright">
                    <CartWidget cantcart={cant} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar