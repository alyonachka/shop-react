import "./style.css"
import { Button } from "../../../../components/Button";

export const NewsLetter = () => {
    return (
        <div className="newsletter-wrapper">
            <div className="newsletter">
                <div className="dots-icon">
                    <img src="./icons/dots-icon-newsletter.svg" alt="Dots icon" />
                </div>
                <div className="newsletter-content">
                    <div className="newsletter-info">
                        <div className="title">Newsletter</div>
                        <div className="text">
                            Be the first to hear about deals, offers and
                            upcoming collections.
                        </div>
                    </div>
                    <div className="newsletter-form">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="input"
                        />
                        <div className="button-wrapper">
                            <Button text="Subscribe"/>
                            <div className="vertical-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
