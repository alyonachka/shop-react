import { useContext } from "react";
import "./style.css";
import { ProductsContex } from "../../../../../../context/productsContex";

export const Sort = () => {
    const { products, dispatchProducts } = useContext(ProductsContex);

    return (
        <div className="sort-and-count">
            <div className="products-count">
                There are
                <span className="bold">
                    {products.filteredProducts
                        ? ` ${products.filteredProducts.length} `
                        : " loading... "}
                </span>
                products in this category
            </div>
            <div className="sort">
                <select
                    className="input"
                    id="sort"
                    onChange={(e) => {
                        dispatchProducts({
                            type: "set_sort",
                            payload: e.target.value,
                        });
                    }}
                >
                    <option value="">relevance</option>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                </select>
            </div>
        </div>
    );
};
