import "./style.css"

export const MenuItem = ({ name, active }) => {
    return (
        <div className={active ? "menu-item active" : "menu-item"}>{name}</div>
    );
};
