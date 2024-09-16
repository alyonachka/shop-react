import { useContext, useEffect, useState } from "react";
import { useDebounce } from "../../../../hooks/useDebounce";
import { ProductsContex } from "../../../../context/productsContex";
import { FilterContext } from "../../../../context/filterContext";
import "./style.css";
import { SideBarItem } from "./components/SideBarItem";
import { CategoryMenuItem } from "./components/CategoryMenuItem";
import { Color } from "./components/Color";
import { ReviewedProducts } from "./components/ReviewedByYou";
import { compareArrays } from "../../../../utils/compareArrays";
import { applyFilter } from "../../../../utils/applyFilter";

export const SideBar = () => {
    const { products, dispatchProducts } = useContext(ProductsContex);
    const [disabled, setDisabled] = useState(true);
    const { filters, dispatchFilters } = useContext(FilterContext);
    const currentFilter = filters.currentFilter;
    const oldFilter = filters.oldFilter;
    const [searchValue, setSearchValue] = useState("");
    const debaunceValue = useDebounce(searchValue, 1000);

    useEffect(() => {
        if (
            currentFilter.category === oldFilter.category &&
            currentFilter.price.min === oldFilter.price.min &&
            currentFilter.price.max === oldFilter.price.max &&
            compareArrays(currentFilter.colors, oldFilter.colors)
        ) {
            setDisabled(true);
            return;
        }
        setDisabled(false);
    }, [currentFilter]);

    useEffect(() => {
        const filteredProducts = applyFilter(
            products.products,
            products.search,
            currentFilter,
            products.sort
        );

        dispatchProducts({
            type: "set_filtered_products",
            payload: filteredProducts,
        });
    }, [products.search, products.sort, oldFilter]);

    const onToggleBtn = () => {
        dispatchFilters({
            type: "set_old_filter",
            payload: {
                category: currentFilter.category,
                price: { ...currentFilter.price },
                colors: [...currentFilter.colors],
            },
        });

        setDisabled(true);
    };

    useEffect(() => {
        dispatchProducts({
            type: "set_search",
            payload: debaunceValue,
        });
    }, [debaunceValue]);

    return (
        <div className="sidebar">
            <div className="search">
                <label>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchValue}
                        className="input search-row"
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <img
                        src="./icons/search.svg"
                        alt="search icon"
                        className="search-icon"
                    />
                </label>
            </div>
            <SideBarItem title="Categories">
                <ul className="custom-list">
                    <CategoryMenuItem
                        activeCategory={currentFilter.category}
                        category="All"
                        currentFilter={currentFilter}
                        dispatchFilters={dispatchFilters}
                    />
                    <CategoryMenuItem
                        activeCategory={currentFilter.category}
                        category="Men"
                        currentFilter={currentFilter}
                        dispatchFilters={dispatchFilters}
                    />
                    <CategoryMenuItem
                        activeCategory={currentFilter.category}
                        category="Women"
                        currentFilter={currentFilter}
                        dispatchFilters={dispatchFilters}
                    />
                    <CategoryMenuItem
                        activeCategory={currentFilter.category}
                        category="Accessories"
                        currentFilter={currentFilter}
                        dispatchFilters={dispatchFilters}
                    />
                    <CategoryMenuItem
                        activeCategory={currentFilter.category}
                        category="New Arrivals"
                        currentFilter={currentFilter}
                        dispatchFilters={dispatchFilters}
                    />
                </ul>
            </SideBarItem>
            <SideBarItem title="Price">
                <div className="price-bar">
                    <input
                        type="text"
                        placeholder="0"
                        className="input js-price-min"
                        onChange={(e) =>
                            dispatchFilters({
                                type: "set_current_filter",
                                payload: {
                                    ...currentFilter,
                                    price: {
                                        ...currentFilter.price,
                                        min: Number(e.target.value),
                                    },
                                },
                            })
                        }
                    />
                    <input
                        type="text"
                        placeholder="200"
                        className="input js-price-max"
                        onChange={(e) =>
                            dispatchFilters({
                                type: "set_current_filter",
                                payload: {
                                    ...currentFilter,
                                    price: {
                                        ...currentFilter.price,
                                        max: Number(e.target.value),
                                    },
                                },
                            })
                        }
                    />
                </div>
            </SideBarItem>
            <SideBarItem title="Color">
                <div className="colors">
                    <Color
                        color="black"
                        currentFilter={currentFilter}
                        dispatchFilters={dispatchFilters}
                    />
                    <Color
                        color="blue"
                        currentFilter={currentFilter}
                        dispatchFilters={dispatchFilters}
                    />
                    <Color
                        color="red"
                        currentFilter={currentFilter}
                        dispatchFilters={dispatchFilters}
                    />
                    <Color
                        color="yellow"
                        currentFilter={currentFilter}
                        dispatchFilters={dispatchFilters}
                    />
                    <Color
                        color="green"
                        currentFilter={currentFilter}
                        dispatchFilters={dispatchFilters}
                    />
                </div>
            </SideBarItem>
            <div className="sidebar-item">
                <div className="button-wrapper">
                    <button
                        className="button"
                        disabled={disabled}
                        onClick={onToggleBtn}
                    >
                        Apply filter
                    </button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <SideBarItem title="Reviewed By You">
                <ReviewedProducts products={products} />
            </SideBarItem>
            <div>
                <a href="#">
                    <img
                        src="./images/season-sale-baner.svg"
                        alt="season sale baner"
                    />
                </a>
            </div>
        </div>
    );
};
