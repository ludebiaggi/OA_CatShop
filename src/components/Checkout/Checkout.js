import '../../App.css'
import { useState, useContext } from 'react'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { CartContext } from '../../context/CartContext'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email, confirmEmail }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email, confirmEmail
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if (loading) {
        return <h1>Tu orden de compra se está generando...</h1>
    }

    if (orderId) {
        return <h1>El ID de tu orden es: {orderId} </h1>
    }

    return (
        <div>
            <h3>Checkout</h3>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout
