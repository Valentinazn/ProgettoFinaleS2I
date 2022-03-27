import styled from 'styled-components'
import { BsFillCartDashFill} from 'react-icons/bs'
import { AiOutlinePlusCircle } from 'react-icons/ai'





export const ProductsWrapper = styled.div`

  padding: 10px;
  display: grid;
  grid-gap: 2px;
  grid-auto-rows: 200px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-flow: dense;
  margin-top: 150px
`

export const ProductsCard = styled.div`

position: relative;


`



export const ProductsImg = styled.img`
 
width: 100%;
height: 100%;
object-fit: cover;
transition: all 0.2s ease-in-out;
-webkit-filter: brightness(100%);




&:hover{
 
     -webkit-filter: brightness(70%);
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;

}


`





export const IconPro2 = styled(AiOutlinePlusCircle)`

visibility : ${ ({ isHover }) => ( isHover ? '' : 'hidden') };
position: absolute;
right: 15px;
top: 15px;
cursor: pointer;
color: #F8D15E;
font-size: 20px

`

export const IconPro = styled(BsFillCartDashFill)`

visibility : ${ ({ isHover }) => ( isHover ? '' : 'hidden') };
position: absolute;
right: 15px;
top: 15px;
cursor: pointer;
color: #F8D15E;
font-size: 20px

`




export const ProductsPrice = styled.p`

font-size: var(--fs-subtitle);
text-align: center;
margin-bottom: 15px;


`
