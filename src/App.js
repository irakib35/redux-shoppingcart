import { Route, Routes } from "react-router-dom";
import "./styles/output.css";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
