import "./style.css";
import { useLocalStorage } from "../../../../../../hooks/useLocalStorage";
import { useEffect, useState, useContext } from "react";
import { OrderContext } from "../../../../../../context/orderContext";
import { PriceRow } from "./components/PriceRow";
import { addDays } from "../../../../../../utils/addDays";
const PRODUCT_IN_BASKET_KEY = "product-in-basket";
const DELIVERY_DATE = 5;
const DELIVERY = 16;

export const Order = () => {
    const { getFromLS } = useLocalStorage();
    const { orderInfo } = useContext(OrderContext);

    const products = getFromLS(PRODUCT_IN_BASKET_KEY) || [];
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryDate, setDeliveryDate] = useState(null);

    useEffect(() => {
        let totalPrice = 0;

        products.forEach(
            (product) => (totalPrice += product.price * product.quantity)
        );

        totalPrice = totalPrice * (1 - orderInfo.discount);

        setTotalPrice(Number(totalPrice.toFixed(2)));
    }, [products, orderInfo.discount]);

    useEffect(() => {
        const date = addDays(DELIVERY_DATE);

        const month = date.toLocaleString("en", { month: "short" });

        setDeliveryDate(` (${month} ${date.getDate()} at 16:00)`);
    }, []);

    return (
        <div className="order">
            <div className="title">Your Order</div>
            <div className="order-price-wrapper">
                <PriceRow
                    name="Order price"
                    data={totalPrice.toFixed(2)}
                    dataClass="price"
                />
                <PriceRow
                    name="Discount for promo code"
                    data={orderInfo.havePromo ? "Yes" : "No"}
                />
                <PriceRow
                    name="Delivery"
                    data={`$${DELIVERY}`}
                    dataClass="price"
                    additionalClass="delimiter"
                >
                    <span className="additional">{deliveryDate}</span>
                </PriceRow>
                <PriceRow
                    name="Total"
                    data={(totalPrice + DELIVERY).toFixed(2)}
                    dataClass="price"
                    additionalClass="total"
                />
            </div>
            <div className="button-wrapper">
                <button className="button">Checkout</button>
                <div className="vertical-line" />
            </div>
        </div>
    );
};
