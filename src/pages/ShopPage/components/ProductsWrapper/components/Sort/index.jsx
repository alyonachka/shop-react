import { useContext } from "react";
import "./style.css";
import { ProductsContex } from "../../../../../../context/productsContex";
import { applyFilter } from "../../../../../../utils/applyFilter";
import { FilterContext } from "../../../../../../context/filterContext";

export const Sort = () => {
    const { products, dispatchProducts } = useContext(ProductsContex);
    const { filters } = useContext(FilterContext);

    // const sort = (products, sort) => {
    //     const filteredProducts = applyFilter(
    //         products.products,
    //         products.search,
    //         filters.currentFilter,
    //         sort
    //     );

    //     dispatchProducts({
    //         type: "set_products",
    //         payload: [...filteredProducts],
    //     });
    // };

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
                        // sort(products, e.target.value);
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
