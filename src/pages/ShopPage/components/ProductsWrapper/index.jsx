import {Products} from "./components/Products";
import "./style.css";
import { Sort } from "./components/Sort"
import { Pagination } from "./components/Pagination";

export const ProductsWrapper = () => {
    return (
        <div className="products-wrapper">
            <Sort />
            <Products />
            <Pagination />
        </div>
    );
};




