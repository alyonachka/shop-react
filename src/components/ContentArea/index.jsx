import "./style.css";
import { MenuItem } from "./components/MenuItem";
import { useContext } from "react";
import { PageContext } from "../../context/pageContext";

export const ContentArea = ({ title, menuItems }) => {
    const { page, setPage } = useContext(PageContext);
    const changePage = (name) => {
        if (name.toLowerCase() === page) {
            return;
        }

        switch (name) {
            case "Shop":
                setPage("shop");
                break;
            case "Cart":
                setPage("cart");
                break;
        }
    };

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
                                        action={changePage}
                                    />
                                ) : (
                                    <MenuItem
                                        name={menu}
                                        key={ind}
                                        action={changePage}
                                    />
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
