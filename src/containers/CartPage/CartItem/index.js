import React, { useState } from 'react';
import { generatePublicUrl } from '../../../urlConfig';
import { BiRupee } from 'react-icons/bi';
import './style.css';
import { removeCartItem } from '../../../actions/cart.action';
import { useDispatch } from 'react-redux';

/**
* @author
* @function CartItem
**/

const CartItem = (props) => {
    const [qty, setQty] = useState(props.cartItem.qty);
    const { _id, name, price, img } = props.cartItem;
    const dispatch = useDispatch();

    const onQuantityIncrement = () => {
        setQty(qty + 1);
        props.onQuantityInc(_id, qty + 1);
    }

    const onQuantityDecrement = () => {
        if (qty <= 1) return;
        setQty(qty - 1);
        props.onQuantityDec(_id, qty - 1);
    }

    const onRemoveCartItem = (_id) => {
        dispatch(removeCartItem({ productId: _id }));
    };

    return (
        <div className="cartItemContainer">
            <div className="flexRow">
                <div className="cartProImgContainer">
                    <img src={generatePublicUrl(img)} alt={''} />
                </div>
                <div className="cartItemDetails">
                    <div>
                        <p> {name} </p>
                        <p><BiRupee /> {price} </p>
                    </div>
                    <div>Delivery in 3 - 5 days</div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                margin: '5px 0'
            }}>
                <div className="quantityControl">
                    <button onClick={onQuantityDecrement}>-</button>
                    <input value={qty} readOnly />
                    <button onClick={onQuantityIncrement}>+</button>
                </div>
                <button className="cartActionBtn">Save for later</button>
                <button className="cartActionBtn"
                    onClick={() => onRemoveCartItem(_id)}>Remove</button>
            </div>
        </div>
    )
}

export default CartItem;