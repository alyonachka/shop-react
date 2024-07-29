import { ContentArea } from "../../components/ContentArea";
import { Header } from "../../components/Header";
import { SideBar } from "./components/SideBar";
import { ProductsWrapper } from "./components/ProductsWrapper";
import { ProductsContex } from "../../context/productsContex";
import { FilterContext } from "../../context/filterContext";
import {
    productsReducer,
    initialStateProducts,
} from "../../reducers/productsReducer";
import { useReducer } from "react";
import { Footer } from "../../components/Footer";
import { NewsLetter } from "./components/NewsLetter";
import { filterReducer, initialState } from "../../reducers/filterReducer";

const MENU_ITEMS = ["Home", {name: "Shop", active: true}]

export const Shop = () => {
    const [products, dispatchProducts] = useReducer(
        productsReducer,
        initialStateProducts
    );
    const [filters, dispatchFilters] = useReducer(filterReducer, initialState);

    return (
        <>
            <Header />
            <ContentArea title="Shop" menuItems={MENU_ITEMS}/>
            <div className="container">
                <div className="shop">
                    <ProductsContex.Provider
                        value={{ products, dispatchProducts }}
                    >
                        <FilterContext.Provider
                            value={{ filters, dispatchFilters }}
                        >
                            <SideBar />
                            <ProductsWrapper />
                        </FilterContext.Provider>
                    </ProductsContex.Provider>
                </div>
            </div>
            <NewsLetter />
            <Footer />
        </>
    );
};
