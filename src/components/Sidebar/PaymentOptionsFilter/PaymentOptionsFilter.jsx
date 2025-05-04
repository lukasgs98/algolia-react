import React from "react";
import "./PaymentOptionsFilter.css";

function PaymentOptionsFilter() {
    return (
        <div className="payment-options-filter">
            <div className="payment-options-filter-title">Payment Options</div>
            <div className="payment-options-filter-list">
                <div>Amex/American Express</div>
                <div>Visa</div>
                <div>Discover</div>
                <div>MasterCard</div>
            </div>
        </div>
    );
};

export default PaymentOptionsFilter;