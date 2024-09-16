import "./style.css";
import { useLocalStorage } from "../../../../../../hooks/useLocalStorage";
import { HeaderContext } from "../../../../../../context/headerContext";
import { updateBasketHeader } from "../../../../../../utils/updateBasketHeader";
import { useContext } from "react";
import { Product } from "./components/Product";

const PRODUCT_IN_BASKET_KEY = "product-in-basket";

export const ProductsList = () => {
    const { setToLS, getFromLS, removeFromLS } = useLocalStorage();
    const { dispatch } = useContext(HeaderContext);
    const products = getFromLS(PRODUCT_IN_BASKET_KEY) || [];

    const increaseProductCount = (productId) => {
        const updatedProducts = products.map((product) =>
            product.id === productId
                ? { ...product, quantity: ++product.quantity }
                : product
        );

        setToLS(PRODUCT_IN_BASKET_KEY, updatedProducts);

        dispatch({
            type: "set_basket",
            payload: updateBasketHeader(getFromLS),
        });
    };

    const deleteProduct = (product) => {
        removeFromLS(PRODUCT_IN_BASKET_KEY, product);

        dispatch({
            type: "set_basket",
            payload: updateBasketHeader(getFromLS),
        });
    };

    const decreaseProductCount = (product, productCount) => {
        if (productCount === 1) {
            deleteProduct(product);
            return;
        }

        const updatedProducts = products.map((productInBasket) =>
            productInBasket.id === product.id
                ? { ...productInBasket, quantity: --productInBasket.quantity }
                : productInBasket
        );

        setToLS(PRODUCT_IN_BASKET_KEY, updatedProducts);

        dispatch({
            type: "set_basket",
            payload: updateBasketHeader(getFromLS),
        });
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    increaseProductCount={increaseProductCount}
                    deleteProduct={deleteProduct}
                    decreaseProductCount={decreaseProductCount}
                />
            ))}
        </div>
    );
};
