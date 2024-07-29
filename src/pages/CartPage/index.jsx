import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ContentArea } from "../../components/ContentArea";
import { PromoCode } from "./components/PromoCode";
import { OrderWrapper } from "./components/OrderWrapper";
import { OrderContext } from "../../context/orderContext";
import { useReducer } from "react";
import { initialState, orderReducer } from "../../reducers/orderReducer";
import "./style.css";

const MENU_ITEMS = ["Home", "Shop", { name: "Cart", active: true }];

export const Cart = () => {
    const [orderInfo, dispatchOrderInfo] = useReducer(orderReducer, initialState);

    return (
        <>
            <Header />
            <ContentArea title="Cart" menuItems={MENU_ITEMS} />
            <div className="container">
                <div className="cart">
                    <OrderContext.Provider
                        value={{ orderInfo, dispatchOrderInfo }}
                    >
                        <OrderWrapper />
                        <PromoCode />
                    </OrderContext.Provider>
                </div>
            </div>
            <Footer />
        </>
    );
};
