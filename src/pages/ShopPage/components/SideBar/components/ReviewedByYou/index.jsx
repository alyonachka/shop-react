import { useState, useEffect } from "react";
import "./style.css";

const getRandomProducts = (products, count) => {
    const newProducts = [...products];
    const randProducts = [];

    do {
        const randomNumber = Math.floor(Math.random() * newProducts.length);

        randProducts[randProducts.length] = newProducts.splice(
            randomNumber,
            1
        )[0];
    } while (randProducts.length < count);

    return randProducts;
};

export const ReviewedProducts = ({ products }) => {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        setRandomProducts(getRandomProducts(products.products, 3));
    }, []);

    return (
        <div className="reviewed-products">
            {randomProducts.map((product) => {
                return (
                    <div className="product" key={product.id}>
                        <div className="image">
                            <img
                                className="product-image"
                                src={product.image}
                                alt="product photo"
                            />
                        </div>
                        <div className="info">
                            <div className="name">{product.name}</div>
                            <div className="price">
                                <div className="current-price">
                                    {`$${product.price}`}
                                </div>
                                {product.oldPrice && (
                                    <div className="old-price">{`$${product.oldPrice}`}</div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
