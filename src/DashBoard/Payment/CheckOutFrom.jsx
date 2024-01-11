import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from '../../Hooks/UseAxiosSecure'
import useCart from '../../Hooks/UseCarts'
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckOutFrom = () => {
    const [error , setError] = useState('');
    const [clientSecret, setCilentSecret] = useState('');
    const {user} = UseAuth();
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, item) => total + item.price , 0)

    useEffect(() =>{
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then(res =>{
            console.log(res.data.clientSecret);
            setCilentSecret(res.data.clientSecret);
        })
        } 
    }, [axiosSecure, totalPrice])

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error', error);
            setError(error.message)
        }
        else{
            console.log('payment method', paymentMethod)
            setError('');
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status ===  'succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id)

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    data: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'pending',

                }

                const res = await axiosSecure.post('/payments',payment);
                navigate('/dashboard/paymentHistory')
                console.log('payment save', res.data);
                refetch();
                if(res.data.paymentResult?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Payment Has been successful",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      
                }
               
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
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
    <button className="mt-5 bg-amber-700 px-3 py-2 text-white rounded-lg ml-2"  type="submit" disabled={!stripe || !clientSecret}>
        Pay
    </button>
    <p className="text-red-500">{error}</p>
    {transactionId && <p className="text-green-500">Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckOutFrom;