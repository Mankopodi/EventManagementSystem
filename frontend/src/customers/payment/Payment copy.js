import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
 const stripePromise =  loadStripe('pk_test_51MSK1MLpjR87MOAVm87sFsMyZZcRT3cZ6knlMp8KxylPArY3yqnlETAiIwpXEHr3mBVaJW5nVEfWaM5ZSqEZjynU00iMzdnpJV');
function Payment() {
  const [stripePromises, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
  //   fetch("/config").then(async (r) => {
  //     const { publishableKey } = await r.json();
    
  //   });
  // }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setStripePromise(stripePromise)
      setClientSecret(clientSecret);
      console.log(clientSecret)
    });
  }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromises} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;