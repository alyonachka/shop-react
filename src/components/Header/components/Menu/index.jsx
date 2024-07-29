import { MenuItem } from "./components/MenuItem";
import "./style.css";

export const Menu = () => {
    //TODO сделать shop active сразу
    return (
        <div className="menu">
            <MenuItem name="Home" />
            <MenuItem name="Pages" hasArrow />
            <MenuItem name="Shop" hasArrow/>
            <MenuItem name="Blog" />
            <MenuItem name="Contact" />
        </div>
    );
};
