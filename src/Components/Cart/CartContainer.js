import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ToastContainer, Toast } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
const warehouseId = 1;
const accessToken = localStorage.getItem('accessToken');

const CartContainer = ({ getCart, item, i }) => {
    const quantity = item.quantity;
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState('danger');
    const [showToast, setShowToast] = useState(false);

    const toggleShowToast = () => setShowToast(!showToast);
    const increaseQunatity = async () => {
        let res = await fetch(`${baseURL}/api/v4/cart-product/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Warehouse-Id': warehouseId,
                Authorization: 'Bearer ' + accessToken,
                'Api-key': apiKey,
                'Content-Type': 'application/json',
                cartProductId: item.id,
            },
            body: JSON.stringify({
                quantity: quantity + 1,
            }),
        });
        let data = res.json()
        if (res.ok) {
            setMessage('Product Updated');
            setVariant('success');
            if (!showToast) {
                toggleShowToast();
            }
            getCart();
        } else {
            setMessage(data.errors[0].message);
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
        }
    };
    const decreaseQunatity = async () => {
        let res = await fetch(`${baseURL}/api/v4/cart-product/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Warehouse-Id': warehouseId,
                Authorization: 'Bearer ' + accessToken,
                'Api-key': apiKey,
                'Content-Type': 'application/json',
                cartProductId: item.id,
            },
            body: JSON.stringify({
                quantity: quantity - 1,
            }),
        });
        console.log(res);
        let data = res.json()
        if (res.ok) {
            setMessage('Product Updated');
            setVariant('success');
            if (!showToast) {
                toggleShowToast();
            }
            getCart();
        } else {
            setMessage(data.errors[0].message);
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
        }
    };
    const removeItem = async () => {
        console.log(item.id);
        let res = await fetch(`${baseURL}/api/v4/cart-product/${item.id.toString()}`, {
            method: 'DELETE',
            headers: {
                'Warehouse-Id': warehouseId,
                Authorization: 'Bearer ' + accessToken,
                'Api-key': apiKey,
                cartProductId: item.id.toString(),
            },
        });
        let data = res.json()
        if (res.ok) {
            setMessage('Product Deleted');
            setVariant('success');
            if (!showToast) {
                toggleShowToast();
            }
            getCart();
        } else {
            setMessage(data.errors[0].message);
            setVariant('danger');
            if (!showToast) {
                toggleShowToast();
            }
        }
    };
    return (
        <>
        <tr className="rem1">
            <td className="invert">{i}</td>
            <td className="invert-image">
                <a href={item.product.images[0].imageName} target="__blank">
                    <img
                        src={item.product.images[0].imageName}
                        alt=" "
                        className="img-responsive"
                    />
                </a>
            </td>
            <td className="invert">
                <div className="quantity">
                    <div className="quantity-select">
                        <div
                            className="entry value-minus"
                            onClick={decreaseQunatity}
                        >
                            &nbsp;
                        </div>
                        <div className="entry value">
                            <span>{quantity}</span>
                        </div>
                        <div
                            className="entry value-plus active"
                            onClick={increaseQunatity}
                        >
                            &nbsp;
                        </div>
                    </div>
                </div>
            </td>
            <td className="invert">{item.product.title}</td>
            <td className="invert">NRs. {item.selectedUnit.sellingPrice}</td>
            <td className="invert">NRs. {item.price}</td>
            <td className="invert">
                <Button variant="danger" onClick={() => removeItem()}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </td>
        </tr>
        <ToastContainer position="bottom-end" className="p-3">
        <Toast show={showToast} onClose={toggleShowToast} bg={variant}>
            <Toast.Header>
                <strong className="me-auto">Boa-Fresh</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    </ToastContainer>
    </>
    );
};

export default CartContainer;
