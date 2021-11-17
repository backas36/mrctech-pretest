import { useContext } from "react"

import styled from "styled-components"
import { SearchContext } from "../../searchContext"

const CategoriesWrapper = styled.div`
  position:relative;
  flex-basis:200px;
`
const CategoriesContent = styled.div`
  background:rgb(249,249,249);
  width:150px;
  position:fixed;
  top:65%;
  left:5%;
  padding: 0 10px;

`
const Item = styled.div`
  margin:12px 0;
  font-size:20px;
  font-weight:bold;
  text-align:center;
  cursor:pointer;
  &:hover {
    color:#372B93;
  }
  ${props => props.$active && `
    color:#372B93;
    text-decoration:underline;
  `}
`

const ProductsCategories = ({ categories, handleFilterClick, filter }) => {
  const { setSearchItem } = useContext(SearchContext)
  const handleCategoryClick = (category) => {
    handleFilterClick(category)
    setSearchItem('')
  }
  return (
    <CategoriesWrapper>
      <CategoriesContent>
        {categories.map((category, index) => {
          const { title } = category
          return (
            <Item
              key={`category-${index}`}
              onClick={() => handleCategoryClick(category)}
              $active={category.title === filter?.title}
            >
              {title}
            </Item>
          )
        })}
      </CategoriesContent>

    </CategoriesWrapper>
  )
}

export default ProductsCategories