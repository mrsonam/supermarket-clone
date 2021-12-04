import React, { useState } from 'react';
import {
    Col,
    Card,
    Button,
    Container,
    Spinner,
    Toast,
    ToastContainer,
} from 'react-bootstrap';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
const warehouseId = 1;
const accessToken = localStorage.getItem('accessToken');

const Dishes = ({ dishes }) => {
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('danger');
    const [showToast, setShowToast] = useState(false);
    const toggleShowToast = () => setShowToast(!showToast);

    async function addItem() {
        if(accessToken){
            let res = await fetch(`${baseURL}/api/v4/cart-product`, {
                method: 'POST',
                headers: {
                    Authorization: accessToken,
                    'Warehouse-Id': warehouseId,
                    'Api-key': apiKey,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: dishes.id,
                    priceId: dishes.unitPrice[0].id,
                    quantity: 1,
                    note: 'testing',
                }),
            });
            let data = await res.json();
            if (res.ok) {
                setMessage('Item Added to Cart');
                setVariant('success');
                if (!showToast) {
                    toggleShowToast();
                }
            }
        }else {
            window.location.href = "/login"
        }
        
    }
    return dishes !== undefined ? (
        <>
            <Col md={4} className="top_brand_left mb-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={dishes.images[0].imageName} />
                    <Card.Body className="text-center">
                        <Card.Title>{dishes.title}</Card.Title>
                        <Card.Text>
                            NRs. {dishes.unitPrice[0].sellingPrice}
                        </Card.Text>
                        <Button variant="outline-success" onClick={addItem}>
                            Add To Cart
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <ToastContainer position="bottom-end" className="p-3">
                <Toast show={showToast} onClose={toggleShowToast} bg={variant}>
                    <Toast.Header>
                        <strong className="me-auto">Boa-Fresh</strong>
                    </Toast.Header>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    ) : (
        <Container>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    );
};

export default Dishes;
