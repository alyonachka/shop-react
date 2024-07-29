import { useContext } from "react";
import { HeaderIcon } from "./components/HeaderIcon";
import "./style.css";
import { HeaderContext } from "../../../../context/headerContext";

export const RightSide = () => {
    const { state } = useContext(HeaderContext);

    return (
        <div className="right-side">
            <HeaderIcon img="./icons/search.svg" alt="search" />
            <HeaderIcon img="./icons/profile.svg" alt="profile" />
            <HeaderIcon
                img="./icons/favorites.svg"
                alt="favorites"
                counter={state.favoritesCounter}
            />
            <HeaderIcon
                img="./icons/cart.svg"
                alt="cart"
                counter={state.basketCounter}
            />
        </div>
    );
};
