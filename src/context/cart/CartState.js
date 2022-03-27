import { useReducer, useEffect } from "react";
import CartContext from './CartContext'
import CartReducers from './CartReducers'

import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, EMPTY_CARD } from '../Types'



export default function CartState({ children }){



    const initialState = {

        showCart: false,
        cartItem:  localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [],
       
    }

 
    const [ state, dispatch ] = useReducer( CartReducers, initialState)

     

      useEffect( ()=>{

        localStorage.setItem( 'cartItem', JSON.stringify(state.cartItem))

      },[state])
      

    const addToCart = (item)=> {

        dispatch({ 

            type: ADD_TO_CART,
            payload: item

        })
    }


    const showHideCart = () =>{

        dispatch({ type: SHOW_HIDE_CART })

    }


    const removeItem = (id) =>{

         dispatch({ 
             
            type: REMOVE_ITEM,
            payload: id

         })
    }

    const emptyCart = () =>{

      dispatch({ type: EMPTY_CARD})
    }

 
   


  return(

      <CartContext.Provider

        value={{

          showCart: state.showCart,
          cartItem: state.cartItem,
          addToCart,
          showHideCart,
          removeItem,
          emptyCart
         

        }}>

          {children}
          
      </CartContext.Provider>

    )

}
