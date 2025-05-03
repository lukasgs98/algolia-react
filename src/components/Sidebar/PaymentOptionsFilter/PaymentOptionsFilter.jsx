import React from "react";
import "./PaymentOptionsFilter.css";

function PaymentOptionsFilter() {
    return (
        <div class="payment-options-filter">
            <div class="payment-options-filter-title">Payment Options</div>
            <div class="payment-options-filter-list">
                <div>Amex/American Express</div>
                <div>Visa</div>
                <div>Discover</div>
                <div>MasterCard</div>
            </div>
        </div>
    );
};

export default PaymentOptionsFilter;