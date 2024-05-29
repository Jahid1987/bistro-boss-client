import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axioSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const [transectionId, setTransectionId] = useState("");

  // calculating total price
  const [cart] = useCart();
  const price = cart.reduce((sum, item) => sum + item.price, 0);

  // getting client secrete from the backend
  useEffect(() => {
    axioSecure
      .post("/payment", { price })
      .then((data) => setClientSecret(data.data.clientSecret))
      .catch((err) => {
        console.log(err);
      });
  }, [axioSecure, price]);

  // handling payment
  async function handlePayment(e) {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // making payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment method error", error);
      setError(error.message);
    } else {
      setError("");
      console.log("payment method ok ", paymentMethod);
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "unknown",
          },
        },
      });

    if (confirmError) {
      console.log("payment confirmation error ", confirmError);
    } else {
      console.log(" paymentIntent confirmed here", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransectionId(paymentIntent.id);
        console.log("transaction id", paymentIntent.id);
      }
    }
  }
  return (
    <div className=" mx-10 bg-base-200 p-5 ">
      <form onSubmit={handlePayment}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "14px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="mt-10 grid place-content-center">
          <button
            disabled={!stripe || !clientSecret}
            type="submit"
            className="btn btn-sm md:btn-md btn-primary w-56 "
          >
            Pay
          </button>
          <p className="text-red-500 mt-2">{error}</p>
          <p className="text-green-500 mt-2">ID: {transectionId}</p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
