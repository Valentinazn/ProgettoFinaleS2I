import React from 'react'
import dataApi from '../../data'
import ProductCard from '../ProductCard'
import {  ProductsWrapper } from '../ProductCard/ProductCardElements'

export default function Home(){
  return (
    <>

 
        <ProductsWrapper>
              { dataApi.map(( product ) =>( <ProductCard key={ product.id } product={ product } /> )) }
        </ProductsWrapper>
    

  
    
    </>
  )
}
