import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/NavBar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Explore from '../components/Explore'
import { mobile } from '../responsive'
import { BrowserRouter, Switch, Route, useLocation, useParams} from 'react-router-dom';
import { Calculate } from '@mui/icons-material'

const Container = styled.div`

`

const Title = styled.h1`
  margin:20px;
`

const FilerContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({marginLeft: '0px 20px',display:'flex',flexDirection:'column'})};
`

const FilterText = styled.span`
    font-size:20px;
    font-weight: 600;
    ${mobile({marginRight: '0px'})};
`

const Select = styled.select`
  padding:10px;
  margin-right:20px;
  ${mobile({margin: '10px 0px'})};
`
const Option = styled.option`
  
`
const ProductList = () => {
  const filterColor = (e) => {
    console.log("color update request" + " " + e.target.value);
  }
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>All Products:</Title>
        <FilerContainer>
            <Filter>
              <FilterText>
                Filter Products:
                </FilterText>
                <Select name="color" onChange={filterColor}>
                  <Option disabled >
                    Color
                  </Option>
                  <Option >
                    white
                  </Option>
                  <Option >
                    black
                  </Option>
                  <Option >
                    red
                  </Option>
                  <Option >
                    blue
                  </Option>
                  <Option >
                    yellow
                  </Option>
                  
                </Select>
                <Select name="size">
                  <Option disabled >
                    xs
                  </Option>
                  <Option >
                    s
                  </Option>
                  <Option >
                    m
                  </Option>
                  <Option >
                    l
                  </Option>
                  <Option >
                    xl
                  </Option>
                </Select>
            </Filter>
            <Filter>
            <FilterText>
                Sort Products:
              </FilterText>
              <Select>
                  <Option value="newest">
                    Newest
                  </Option>
                  <Option value="asc">
                    Price (asc)
                  </Option>
                  <Option value="desc">
                    Price (desc)
                  </Option>
                </Select>
            </Filter>
        </FilerContainer>
        <Explore />
        <Footer />
    </Container>
  )
}

export default ProductList