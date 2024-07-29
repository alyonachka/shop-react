import "./style.css"

export const SideBarItem = ({title, children}) => {
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">{title}</div>
            <div className="sidebar-content">{children}</div>
        </div>
    );
};
