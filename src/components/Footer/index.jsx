import "./style.css";
import { Item } from "./components/Item";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-info">
                    <div className="column column-1">
                        <div className="logo">
                            <img src="./icons/logo.svg" alt="logo" />
                        </div>
                        <div className="about-brand">
                            Cillum eu id enim aliquip aute ullamco anim. Culpa
                            deserunt nostrud excepteur voluptate.
                        </div>
                        <div className="find-us">
                            <div className="find-us-text">Find us here:</div>
                            <div className="find-us-links">
                                <div className="find-us-link">
                                    <a href="">FB</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">TW</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">INS</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">PT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column column-2">
                        <div className="title">About</div>
                        <ul className="custom-list">
                            <Item title="About us" />
                            <Item title="Collections" />
                            <Item title="Shop" />
                            <Item title="Blog" />
                            <Item title="Contact us" />
                        </ul>
                    </div>
                    <div className="column column-3">
                        <div className="title">Useful links</div>
                        <ul className="custom-list">
                            <Item title="Privacy Policy" />
                            <Item title="Terms of use" />
                            <Item title="Support" />
                            <Item title="Shipping details" />
                            <Item title="FAQs" />
                        </ul>
                    </div>
                    <div className="column column-4">
                        <div className="title">Newsletter</div>
                        <div className="newsletter-text">
                            Subscribe to be the first to hear about deals,
                            offers and upcoming collections.
                        </div>
                        <div className="newsletter-form">
                            <form action="">
                                <label>
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        className="input"
                                    />
                                    <img
                                        src="./icons/send.svg"
                                        alt="send"
                                        className="send-icon"
                                    />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div>© All right reserved. Fashionee 2020</div>
                    <div className="payment-methods-container">
                        <div>Payment methods:</div>
                        <div className="payment-methods">
                            <div className="payment-method">
                                <img src="./icons/visa.svg" alt="visa" />
                            </div>
                            <div className="payment-method">
                                <img
                                    src="./icons/master-card.svg"
                                    alt="master-card"
                                />
                            </div>
                            <div className="payment-method">
                                <img src="./icons/paypal.svg" alt="paypal" />
                            </div>
                            <div className="payment-method">
                                <img src="./icons/paoneer.svg" alt="paoneer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pic-footer-left">
                <img
                    src="./icons/dots-icon-footer-left.svg"
                    alt="Dots picture left side"
                />
            </div>
            <div className="pic-footer-right">
                <img
                    src="./icons/dots-icon-footer-right.svg"
                    alt="Dots picture right side"
                />
            </div>
        </footer>
    );
};
