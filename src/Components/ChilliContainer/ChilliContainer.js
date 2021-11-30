import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Categories from '../Categories/Categories'
import ProductsByCategories from '../ProductsByCategories/ProductsByCategories'

const ChilliContainer = () => {
    return (
        <div className="products">
            <Container>
                <Row>
                    <Categories />
                    <ProductsByCategories categoryId="5"/>
                </Row>
                <div className="clearfix"> </div>
            </Container>
        </div>
    )
}

export default ChilliContainer;
