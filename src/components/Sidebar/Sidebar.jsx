import React from "react";
import CuisineFilter from "./CuisineFilter/CuisineFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import PaymentOptionsFilter from "./PaymentOptionsFilter/PaymentOptionsFilter";
import "./Sidebar.css";

function Sidebar(props) {
    return (
        <div className="sidebar">
            <CuisineFilter 
                selectedCuisines={props.selectedCuisines} 
                handleCuisineFilter={props.handleCuisineFilter} 
            />
            <RatingFilter 
                selectedRatings={props.selectedRatings} 
                handleRatingsFilter={props.handleRatingsFilter} 
            />
            <PaymentOptionsFilter 
                selectedPaymentOptions={props.selectedPaymentOptions} 
                handlePaymentOptionsFilter={props.handlePaymentOptionsFilter} 
            />
        </div>
    );
};

export default Sidebar;