import "./style.css"

export const HeaderIcon = ( {img, alt, counter}) => {

    return (
        <div className="header-icon">
            <img src={img} alt={alt} />
            {counter !== undefined && <div className="counter">{counter}</div>}
        </div>
    );
};
