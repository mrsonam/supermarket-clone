import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Categories from '../Categories/Categories';
import ProductsRight from '../ProductsRight/ProductsRight';

const ProductsContainer = () => {
    return (
        <div className="products">
            <Container>
                <Row>
                    <Categories />
                    <ProductsRight/>
                </Row>
                <div className="clearfix"> </div>
            </Container>
        </div>
    );
};

export default ProductsContainer;
