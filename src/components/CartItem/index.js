import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext';
import formatCurrency from 'format-currency';
import { CartItemIcon, CartItemItem } from './CartItemElements';


export default function CartItem({ item }){

    const { removeItem } = useContext(CartContext)
    
    let opts = { format: '%s%v', symbol: '€'}

  return (
    <CartItemItem>
        <img src={item.url} alt=''/>
        <div>
            {formatCurrency( 5.99, opts)}
        </div>
        <CartItemIcon onClick={ () => removeItem(item.id)}>Rimuovi</CartItemIcon>
    </CartItemItem>
  )
}
