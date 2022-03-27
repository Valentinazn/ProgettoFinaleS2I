import styled from 'styled-components'
import {RiDeleteBin6Fill} from 'react-icons/ri'

export const CartItemItem = styled.li`

  border-bottom: 1px solid var(--clr-text);
  padding: 10px 0;
  margin-top: 10px;
  list-style-type: none;
  height: 100px;
  display: flex;
  gap: 5px;
  align-items: center;

  &:nth-child(1){
        border-top: 1px solid var(--clr-text);
  }

`


export const  CartItemIcon = styled(RiDeleteBin6Fill)`

  margin-left: auto;
  margin-right: 5px;
  color: #A792BA;
  cursor: pointer;
  font-size: var(--fs-text);
   transition: all 0.2s ease-in-out;

  &:hover{
     color: var(--clr-logo);
     transition: all 0.2s ease-in-out;
  }


`