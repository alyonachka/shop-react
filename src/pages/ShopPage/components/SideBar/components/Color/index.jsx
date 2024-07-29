import "./style.css";

export const Color = ({ color, currentFilter, dispatchFilters }) => {
    const colorName = color[0].toUpperCase() + color.slice(1);

    const onToggleColor = (e) => {
        if (e.target.checked) {
            dispatchFilters({
                type: "set_current_filter",
                payload: {
                    ...currentFilter,
                    colors: [...currentFilter.colors, colorName],
                },
            });
            return;
        }

        dispatchFilters({
            type: "set_current_filter",
            payload: {
                ...currentFilter,
                colors: currentFilter.colors.filter((el) => el !== colorName),
            },
        });
    };
    return (
        <div className="color">
            <input
                type="checkbox"
                className="color-checkbox"
                id={color}
                name={color}
                value={colorName}
                onClick={(e) => onToggleColor(e)}
            />
            <label htmlFor={color} className="color-name">
                {colorName}
            </label>
        </div>
    );
};
