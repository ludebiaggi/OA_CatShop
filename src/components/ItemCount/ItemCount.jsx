import {useState} from 'react'
import '../../App.css'


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)  //Estado que almacena la cantidad del contador

    const increment = () =>{    //Función de incrementar
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {  //Función para quitar ítems
        if (quantity > 0) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='Button' onClick={increment}>+</button>
            </div>
            <div>
                <button className='ButtonAdd' onClick={() => onAdd(quantity)} disabled={!stock}> Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount