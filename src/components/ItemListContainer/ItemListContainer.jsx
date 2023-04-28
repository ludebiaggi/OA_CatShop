import { useState, useEffect} from "react"
import { getProducts } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState ([]) 

    useEffect(() => {
        getProducts() 
        .then(response => {setProducts (response)
        })
        .catch (error =>{
            console.error(error)
        })

    }, [])

    return( 
        <div>
            <h1 className="greeting">{greeting}</h1>
            <br />
            <h5>Un sitio inspirado en Odin y Arya mis dos michis amados y malcriados!</h5>
            <img src="img/InspoOA.jpg" alt="" />
            <ItemList products={products}/>
        </div>
    )
}


export default ItemListContainer


//Se define el componente ItemListContainer que será el contenedor del listado de productos.
//Se muestra el greeting .
//Se utiliza el hook useEffect para realizar una petición asíncrona a la función getProducts.
//Se incorpora el componente ItemList para que se renderice dentro del ItemListContainer.