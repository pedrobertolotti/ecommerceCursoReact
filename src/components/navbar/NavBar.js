import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav>
            <div>
                <button className="btn btn-primary">Celulares</button>
                <button className="btn btn-success">Tablets</button>
                <button className="btn btn-warning">Notebooks</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar