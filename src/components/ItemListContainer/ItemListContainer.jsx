import '../../App.css'
import { useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams, useLocation } from 'react-router-dom'

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState ([]) 
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    const location = useLocation()

    const isRoot = location.pathname === '/'

    useEffect(() => {

      setLoading(true)

      const collectionRef = categoryId
         ? query(collection(db, 'products'), where('category', '==', categoryId))
         : collection(db, 'products')

      getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
              const data = doc.data()
              return {id: doc.id, ...data}
            })
          setProducts(productsAdapted)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
        })

    }, [categoryId])

    if (loading) {
      return <div>Cargando...</div>
    }


    return( 
        <div>
            { isRoot ? (
              <>
                <h1 className="greeting">{greeting}</h1>
                <br />
                <h5 id="greetingHome">Un sitio inspirado en Odin y Arya mis dos michis amados y malcriados!</h5>
                <section id="SectionHome">
                    <img src="img/odincat.jpeg" alt="Odín" />
                    <img src="img/blackcat.jpg" alt="Gatito negro" />
                    <img src="img/Aryacat.jpeg" alt="Arya" />
                    <img src="img/whitecat.jpg" alt="Gatito blanco" />
                    <img src="img/lunacat.jpeg" alt="Luna" />
                    <img src="img/tricolorcat.jpg" alt="Gatita tricolor" />

                </section>
              </>
            ) : null }
            <ItemList products={products}/>
        </div>
    )
}


export default ItemListContainer


//Se define el componente ItemListContainer que será el contenedor del listado de productos.
//Se utiliza el hook useEffect para realizar una petición asíncrona a la función getProducts.
//Se incorpora el componente ItemList para que se renderice dentro del ItemListContainer.
//Se genera una variable booleana que inicialice como true si la aplicación se encuentra en '/' o false caso contrario.
//Se utiliza el hook useLocation para renderizar el contenido del greeting, unicamente si la aplicación se encuentra en su Home '/'