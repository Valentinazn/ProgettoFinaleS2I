import React, { useContext, useState } from 'react'
import CartContext from '../../context/cart/CartContext'


import { 

  IconPro,
  IconPro2,
  ProductsCard,
  ProductsImg,

} from './ProductCardElements'


export default function ProductCard({ product }) {

  const {cartItem, addToCart, removeItem} = useContext(CartContext)

  const [isHover, setIsHover] = useState(false)
  

  const addIcon = () =>{

   setIsHover(true)

  }

  const removeIcon = () =>{

    setIsHover(false)

  }


  function cartIcon(){

  const iAlreadyInCart = cartItem.some(p => p.id === product.id)

  if(iAlreadyInCart){

    return <IconPro onClick={() => removeItem(product.id)} isHover={isHover}/>

  }else{

    return <IconPro2 onClick={() => addToCart(product)}   isHover={isHover}/>

  }

}


  return (

    <ProductsCard onMouseEnter={addIcon} onMouseLeave={removeIcon}>
            
      <ProductsImg  src={ product.url } />
      
        {cartIcon()}
                
    </ProductsCard>  
    
  )
}


