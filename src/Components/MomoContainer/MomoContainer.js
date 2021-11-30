import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Categories from '../Categories/Categories'
import ProductsByCategories from '../ProductsByCategories/ProductsByCategories'

const MomoContainer = () => {
    return (
        <div className="products">
            <Container>
                <Row>
                    <Categories />
                    <ProductsByCategories categoryId="3"/>
                </Row>
                <div className="clearfix"> </div>
            </Container>
        </div>
    )
}

export default MomoContainer;
