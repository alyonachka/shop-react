import "./style.css"

export const Product = ({ product, increaseProductCount, deleteProduct, decreaseProductCount }) => {

    return (
        <div className="product" key={product.id}>
            <img className="photo" src={product.image} alt="product photo" />
            <div className="product-info">
                <div className="title">{product.name}</div>
                <div className="price-wrapper">
                    <div className="price-and-quantity">
                        <div className="price">
                            {product.oldPrice && (
                                <div className="old-price">
                                    {`$${product.oldPrice}`}
                                </div>
                            )}
                            <div className="current-price">{`$${product.price}`}</div>
                        </div>
                        <div className="quantity">
                            <div
                                className="count-button"
                                onClick={() =>
                                    decreaseProductCount(
                                        product,
                                        product.quantity
                                    )
                                }
                            >
                                -
                            </div>
                            <div className="count">{product.quantity}</div>
                            <div
                                className="count-button"
                                onClick={() => increaseProductCount(product.id)}
                            >
                                +
                            </div>
                        </div>
                    </div>
                    <div className="total-price">
                        {`$${(product.quantity * product.price).toFixed(2)}`}
                    </div>
                </div>
                <div
                    className="close"
                    onClick={() => deleteProduct(product)}
                >
                    X
                </div>
            </div>
        </div>
    );
};
