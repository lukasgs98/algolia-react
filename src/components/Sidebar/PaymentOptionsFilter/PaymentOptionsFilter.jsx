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
                    className={props.selectedPaymentOptions.includes("AMEX") ? "payment-options-filter-list-item selected" : "payment-options-filter-list-item"}
                    onClick={props.handlePaymentOptionsFilter} 
                    textContent="American Express" 
                />
                <ListItem 
                    id="1" 
                    value="Visa" 
                    className={props.selectedPaymentOptions.includes("Visa") ? "payment-options-filter-list-item selected" : "payment-options-filter-list-item"}
                    onClick={props.handlePaymentOptionsFilter} 
                    textContent="Visa" 
                />
                <ListItem 
                    id="2" 
                    value="Carte Blanche"
                    className={props.selectedPaymentOptions.includes("Discover") ? "payment-options-filter-list-item selected" : "payment-options-filter-list-item"}
                    onClick={props.handlePaymentOptionsFilter} 
                    textContent="Carte Blanche" 
                />
                <ListItem 
                    id="3" 
                    value="Diners Club"
                    className={props.selectedPaymentOptions.includes("Discover") ? "payment-options-filter-list-item selected" : "payment-options-filter-list-item"}
                    onClick={props.handlePaymentOptionsFilter} 
                    textContent="Diners Club" 
                />
                <ListItem 
                    id="4" 
                    value="MasterCard"
                    className={props.selectedPaymentOptions.includes("MasterCard") ? "payment-options-filter-list-item selected" : "payment-options-filter-list-item"}
                    onClick={props.handlePaymentOptionsFilter} 
                    textContent="MasterCard" 
                />
            </ul>
        </div>
    );
};

export default PaymentOptionsFilter;