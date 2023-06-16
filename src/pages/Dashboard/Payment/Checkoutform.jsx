import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosProtected from '../../../hooks/useAxiosProtected';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Checkoutform = ({ price, cartclasses }) => {
    console.log(cartclasses)
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useContext(AuthContext)
    const [axiosProtect] = useAxiosProtected()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("")
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosProtect.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.clientSecret)
                })
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message)

        }
        else {

            setCardError('')
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.dispayName || 'anonymous',
                    },
                },
            },
        );
        if (confirmError) {

        }

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date().toISOString().substr(0, 10),
                status: 'servicepending',
                quantity: cartclasses?.length,
                classId : cartclasses?.map(selectedclass => selectedclass.classId),
                selectedclasses: cartclasses?.map(selectedclass => selectedclass._id),
                selectedclassesname: cartclasses?.map(selectedclass => selectedclass.classname)
            }
            console.log(payment)
            axiosProtect.post('/payments', payment)
                .then(res => {

                    if (res.insertResult.insertedId) {
                        Swal.fire({
                            position: 'middle',
                            icon: 'success',
                            title: 'Your Payment is done',
                            showConfirmButton: false,
                            timer: 2500

                        })
                    }
                })
        }
    }
    return (
        <>
            <form className='w-2/3 m-16' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center mt-8'>
                    <button className='btn btn-success w-fit' type="submit" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
            {/* {transactionId && <p className='text-green-500'>Transaction Complete with transactionId : {transactionId}</p>} */}
        </>
    );
};

export default Checkoutform;