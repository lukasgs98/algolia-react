import React from "react";
import ListItem from "../ListItem/ListItem";
import "./PaymentOptionsFilter.css";

function PaymentOptionsFilter(props) {
    return (
        <div className="payment-options-filter">
            <div className="payment-options-filter-title">Payment Options</div>
            <ul className="payment-options-filter-list">
                <ListItem key="0" value="Amex/American Express" onClick={props.handlePaymentOptionsFilter} textContent="Amex/American Express" />
                <ListItem key="1" value="Visa" onClick={props.handlePaymentOptionsFilter} textContent="Visa" />
                <ListItem key="2" value="Discover" onClick={props.handlePaymentOptionsFilter} textContent="Discover" />
                <ListItem key="3" value="MasterCard" onClick={props.handlePaymentOptionsFilter} textContent="MasterCard" />
                
            </ul>
        </div>
    );
};

export default PaymentOptionsFilter;