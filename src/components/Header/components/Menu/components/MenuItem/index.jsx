import "./style.css";

export const MenuItem = ({ name, hasArrow }) => {
    return (
        <div className="menu-item">
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
