import React from 'react'
import { Container, Row } from 'react-bootstrap'
import GourmetRight from '../GourmetRight/GourmetRight'
import Categories from '../Categories/Categories'

const GourmetContainer = () => {
    return (
        <div className="products">
            <Container>
                <Row>
                    <Categories />
                    <GourmetRight/>
                </Row>
                <div className="clearfix"> </div>
            </Container>
        </div>
    )
}

export default GourmetContainer
