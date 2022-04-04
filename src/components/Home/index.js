import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ProductCard from '../ProductCard'
import {  ProductsWrapper } from '../ProductCard/ProductCardElements'

export default function Home(){

  const [ fetchData, setFetchData] = useState([])

  useEffect(() =>{
    getData()
  },[])

  const getData = async () =>{

    try{
      const res = await axios.get("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
      setFetchData(res.data)
    }catch(err){
      alert(err.message)
    }
  }

  return (
    <>

 
        <ProductsWrapper>
              { fetchData.map(( product ) =>( <ProductCard key={ product.id } product={ product } /> )) }
        </ProductsWrapper>
    

  
    
    </>
  )
}
