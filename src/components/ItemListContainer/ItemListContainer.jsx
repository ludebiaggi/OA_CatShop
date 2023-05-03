import { useState, useEffect} from "react"
import { getProducts, getProductsByCategory } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"

import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState ([]) 

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? () => getProductsByCategory(categoryId) : getProducts

        asyncFunc().then((response) => {
          setProducts(response)
        })

    }, [categoryId])

    return( 
        <div>
            <h1 className="greeting">{greeting}</h1>
            <br />
            <h5>Un sitio inspirado en Odin y Arya mis dos michis amados y malcriados!</h5>
            <img src="img/InspoOA.jpg" alt="Foto de los michis" />
            <ItemList products={products}/>
        </div>
    )
}


export default ItemListContainer


//Se define el componente ItemListContainer que será el contenedor del listado de productos.
//Se muestra el greeting .
//Se utiliza el hook useEffect para realizar una petición asíncrona a la función getProducts.
//Se incorpora el componente ItemList para que se renderice dentro del ItemListContainer.