import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/cart/CartContext';
import { animateScroll as scroll } from 'react-scroll/modules';


import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavRight,
    NavCartIcon,
    ItemCount,
    ItemCountSpan
 
 } from './NavbarElements';



export default function Navbar(){

    const { cartItem, showHideCart} = useContext(CartContext)

    const [ scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {

        if(window.scrollY >= 80 ){
          
            setScrollNav(true)
        }else{

            setScrollNav(false)
        }
    }

 
    useEffect( () =>{
      
        window.addEventListener( 'scroll', changeNav )

    },[])


    const toggleHome = () =>{

        scroll.scrollToTop();
    }


    return(
       
     <>
        <Nav scrollNav={scrollNav}>

            <NavbarContainer>

                <NavLogo to='/' onClick={toggleHome}>ElkHorn</NavLogo>

                <NavRight>

                   <NavCartIcon  onClick={showHideCart}/>
                   
                   {
                    cartItem.length > 0 && 

                     <ItemCount>
                        <ItemCountSpan>{cartItem.length}</ItemCountSpan>
                     </ItemCount>

                   }
                    
                </NavRight>
               
            </NavbarContainer>

        </Nav>

     </>
        
    )
}

