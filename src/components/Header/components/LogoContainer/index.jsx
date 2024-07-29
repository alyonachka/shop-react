import "./style.css";

export const LogoContainer = () => {
    return (
        <div className="logo-container">
            <div className="burger-menu">
                <input
                    type="checkbox"
                    id="burger-checkbox"
                    className="burger-checkbox"
                />
                <label className="burger" htmlFor="burger-checkbox"></label>
            </div>
            <div className="logo">
                <img src="./icons/logo.svg" alt="logo" />
            </div>
        </div>
    );
};
