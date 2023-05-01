import React, { useEffect } from "react";
import Header from "../Header";
import ProductList from "./ProductList";
import NewProduct from "./NewProduct";

export default function Home() {
    useEffect(() => {
        document.title = "LWS | Shopping Cart";
    }, []);

    return (
        <>
            <Header />
            <main class="py-16">
                <div class="productWrapper">
                    <ProductList />
                    <NewProduct />
                </div>
            </main>
        </>
    );
}
