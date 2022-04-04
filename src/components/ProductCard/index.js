import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'


import { 

  IconPro,
  IconPro2,
  ProductsCard,
  ProductsImg,

} from './ProductCardElements'


export default function ProductCard({ product }) {

  const {cartItem, addToCart, removeItem} = useContext(CartContext)

  


  function cartIcon(){

  const iAlreadyInCart = cartItem.some(p => p.id === product.id)

  if(iAlreadyInCart){

    return <IconPro onClick={() => removeItem(product.id)} />

  }else{

    return <IconPro2 onClick={() => addToCart(product)}/>

  }

}


  return (

    <ProductsCard> 
            
      <ProductsImg  src={ product.url } />
      
        {cartIcon()}
                
    </ProductsCard>  
    
  )
}


