import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>OA CatShop</h3>
            <div>
                <button>Alimentos y snacks</button>
                <button>Juguetes</button>
                <button>Cat Gyms</button>
                <button>Accesorios</button>
                <button>Higiene</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar