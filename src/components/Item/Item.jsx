
const Item = ({id, name, img, price, stock}) =>{
    return(
        <article className="CardItem"> 

        <header className="Header">
            <h2 className="IteamHeader" id="cardTitle"> {name}</h2>
        </header>

        <picture>
            <img src={img} alt={name} className="ItemImage"/>
        </picture>

        <section>
            <p className="Info"> Precio ${price}</p>
            <p className="Info"> Stock Disponible {stock}</p>

        </section>
        <footer className="ItemFooter">
            <button className="Option">Ver Detalle</button>
        </footer>

        </article>
    )
}

export default Item


//Se genera el componente que va a armar las distintas cards con la información de los productos.