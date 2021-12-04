import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import CartContainer from '../Components/Cart/CartContainer';
import { Link } from 'react-router-dom';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
const warehouseId = 1;

const MyCart = () => {
    const accessToken = localStorage.getItem('accessToken');
    const [cart, setCart] = useState([]);
    async function getCart() {
        let res = await fetch(`${baseURL}/api/v4/cart`, {
            method: 'GET',
            headers: {
                'Warehouse-Id': warehouseId,
                Authorization: 'Bearer ' + accessToken,
                'Api-key': apiKey
            },
        });
        let data = await res.json();

        if (res.ok) {
            setCart(data.data);
            // console.log(data.data);
        } else {
            throw data.errors[0].message;
        }
    }
    try {
        getCart();
    } catch (err) {
        console.log(err);
    }

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
                                {cart.cartProducts.map((item) => {
                                    return (
                                        <CartContainer
                                            item={item}
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
                            <Link to="/payment">
                                <span
                                    className="glyphicon glyphicon-menu-left"
                                    aria-hidden="true"
                                ></span>
                                Continue to Payment
                            </Link>
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

export default MyCart;
