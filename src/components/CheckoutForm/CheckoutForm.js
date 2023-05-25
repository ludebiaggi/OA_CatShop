import '../../App.css'
import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email, confirmEmail
        }

        onConfirm(userData)
    }

    return (
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                    <input
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className='Label'>
                    Teléfono de contacto
                    <input
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className='Label'>
                    Correo Electrónico
                    <input
                        className='Input'
                        type='text'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <label className='Label'>
                    Re-ingresá tu correo electrónico
                    <input
                        className='Input'
                        type='text'
                        value={confirmEmail}
                        onChange={({ target }) => setConfirmEmail(target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type='submit' className='ButtonCheckOut'>Crear orden</button>

                </div>

            </form>

        </div>
    )
}

export default CheckoutForm
