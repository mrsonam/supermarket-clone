import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';

const baseURL = 'https://uat.ordering-boafresh.ekbana.net';
const apiKey =
    'fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545';
const warehouseId = 1;
const accessToken = localStorage.getItem('accessToken');

const CartContainer = ({item}) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const increaseQunatity = () => {
        setQuantity(quantity + 1);
        try {
            updateCart();
        } catch (err) {
            console.log(err);
        }
        
    }
    const decreaseQunatity = () => {
        if (quantity > 0) setQuantity(quantity - 1)
    }
    const updateCart = async () => {
        let res = await fetch(`${baseURL}/api/v4/cart/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Warehouse-Id': warehouseId,
                Authorization: 'Bearer ' + accessToken,
                'Api-key': apiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity: quantity
            })
        });
        console.log(res)
        // if (res.ok) console.log("item Updated")
    }
    const removeItem = async () => {
        let res = await fetch(`${baseURL}/api/v4/cart`, {
            method: 'DELETE',
            headers: {
                'Warehouse-Id': warehouseId,
                Authorization: 'Bearer ' + accessToken,
                'Api-key': apiKey,
                cartProductId: item.id
            },
        });
        if (res.ok) console.log("item Deleted")
    }
    return (
        <tr className="rem1">
            <td className="invert">1</td>
            <td className="invert-image">
                <a href={item.product.images[0].imageName}>
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
                        <div className="entry value-minus" onClick={decreaseQunatity}>&nbsp;</div>
                        <div className="entry value">
                            <span>{quantity}</span>
                        </div>
                        <div className="entry value-plus active" onClick={increaseQunatity}>&nbsp;</div>
                    </div>
                </div>
            </td>
            <td className="invert">{item.product.title}</td>
            <td className="invert">NRs. {item.selectedUnit.sellingPrice}</td>
            <td className="invert">NRs. {item.price}</td>
            <td className="invert">
                <Button variant="danger" onClick={removeItem}><FontAwesomeIcon icon={faTrash}/></Button>
            </td>
        </tr>
    );
};

export default CartContainer;
