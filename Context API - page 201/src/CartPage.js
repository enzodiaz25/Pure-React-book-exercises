import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./CartPage.css"

function totalPrice(items) {
    return items.reduce((total, item) => (
        total + (item.count * item.price)
    ), 0)
}

function CartPage({ items, onAddOne, onRemoveOne }) {
    return (
        <div>
            <ul className="CartPage-items">
                {items.length !== 0 ?
                <>
                    {items.map(item =>
                        <li key={item.id} className="CartPage-item">
                            <Item item={item}>
                                <div className="CartItem-controls">
                                    <button
                                        className="CartItem-removeOne"
                                        onClick={() => onRemoveOne(item)}>&ndash;</button>
                                    <span className="CartItem-count">{item.count}</span>
                                    <button
                                        className="CartItem-addOne"
                                        onClick={() => onAddOne(item)}>+</button>
                                </div>
                            </Item>
                        </li>
                    )}
                    <p className="CartPage-total">Total: ${totalPrice(items)}</p>
                </>
                :
                <div className="CartPage-empty-text">
                    <p>Your cart is empty.</p>
                    <p>Why not add some expensive products to it?</p>
                </div>
                }
            </ul>
        </div>
    );
}
CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
}

export default CartPage;