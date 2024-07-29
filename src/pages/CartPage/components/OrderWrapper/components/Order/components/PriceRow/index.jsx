import "./style.css"

export const PriceRow = ({name, data, dataClass, additionalClass, children}) => {
    return (
        <div className={`price-row ${additionalClass}`}>
            <div className="name">{name}{children}</div>
            <div className={dataClass}>{data}</div>
        </div>
    );
};
