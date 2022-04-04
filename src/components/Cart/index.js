import React, { useContext, useState } from 'react'
import CartContext from '../../context/cart/CartContext';
import formatCurrency from 'format-currency';
import CartItem from '../CartItem';
import {

    CartBtn, 
    CartBtnContainer, 
    CartIcon, 
    CartInnerWrapper, 
    CartTotal, 
    CartWrapper 

} from './CartElements';



export default function Cart(){

    const { showCart, cartItem, showHideCart, emptyCart } = useContext(CartContext)
    const [buttonText,setButtonText] = useState('Ordina')

    let opts = { format: '%s%v', symbol: '€'}

  

    function placeOrder(){

        setButtonText('Sto ordinando...')

        setTimeout( () =>{
            setButtonText('Ordina')
            emptyCart()
            
        }, 3000)
    }



return (
 <>
    { showCart && (

        <CartWrapper>
            <div style={{ textAlign: 'right'}}>
                <CartIcon  onClick={showHideCart}/>
            </div>

            <CartInnerWrapper>

             {cartItem.length === 0 ? (<h4>Il carrello è vuoto</h4>) : 

                ( 

                <ul>

                    {cartItem.map(item =>( <CartItem key={item.id} item={item}/>))}

                </ul>

                )}

            </CartInnerWrapper>

            <CartTotal>

                <div>Totale</div>

                <div></div>

                <div style={{marginLeft: 5}}>

                    {formatCurrency(cartItem.reduce((amount) => 5.99 + amount, 0), opts)}
                    
                </div>

            </CartTotal>

            {
              cartItem.length > 0 ?

                <CartBtnContainer>
                  <CartBtn onClick={placeOrder}>{buttonText}</CartBtn>
                </CartBtnContainer> : []
            }

        </CartWrapper>

    )}

 </>

  )

}
