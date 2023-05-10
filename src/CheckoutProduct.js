import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{cart}, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    }
  return (
    <div className='checkoutproduct'>
        <img className='checkout-product-image' src={image} />

        <div className='checkout-product-info'>
            <p className='checkout-product-title'>{title}</p>
            <p className='checkout-product-price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkout-product-rating'>
                {Array(rating)
                .fill()
                .map((_, i)=>(
                    <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct