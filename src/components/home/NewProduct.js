import React, { useState } from "react";
import { useDispatch } from "react-redux";
import added from "./../../redux/products/actiontype";

export default function NewProduct() {
    const dispatch = useDispatch();
    const [proname, setProname] = useState("");
    const [procat, setProcat] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [quan, setQuan] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const npro = [
            Math.floor(Math.random() * 100),
            proname,
            procat,
            img,
            price,
            quan,
        ];
        dispatch(added(npro));
        setProname("");
        setProcat("");
        setImg("");
        setQuan("");
        setPrice("");
    };

    return (
        <div>
            <div class="formContainer">
                <h4 class="formTitle">Add New Product</h4>
                <form
                    class="space-y-4 text-[#534F4F]"
                    id="lws-addProductForm"
                    onSubmit={submitHandler}
                >
                    <div class="space-y-2">
                        <label for="lws-inputName">Product Name</label>
                        <input
                            class="addProductInput"
                            id="lws-inputName"
                            type="text"
                            value={proname}
                            onChange={(e) => setProname(e.target.value)}
                            required
                        />
                    </div>

                    <div class="space-y-2">
                        <label for="lws-inputCategory">Category</label>
                        <input
                            class="addProductInput"
                            id="lws-inputCategory"
                            type="text"
                            value={procat}
                            onChange={(e) => setProcat(e.target.value)}
                            required
                        />
                    </div>

                    <div class="space-y-2">
                        <label for="lws-inputImage">Image Url</label>
                        <input
                            class="addProductInput"
                            id="lws-inputImage"
                            type="text"
                            value={img}
                            onChange={(e) => setImg(e.target.value)}
                            required
                        />
                    </div>

                    <div class="grid grid-cols-2 gap-8 pb-4">
                        <div class="space-y-2">
                            <label for="ws-inputPrice">Price</label>
                            <input
                                class="addProductInput"
                                type="number"
                                id="lws-inputPrice"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>

                        <div class="space-y-2">
                            <label for="lws-inputQuantity">Quantity</label>
                            <input
                                class="addProductInput"
                                type="number"
                                id="lws-inputQuantity"
                                value={quan}
                                onChange={(e) => setQuan(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" id="lws-inputSubmit" class="submit">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
}
