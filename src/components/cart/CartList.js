import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

export default function CartList() {
    const carts = useSelector((state) => state.carts);

    return (
        <div class="space-y-6">
            {carts.map((cart) => (
                <CartItem key={cart.proid} cart={cart} />
            ))}
        </div>
    );
}
