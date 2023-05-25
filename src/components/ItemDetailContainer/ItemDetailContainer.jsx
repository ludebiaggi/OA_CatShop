import {useState , useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = {id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
   
    }, [itemId])

    if (loading) {
        return <div>Cargando...</div>
    }

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product}/>

        </div>
    )
}

export default ItemDetailContainer

//En éste componente se obtienen los detalles de un producto por su ID utilizando una función asíncrona y el hook useParams, actualizando su estado mediante useState y useEffect, para luego mostrar los detalles del producto utilizando invocando al componente ItemDetail.