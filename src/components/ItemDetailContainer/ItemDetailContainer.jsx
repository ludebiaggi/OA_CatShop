import {useState , useEffect} from 'react'
import {getProductById} from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
         .then (response => {
            setProduct(response)
         })
         .catch (error => {
            console.error(error)
         })
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>

        </div>
    )
}

export default ItemDetailContainer

//En éste componente se obtienen los detalles de un producto por su ID utilizando una función asíncrona y el hook useParams, actualizando su estado mediante useState y useEffect, para luego mostrar los detalles del producto utilizando invocando al componente ItemDetail.