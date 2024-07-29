import "./style.css";
import { MenuItem } from "./components/MenuItem";

export const ContentArea = ({ title, menuItems }) => {
    return (
        <div className="page-header">
            <div className="left-block">
                <div className="pic-header">
                    <img
                        src="./icons/dots-icon-header.svg"
                        alt="Dots picture"
                    />
                </div>
                <div className="title-menu-wrapper">
                    <div className="content">
                        <div className="title">{title}</div>
                        <div className="menu">
                            {menuItems.map((menu, ind) =>
                                typeof menu === "object" ? (
                                    <MenuItem
                                        name={menu.name}
                                        active={menu.active}
                                        key={ind}
                                    />
                                ) : (
                                    <MenuItem name={menu} key={ind}/>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-block"></div>
        </div>
    );
};
