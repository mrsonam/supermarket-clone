import React, { useState, useEffect } from 'react';
import { Container, Spinner, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContainer from './CartContainer';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
const warehouseId = 1;

const Cart = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [cart, setCart] = useState([]);
    const getCart = async () => {
        let res = await fetch(`${baseURL}/api/v4/cart`, {
            method: 'GET',
            headers: {
                'Warehouse-Id': warehouseId,
                Authorization: 'Bearer ' + accessToken,
                'Api-key': apiKey,
            },
        });
        let data = await res.json();

        if (res.ok) {
            setCart(data.data);
        } else {
            throw data.errors[0].message;
        }
    };

    try {
        getCart();
    } catch (err) {
        console.log(err);
    }

    const [paymentMethod, setPaymentMethod] = useState([]);
    const getPaymentMethod = async () => {
        let res = await fetch(`${baseURL}/api/v4/payment-method`, {
            method: 'GET',
            headers: {
                'Api-key': apiKey,
            },
        });
        let data = await res.json();

        if (res.ok) {
            setPaymentMethod(data.data);
        } else {
            throw data.errors[0].message;
        }
    };

    try {
        getPaymentMethod();
    } catch (err) {
        console.log(err);
    }

    const clearCart = async () => {
        let res = await fetch(`${baseURL}/api/v4/cart}`, {
            method: 'DELETE',
            headers: {
                'Warehouse-Id': warehouseId,
                Authorization: 'Bearer ' + accessToken,
                'Api-key': apiKey
            },
        });
        console.log(res)
        if(res.ok) window.location.href ="/"
    };

    return (
        <div className="checkout">
            {cart.cartProducts !== undefined ? (
                <Container>
                    <h2>
                        Your shopping cart contains:{' '}
                        <span>{cart.cartProducts.length} Product(s)</span>
                    </h2>
                    <div className="checkout-right">
                        <table className="timetable_sub">
                            <thead>
                                <tr>
                                    <th>SL No.</th>
                                    <th>Product</th>
                                    <th>Quality</th>
                                    <th>Product Name</th>
                                    <th>Unit Price</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.cartProducts.map((item, i) => {
                                    return (
                                        <CartContainer
                                            getCart={getCart}
                                            item={item}
                                            i={i + 1}
                                            key={item.id}
                                        />
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="checkout-left">
                        <div className="checkout-left-basket">
                            <h4>Continue to basket</h4>
                            <ul>
                                {cart.cartProducts.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            {item.product.title} <i>-</i>{' '}
                                            <span>NRs. {item.price} </span>
                                        </li>
                                    );
                                })}
                                <li>
                                    Sub Total <i>-</i>{' '}
                                    <span>NRs. {cart.subTotal} </span>
                                </li>
                                <li>
                                    Delivery Charge <i>-</i>{' '}
                                    <span>NRs. {cart.deliveryCharge} </span>
                                </li>
                                <li>
                                    Total <i>-</i>{' '}
                                    <span>NRs. {cart.total}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="checkout-right-basket">
                            <Form.Select aria-label="Default select example">
                                <option>Payment Method</option>
                                {paymentMethod.map(method => {
                                    return(<option value={method.title} key={method.id}>{method.title}</option>)
                                })}
                            </Form.Select>
                            <Button className="mt-5">
                                Checkout
                            </Button>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </Container>
            ) : (
                <Container>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
            )}
        </div>
    );
};

export default Cart;
