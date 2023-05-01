import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartdeleted, cartprochange } from "./../../redux/cart/actiontypes";

export default function CartItem({ cart }) {
    const pros = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const { proid, quan } = cart;
    const pro = pros.filter((el) => el.proid === proid);
    const { proname, proimg, procat, proprice, proquan } = pro[0];

    const deletedcart = (proid) => {
        dispatch(cartdeleted(proid));
    };

    const quanchangeHandler = (proid, type) => {
        dispatch(cartprochange(proid, type));
    };

    return (
        <div class="cartCard">
            <div class="flex items-center col-span-6 space-x-6">
                <img class="lws-cartImage" src={proimg} alt="product" />

                <div class="space-y-2">
                    <h4 class="lws-cartName">{proname}</h4>
                    <p class="lws-cartCategory">{procat}</p>
                    <p>
                        BDT <span class="lws-cartPrice">{proprice}</span>
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                <div class="flex items-center space-x-4">
                    <button
                        class="lws-incrementQuantity"
                        onClick={() => quanchangeHandler(proid, "add")}
                    >
                        <i class="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span class="lws-cartQuantity">{quan}</span>
                    <button
                        class="lws-decrementQuantity"
                        onClick={() => quanchangeHandler(proid, "del")}
                    >
                        <i class="text-lg fa-solid fa-minus"></i>
                    </button>
                </div>

                <p class="text-lg font-bold">
                    BDT{" "}
                    <span class="lws-calculatedPrice">{quan * proprice}</span>
                </p>
            </div>

            <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button class="lws-removeFromCart">
                    <i
                        class="text-lg text-red-400 fa-solid fa-trash"
                        onClick={() => deletedcart(proid)}
                    ></i>
                </button>
            </div>
        </div>
    );
}
