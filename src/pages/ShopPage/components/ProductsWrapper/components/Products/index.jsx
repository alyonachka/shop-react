import { Product } from "./components/Product";
import { useContext } from "react";
import { HeaderContext } from "../../../../../../context/headerContext";
import { useLocalStorage } from "../../../../../../hooks/useLocalStorage";
import { ProductsContex } from "../../../../../../context/productsContex";
import "./style.css";

export const Products = () => {
    const { dispatch } = useContext(HeaderContext);
    const { getFromLS, setToLS, removeFromLS } = useLocalStorage();
    const { products } = useContext(ProductsContex);

    return (
        <div className="products">
            {products.paginatedProducts.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    dispatch={dispatch}
                    getFromLS={getFromLS}
                    setToLS={setToLS}
                    removeFromLS={removeFromLS}
                />
            ))}
        </div>
    );
};
