import "../../App.css"
import Item from "../Item/Item"



const ItemList = ({products}) =>{
    return (
        <div className="ListGroup">
            {products.map(prod => <Item key={prod.id}{...prod}/>)}
        </div>
    )
}

export default ItemList

//Se genera el componete ItemList para que tome el objeto products como parámetro.
//Se utiliza el método map en el array de products para iterar sobre cada producto y renderizar un componete item para cada uno
//Se utiliza La sintaxis {...prod} para pasar todas las propiedades de cada producto como props individuales hacia el componente Item