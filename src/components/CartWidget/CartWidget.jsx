import cart from "./assets/cart.svg"

const CartWidget = () =>{
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <img src={cart} alt="cart-widget"/>
            <p>0</p>
        </div>
    )
}


export default CartWidget