import "./style.css";

export const MenuItem = ({ name, active, action }) => {
    return (
        <div
            className={active ? "menu-item active" : "menu-item"}
            onClick={() => action(name)}
        >
            {name}
        </div>
    );
};
