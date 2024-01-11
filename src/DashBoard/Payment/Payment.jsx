import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";


// todo
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    return (
        <div>
            <SectionTitle heading='Payment' subHeading='Please payment and Confirm Your order'></SectionTitle>
        <div>
            <Elements stripe={stripePromise}>
            <CheckOutFrom></CheckOutFrom>
            </Elements>
        </div>
        </div>
    );
};

export default Payment;