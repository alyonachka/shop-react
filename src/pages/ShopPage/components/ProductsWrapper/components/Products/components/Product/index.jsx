import "./style.css";
import { updateBasketHeader } from "../../../../../../../../utils/updateBasketHeader";

const PRODUCT_IN_BASKET_KEY = "product-in-basket";
const PRODUCT_IN_FAVORITE_KEY = "product-in-favorites";

export const Product = ({
    product,
    dispatch,
    getFromLS,
    setToLS,
    removeFromLS,
}) => {
    const buyProduct = (product) => {
        const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);
        if (!productsInBasket) {
            setToLS(PRODUCT_IN_BASKET_KEY, [{ ...product, quantity: 1 }]);
            return;
        }

        let hasProductInBasket = false;

        const updatedProducts = productsInBasket.map((productInBasket) => {
            if (product.id === productInBasket.id) {
                hasProductInBasket = true;

                return {
                    ...product,
                    quantity: productInBasket.quantity + 1,
                };
            }

            return productInBasket;
        });

        if (hasProductInBasket) {
            setToLS(PRODUCT_IN_BASKET_KEY, updatedProducts);
            return;
        }

        setToLS(PRODUCT_IN_BASKET_KEY, [
            ...productsInBasket,
            { ...product, quantity: 1 },
        ]);
    };

    const updateFavHeader = () => {
        const productsInFav = getFromLS(PRODUCT_IN_FAVORITE_KEY);

        return productsInFav ? productsInFav.length : 0;
    };

    // const updateBasketHeader = () => {
    //     const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);

    //     if (!productsInBasket) {
    //         return 0;
    //     }

    //     let countProductsInBasket = 0;

    //     productsInBasket.forEach(
    //         (product) => (countProductsInBasket += product.quantity)
    //     );

    //     return countProductsInBasket;
    // };

    const checkProductInFavorites = (product) => {
        const productsInFav = getFromLS(PRODUCT_IN_FAVORITE_KEY);

        if (productsInFav) {
            return productsInFav.some(function (el) {
                return el.id === product.id;
            });
        }

        return false;
    };

    const addToFavorite = (imgIcon, product) => {
        const productInFav = checkProductInFavorites(product);
        const productsInFav = getFromLS(PRODUCT_IN_FAVORITE_KEY);

        if (!productsInFav) {
            setToLS(PRODUCT_IN_FAVORITE_KEY, [{ ...product }]);
            imgIcon.src = "./icons/favorites-red.svg";
            return;
        }

        switch (productInFav) {
            case true: {
                removeFromLS(PRODUCT_IN_FAVORITE_KEY, product);
                imgIcon.src = "./icons/favorites.svg";
                break;
            }
            case false: {
                productsInFav.push({ ...product });
                imgIcon.src = "./icons/favorites-red.svg";
                setToLS(PRODUCT_IN_FAVORITE_KEY, productsInFav);
                break;
            }
        }
    };

    return (
        <div className="product">
            <div className="photo">
                <div className="top-bar">
                    <div className="labels">
                        {product.isSale && (
                            <div className="label sale">Sale</div>
                        )}
                        {product.isNew && <div className="label new">New</div>}
                    </div>
                    <div className="favorites">
                        <img
                            src={
                                checkProductInFavorites(product)
                                    ? "./icons/favorites-red.svg"
                                    : "./icons/favorites.svg"
                            }
                            onClick={(e) => {
                                addToFavorite(e.target, product);
                                dispatch({
                                    type: "set_favorites",
                                    payload: updateFavHeader(),
                                });
                            }}
                        />
                    </div>
                </div>
                <img className="product-image" src={product.image} />
            </div>
            <div className="info">
                <div className="name">{product.name}</div>
                <div className="price">
                    <div className="current-price">{"$" + product.price}</div>
                    {product.oldPrice && (
                        <div className="old-price">
                            {"$" + product.oldPrice}
                        </div>
                    )}
                </div>
                <button
                    className="buy-btn"
                    onClick={() => {
                        buyProduct(product);
                        dispatch({
                            type: "set_basket",
                            payload: updateBasketHeader(getFromLS),
                        });
                    }}
                >
                    Buy
                </button>
            </div>
        </div>
    );
};
