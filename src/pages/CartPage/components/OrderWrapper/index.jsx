import "./style.css";
import { ProductsList } from "./components/ProductList";
import { Order } from "./components/Order";

export const OrderWrapper = () => {
    return (
        <div className="order-wrapper">
            <ProductsList />
            <Order />
        </div>
    );
};
