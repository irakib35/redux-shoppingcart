import React, { useEffect } from "react";
import CartList from "./CartList";
import BillDetails from "./BillDetails";
import Header from "../Header";

export default function Cart() {
    useEffect(() => {
        document.title = "Cart";
    }, []);
    return (
        <>
            <Header />
            <main class="py-16">
                <div class="container 2xl:px-8 px-2 mx-auto">
                    <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div class="cartListContainer">
                        <CartList />
                        <BillDetails />
                    </div>
                </div>
            </main>
        </>
    );
}
