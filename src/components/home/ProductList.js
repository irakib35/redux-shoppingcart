import React from "react";
import Products from "./Products";
import { useSelector } from "react-redux";

export default function ProductList() {
    const pros = useSelector((state) => state.products);
    const carts = useSelector((state) => state.carts);

    console.log(carts);
    return (
        <div class="productContainer" id="lws-productContainer">
            {pros.map((pro) => (
                <Products key={pro.proid} pro={pro} />
            ))}
        </div>
    );
}
