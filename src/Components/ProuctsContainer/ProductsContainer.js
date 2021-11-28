import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Categories from '../Categories/Categories';
import ProductsRight from '../ProductsRight/ProductsRight';

const ProductsContainer = ({products}) => {
    return (
        <div className="products">
            <Container>
                <Row>
                    {/* <Categories /> */}
                    <ProductsRight products={products}/>
                </Row>
                <div className="clearfix"> </div>
            </Container>
        </div>
    );
};

export default ProductsContainer;
