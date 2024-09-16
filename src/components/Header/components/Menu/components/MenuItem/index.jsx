import "./style.css";

export const MenuItem = ({ name, hasArrow, action }) => {
    return (
        <div className="menu-item" onClick={action}>
            <span>{name}</span>
            {hasArrow && (
                <>
                    <img
                        src="./icons/arrow.svg"
                        alt="arrow"
                        className="arrow-default"
                    />
                    <img
                        src="./icons/arrow-pink.svg"
                        alt="arrow"
                        className="arrow-hover"
                    />
                </>
            )}
        </div>
    );
};
