import { LogoContainer } from "./components/LogoContainer";
import { Menu } from "./components/Menu";
import { RightSide } from "./components/RightSide";
import "./style.css";

export const Header = () => {
    return (
        <header className="header">
            <div className="left-side">
                <LogoContainer />
                <Menu />
            </div>
            <RightSide />
        </header>
    );
};
