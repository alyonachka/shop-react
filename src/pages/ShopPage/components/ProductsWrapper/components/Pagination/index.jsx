import { useContext, useEffect, useState } from "react";
import { ProductsContex } from "../../../../../../context/productsContex";
import {Page} from "./components/Page"
import "./style.css";

const PRODUCTS_PER_PAGE = 12;

export const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { products, dispatchProducts } = useContext(ProductsContex);
    const [pagination, setPagination] = useState([]);
    
    const firstIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const lastIndex = currentPage * PRODUCTS_PER_PAGE;

    const totalPages = Math.ceil(
        products.filteredProducts.length / PRODUCTS_PER_PAGE
    );

    const slicedProducts = products.filteredProducts.slice(
        firstIndex,
        lastIndex
    );

    useEffect(() => {
        setCurrentPage(1);
        const tempPagination = [];

        for (let i = 1; i <= totalPages; i++) {
            tempPagination.push(i);
        }

        setPagination(tempPagination);
    }, [products.filteredProducts]);

    useEffect(() => {
        dispatchProducts({
            type: "set_paginated_products",
            payload: slicedProducts,
        });
    }, [currentPage, products.filteredProducts]);

    return (
        <>
            {products.paginatedProducts.length !==0 && (
                <div className="pagination">
                    <div
                        className="button"
                        onClick={() => {
                            if (currentPage === 1) {
                                return;
                            }
                            setCurrentPage(currentPage - 1);
                        }}
                    >
                        <img
                            src="./icons/left-pagin-arrow.svg"
                            alt="left-arrow"
                        />
                    </div>
                    <div className="pages">
                        {pagination.map((page) => (
                            <Page
                                key={page}
                                page={page}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        ))}
                    </div>
                    <div
                        className="button"
                        onClick={() => {
                            if (currentPage === pagination.at(-1)) {
                                return;
                            }
                            setCurrentPage(currentPage + 1);
                        }}
                    >
                        <img
                            src="./icons/right-pagin-arrow.svg"
                            alt="right-arrow"
                        />
                    </div>
                </div>
            )}
        </>
    );
};
