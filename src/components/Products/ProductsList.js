import { useState } from "react"
import styled from "styled-components"
import PopUp from "./PopUp"

const ProductsListWrapper = styled.div`
  width:900px;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  padding: 0 10px;
  cursor:pointer;
`
const ProductWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23%;
  padding: 10px 0;
  margin-bottom: 20px;
`
const ProductImageWrapper = styled.div`
  width: 100%;
`;

const ProductImage = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
  margin-bottom: 10px;
  &:hover {
    filter: brightness(110%);
  }
`;

const ProductName = styled.p`
  font-size: 18px;
  margin: 0 0 15px 0;
  
`;

const ProductsList = ({ products }) => {

  const RenderProduct = ({ product }) => {
    const [ispopUpOpen, setIspopUpOpen] = useState(false)
    const openPopUp = (e) => {
      setIspopUpOpen(true)
    }
    const handleCancelBtn = () => {
      setIspopUpOpen(false)
    }

    return (
      <>
        <ProductWapper onClick={(e) => openPopUp(e)}>
          <ProductImageWrapper>
            <ProductImage img={product.thumbnailUrl} />
          </ProductImageWrapper>
          <ProductName>{product.title}</ProductName>

        </ProductWapper>
        <PopUp
          ispopUpOpen={ispopUpOpen}
          product={product}
          handleCancelBtn={handleCancelBtn}
        />
      </>
    )
  }

  return (
    <ProductsListWrapper>
      {products.map(product => {
        return (<RenderProduct product={product} key={product.id} />)
      })}
      <ProductWapper />
      <ProductWapper />
      <ProductWapper />

    </ProductsListWrapper>
  )
}

export default ProductsList