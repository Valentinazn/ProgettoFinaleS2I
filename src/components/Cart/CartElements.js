import styled from 'styled-components'
import {GrFormClose} from 'react-icons/gr'

export const CartWrapper = styled.div`

position: fixed;
top: 70px;
right: 20px;
background-color: var(--clr-secondary-2);
border-radius: 7px;
width: 400px;
padding: 20px;
z-index: 999;
transition: 0.2s ease-in-out;
box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

@media (max-width: 768px){
  max-width: 250px;
}
`

export const CartInnerWrapper = styled.div`

height: max-content;
max-height: 50vh;
overflow-y: auto;
width: 100%

`

export const CartTotal = styled.div`

margin-top: 10px;
display: flex;
justify-content: space-between;


`

export const CartBtnContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;

`

export const CartBtn = styled.button`

margin-top: 15px;
padding: 8px 10px;
background: var(--clr-secondary-1);
color: var(--clr-secondary-2);
font-weight: var(--fw-600);
border-radius: 5px;
border: none;
cursor: pointer;

&:hover{
  opacity: .7
}

`

export const CartIcon = styled(GrFormClose)`

color: var(--clr-logo);
transition: transform 0.2s linear;
cursor: pointer;

&:hover{

    transform: rotate(90deg)
}

`