import React from "react";
import ListItem from "../ListItem/ListItem";
import "./PaymentOptionsFilter.css";

function PaymentOptionsFilter(props) {
    return (
        <div className="payment-options-filter">
            <div className="payment-options-filter-title">Payment Options</div>
            <ul className="payment-options-filter-list">
                <ListItem 
                    id="0" 
                    value="AMEX"
                    className={props.selectedPaymentOptions.includes("AMEX") ? "selected" : null}
                    onClick={props.handlePaymentOptionsFilter} 
                    textContent="American Express" 
                />
                <ListItem 
                    id="1" 
                    value="Visa" 
                    className={props.selectedPaymentOptions.includes("Visa") ? "selected" : null}
                    onClick={props.handlePaymentOptionsFilter} 
                    textContent="Visa" 
                />
                <ListItem 
                    id="2" 
                    value="Discover"
                    className={props.selectedPaymentOptions.includes("Discover") ? "selected" : null}
                    onClick={props.handlePaymentOptionsFilter} 
                    textContent="Discover" 
                />
                <ListItem 
                    id="3" 
                    value="MasterCard"
                    className={props.selectedPaymentOptions.includes("MasterCard") ? "selected" : null}
                    onClick={props.handlePaymentOptionsFilter} 
                    textContent="MasterCard" 
                />
            </ul>
        </div>
    );
};

export default PaymentOptionsFilter;