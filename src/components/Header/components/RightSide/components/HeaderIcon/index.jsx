import "./style.css"

export const HeaderIcon = ( {img, alt, counter, action}) => {

    return (
        <div className="header-icon" onClick={action}>
            <img src={img} alt={alt} />
            {counter !== undefined && <div className="counter">{counter}</div>}
        </div>
    );
};
