import { MenuItem } from "./components/MenuItem";
import "./style.css";
import { useContext } from "react";
import { PageContext } from "../../../../context/pageContext";

export const Menu = () => {
    const { setPage } = useContext(PageContext);

    const changeToShopPage = () => {
        setPage("shop");
    };

    return (
        <div className="menu">
            <MenuItem name="Home" />
            <MenuItem name="Pages" hasArrow />
            <MenuItem name="Shop" hasArrow action={changeToShopPage} />
            <MenuItem name="Blog" />
            <MenuItem name="Contact" />
        </div>
    );
};
