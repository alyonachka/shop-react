import { OrderContext } from "../../../../context/orderContext";
import "./style.css";
import { useState, useContext } from "react";
import { FindUsLink } from "./components/FindUsLink";
const PROMOCODES = {
    summer10: 0.1,
    best_kyrator: 0.5,
};

export const PromoCode = () => {
    const [promo, setPromo] = useState("");
    const { dispatchOrderInfo } = useContext(OrderContext);

    return (
        <div className="promo-code-wrapper">
            <div className="info">
                <div className="title">You Have A Promo Code?</div>
                <div className="description">
                    To receive up-to-date promotional codes, subscribe to us on
                    social networks.
                </div>
            </div>
            <div className="promo-code">
                <input
                    type="text"
                    name="promo-code"
                    className="input"
                    placeholder="Enter promo code"
                    onChange={(e) => setPromo(e.target.value)}
                />
                <div
                    className="button-wrapper"
                    onClick={() => {
                        PROMOCODES[promo]
                            ? dispatchOrderInfo({
                                  type: "set_discount",
                                  payload: PROMOCODES[promo],
                              })
                            : dispatchOrderInfo({ type: "reset_discount" });
                    }}
                >
                    <button className="button">
                        <img src="./icons/button-arrow.svg" alt="Arrow icon" />
                    </button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="find-us">
                <div className="find-us-text">Find us here:</div>
                <div className="find-us-links">
                    <FindUsLink name="FB" />
                    <div className="line" />
                    <FindUsLink name="TW" />
                    <div className="line" />
                    <FindUsLink name="INS" />
                    <div className="line" />
                    <FindUsLink name="PT" />
                </div>
            </div>
        </div>
    );
};
