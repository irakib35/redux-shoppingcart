import React from "react";
import { useDispatch } from "react-redux";
import { cartadded } from "../../redux/cart/actiontypes";

export default function Products({ pro }) {
    const dispatch = useDispatch();
    const { proid, proname, proimg, procat, proprice, proquan } = pro;

    const addtocart = (vals) => {
        dispatch(cartadded(vals));
    };

    return (
        <div class="lws-productCard">
            <img class="lws-productImage" src={proimg} alt="product" />
            <div class="p-4 space-y-2">
                <h4 class="lws-productName">{proname}</h4>
                <p class="lws-productCategory">{procat}</p>
                <div class="flex items-center justify-between pb-2">
                    <p class="productPrice">
                        BDT <span class="lws-price">{proprice}</span>
                    </p>
                    <p class="productQuantity">
                        QTY <span class="lws-quantity">{proquan}</span>
                    </p>
                </div>
                <button
                    class="lws-btnAddToCart"
                    onClick={() => addtocart(proid)}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}
