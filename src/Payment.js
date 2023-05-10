import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { useStateValue } from './StateProvider'
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from './axios';


function Payment() {
  const [{cart, user}, dispatch] = useStateValue();
  const history = useNavigate();

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(()=>{
    const getClientSecret = async () =>{
      const response = await axios({
        method: 'post',
        url:`/payments/create?total=${getCartTotal(cart) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  },[cart])


  const handleSubmit = async(event) =>{
    event.preventDefault();
    setProcessing(true);

     const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method:{
        card: elements.getElement(CardElement)
      }
     }).then(({paymentIntent}) =>{
      //paymentIntent = payment confirmation

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      history.replace('/orders');
     })
  }

  const handleChange = event =>{
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }
  return (
   
    <div className='payment'>
        <div className='payment-container'>
          <h1>
            Checkout {<Link to="/checkout">{cart?.length} items</Link>}
          </h1>
            <div className='payment-section'>
              <div className='payment-title'>
                <h3>Delivery Address</h3>
              </div>
              <div className='payment-address'>
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Los Angeles, CA</p>
              </div>
            </div>

            <div className='payment-section'>
                <div className='payment-title'>
                  <h3>Review items and delivery</h3>
                </div>
                <div className='payment-items'>
                  {cart.map(item => (
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                  ))}
                </div>
            </div>

            <div className='payment-section'>
                    <h3>Payment Method</h3>
                    <div className='payment-details'>
                        <form onSubmit={handleSubmit}>
                          <CardElement onChange={handleChange} />

                          <div className='payment-priceContainer'>
                              <CurrencyFormat
                                renderText={(value) =>(
                                  <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                              />
                              <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                              </button>
                          </div>
                          {/*Errors*/}
                          {error && <div>{error}</div>}
                        </form>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Payment