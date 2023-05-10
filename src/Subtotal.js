import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import { useNavigate } from 'react-router-dom';


function Subtotal() {
  const [{cart}, dispatch] = useStateValue();
  const history = useNavigate();
  return (
    <div className='subtotal'>

        <CurrencyFormat 
          renderText={(value)=>(
            <>
              <p>
                Subtotal ({cart.length} Items): <strong>{value}</strong>
              </p>
              <small className="subtotal-gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          )} 
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        <button onClick={e => history('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal