
const PRODUCT_IN_BASKET_KEY = "product-in-basket";

export const updateBasketHeader = (getFromLS) => {
    const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);

    if (!productsInBasket) {
        return 0;
    }

    let countProductsInBasket = 0;

    productsInBasket.forEach(
        (product) => (countProductsInBasket += product.quantity)
    );

    return countProductsInBasket;
};