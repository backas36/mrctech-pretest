import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { SearchContext } from "../../searchContext"
import ProductsCategories from "./ProductsCategories"
import ProductsList from "./ProductsList"

const categories = [
  {
    title: '01 - 30',
    start: 0,
    end: 29
  },
  {
    title: '31 - 60',
    start: 30,
    end: 59
  },
  {
    title: '61 - 90',
    start: 60,
    end: 89
  },
  {
    title: '91 - 120',
    start: 90,
    end: 119
  },
]

const fetchAPI = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
  return await response.json();

}

const ProductsWrapper = styled.div`
  display:flex;
  width:1100px;
  margin:0 auto;
  position:relative;
`
const GoTop = styled.button`
  background:#4F5B8D;
  color:#fff;
  cursor:pointer;
  border:none;
  padding:6px 10px;
  opacity:0.6;
  transition:opacity .2s;
  &:hover{
    opacity:1;
  }
  position:fixed;
  bottom:5%;
  right:5%;
`



const Products = () => {
  const [isShowGoTop, setIsShowGoTop] = useState(false)
  const [filter, setFilter] = useState(categories[0])
  const [products, setProducts] = useState([])
  const { searchItem } = useContext(SearchContext)

  useEffect(() => {
    const fetchingItems = async (filter) => {
      try {
        const result = await fetchAPI();
        const getAllItems = result.slice(0, 119);
        if (!searchItem) {
          const { start, end } = filter

          const getSelectedItems = getAllItems.slice(start, end + 1)

          return setProducts(getSelectedItems);
        } else {
          setFilter(null)
          const getSearchItems = getAllItems.filter(item => {
            return item.title.includes(searchItem)
          })

          return setProducts(getSearchItems)
        }

      } catch (err) {
        console.log(err)
      }
    };
    fetchingItems(filter)
  }, [filter, searchItem])

  useEffect(() => {
    const listener = () => {
      setIsShowGoTop(window.scrollY > 500)
    }
    document.addEventListener('scroll', listener)
    return () => document.removeEventListener('scroll', listener)
  }, [isShowGoTop])
  const handleFilterClick = (selectedCategory) => {
    setFilter(selectedCategory)
  }

  return (
    <>
      <ProductsWrapper>
        <ProductsCategories
          categories={categories}
          handleFilterClick={handleFilterClick}
          filter={filter}
        />
        <ProductsList products={products} />
      </ProductsWrapper>
      {isShowGoTop ? (
        <GoTop onClick={() => window.scrollTo(0, 0)}>
          GoTop
        </GoTop>) : null}

    </>
  )
}

export default Products