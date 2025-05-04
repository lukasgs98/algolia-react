import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import Sidebar from "./Sidebar/Sidebar";
import SearchResults from "./SearchResults/SearchResults";
import "./App.css"

function App() {
    const results = {
        "metadata": {
          "query": "restaurants near me",
          "numberOfHits": 3,
          "searchTimeSeconds": 0.45
        },
        "hits": [
            {
              name: 'The Edgewater Grill',
              address: '861 West Harbor Dr',
              area: 'San Diego',
              city: 'San Diego',
              country: 'US',
              image_url: 'https://www.opentable.com/img/restimages/99943.jpg',
              mobile_reserve_url: 'http://mobile.opentable.com/opentable/?restId=99943',
              payment_options: [Array],
              phone: '6192327581',
              postal_code: '92101',
              price: 2,
              reserve_url: 'http://www.opentable.com/single.aspx?rid=99943',
              state: 'CA',
              _geoloc: [Object],
              food_type: 'American',
              stars_count: '3.9',
              reviews_count: '186',
              neighborhood: 'Downtown / Gaslamp',
              phone_number: '(619) 232-7581',
              price_range: '$30 and under',
              dining_style: 'Casual Dining',
              objectID: '99943',
              _highlightResult: [Object]
            },
            {
              name: 'Harbor House',
              address: '831 W Harbor Dr',
              area: 'San Diego',
              city: 'San Diego',
              country: 'US',
              image_url: 'https://www.opentable.com/img/restimages/99940.jpg',
              mobile_reserve_url: 'http://mobile.opentable.com/opentable/?restId=99940',
              payment_options: [Array],
              phone: '6192321141x',
              postal_code: '92101',
              price: 2,
              reserve_url: 'http://www.opentable.com/single.aspx?rid=99940',
              state: 'CA',
              _geoloc: [Object],
              food_type: 'Seafood',
              stars_count: '4.1',
              reviews_count: '420',
              neighborhood: 'Downtown / Gaslamp',
              phone_number: '(619) 232-1141',
              price_range: '$30 and under',
              dining_style: 'Casual Dining',
              objectID: '99940',
              _highlightResult: [Object]
            }
        ]
      }

    const [selectedCuisines, setSelectedCuisines] = React.useState([]);
    function filterCuisine(value) { 
        const cuisine = value;
        setSelectedCuisines(prevSelection => {
            if (prevSelection.includes(cuisine)) {
                return prevSelection.filter(item => item !== cuisine);
            } else {
                return [...prevSelection, cuisine];
            }
        });
        console.log(selectedCuisines);
    };
    
    const [selectedRatings, setSelectedRatings] = React.useState([]);
    function filterRatings(value) {
        const rating = value;
        setSelectedRatings(prevSelection  => {
            if (prevSelection.includes(rating)) {
                return prevSelection.filter(item => item !== rating);
            } else {
                return [...prevSelection, rating];
            }
        });
        console.log(selectedRatings);
    };
    
    const [selectedPaymentOptions, setSelectedPaymentOptions] = React.useState([]);
    function filterPaymentOptions(value) {
        const paymentOption = value;
        setSelectedPaymentOptions(prevSelection  => {
            if (prevSelection.includes(paymentOption)) {
                return prevSelection.filter(item => item !== paymentOption);
            } else {
                return [...prevSelection, paymentOption];
            }
        });
        console.log(selectedPaymentOptions);
    };

    return (
        <>
            <div className="top-container">
                <Searchbar placeholder="Search for restaurants by name, cuisine or location"/>
            </div>
            <div className="middle-container">
                <Sidebar 
                    handleCuisineFilter={filterCuisine} 
                    handleRatingsFilter={filterRatings}
                    handlePaymentOptionsFilter={filterPaymentOptions} 
                />
                <SearchResults results={results} />
            </div>
        </>
    )
}

export default App;