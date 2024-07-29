export const CategoryMenuItem = ({category, activeCategory, currentFilter, dispatchFilters}) => {
    const clickCategory = (category) => {
        if (category === activeCategory) {
            dispatchFilters({
                type: 'set_current_filter',
                payload: {
                    ...currentFilter,
                    category: "All"
                }
            });
            return;
        }

        dispatchFilters({
            type: 'set_current_filter',
            payload: {
                ...currentFilter,
                category
            }
        })
    };

    return (
        <li
            className={activeCategory === category ? "item active" : "item"}
            onClick={(e) => clickCategory(category)}
        >
            {category}
        </li>
    );
};
