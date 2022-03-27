import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, EMPTY_CARD } from '../Types'

export default function CartReducer( state, action){

    switch (action.type) {
        case SHOW_HIDE_CART:{

            return{
                ...state,
                showCart: !state.showCart
            }
             
        }

        case ADD_TO_CART:{

            return{
                ...state,
                cartItem: [...state.cartItem, action.payload]
            }

           
        }

          case REMOVE_ITEM:{

            return{
                ...state,
                cartItem: state.cartItem.filter( item => item.id !== action.payload )
            }

        }

        case EMPTY_CARD:{

                return{
                    cartItem: []
                }
            }
    
        default:
            
          return state
    }


}