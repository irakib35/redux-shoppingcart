import React from "react";
import { useSelector } from "react-redux";

export default function BillDetails() {
    const carts = useSelector((state) => state.carts);
    const pros = useSelector((state) => state.products);
    let totals = 0;

    const totalquan = carts.map((cart) => {
        const pro = pros.filter((el) => el.proid === cart.proid);
        const { proprice } = pro[0];
        totals = totals + cart.quan * proprice;
        return totals;
    });

    return (
        <div>
            <div class="billDetailsCard">
                <h4 class="mt-2 mb-8 text-xl font-bold text-center">
                    Bill Details
                </h4>
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <p>Sub Total</p>
                        <p>
                            BDT <span class="lws-subtotal">{totalquan}</span>
                        </p>
                    </div>

                    <div class="flex items-center justify-between">
                        <p>Discount</p>
                        <p>
                            BDT <span class="lws-discount">0</span>
                        </p>
                    </div>

                    <div class="flex items-center justify-between">
                        <p>VAT</p>
                        <p>
                            BDT <span class="vat">0</span>
                        </p>
                    </div>

                    <div class="flex items-center justify-between pb-4">
                        <p class="font-bold">TOTAL</p>
                        <p class="font-bold">
                            BDT <span class="lws-total">{totalquan}</span>
                        </p>
                    </div>
                    <button class="placeOrderbtn">place order</button>
                </div>
            </div>
        </div>
    );
}
