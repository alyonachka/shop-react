export const applyFilter = (products, search, currentFilter, sort) => {
    let filteredProducts = [...products];

    if (search) {
        filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (currentFilter.category !== "All") {
        filteredProducts = filteredProducts.filter((product) =>
            product.categories.includes(currentFilter.category)
        );
    }

    if (currentFilter.price.min || currentFilter.price.max) {
        filteredProducts = filteredProducts.filter((product) => {
            return (
                product.price >= currentFilter.price.min &&
                product.price <= currentFilter.price.max
            );
        });
    }

    if (currentFilter.colors.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
            return currentFilter.colors.includes(product.color);
        });
    }

    if (sort) {
        filteredProducts.sort((a, b) => {
            if (sort === "ASC") {
                if (a.name > b.name) return 1;
                if (a.name === b.name) return 0;
                if (a.name < b.name) return -1;
            }
            if (a.name > b.name) return -1;
            if (a.name === b.name) return 0;
            if (a.name < b.name) return 1;
        });
    }

    return filteredProducts;
}