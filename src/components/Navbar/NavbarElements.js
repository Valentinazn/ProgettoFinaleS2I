import styled from 'styled-components'
import { BsCartFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'




export const Nav = styled.nav `

background: var(--clr-secondary-2);
height: ${ ({ scrollNav }) => ( scrollNav ? '60px' : '80px') };
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
transition: 0.2s ease-in-out;
-webkit-box-shadow: inset 0px -1px 0px #f3f3f4;
    box-shadow: inset 0px -1px 0px #f3f3f4;



@media  (max-width: 968px){
    transition: 0.8 all ease; 
}

`


export const NavbarContainer = styled.div`

height: 80px;
display: flex;
justify-content: space-between;
padding: 0 20px;
z-index: 1;
width: 100%;
max-width: 1100px;


`

export const NavLogo = styled(Link)`

color: var(--clr-logo);
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left:24px;
font-weight: bold;
text-decoration: none;


`




export const NavRight = styled.nav`

display: flex;
align-items: center;
position: relative;


`

export const NavCartIcon = styled(BsCartFill)`


color: var(--clr-secondary-1);
font-size: 25px;
cursor: pointer;

`

export const ItemCount = styled.div`

  position: absolute;
  display: grid;
  place-items: center;
  background-color: var(--clr-logo);
  z-index: 10;
  border-radius: 50%;
  font-size: 10px;
  height: 14px;
  width: 14px;
  top:25%;
  right:-2px;

`

export const ItemCountSpan = styled.span`

color: var(--clr-light);
font-weight: var(--fw-600)

`

