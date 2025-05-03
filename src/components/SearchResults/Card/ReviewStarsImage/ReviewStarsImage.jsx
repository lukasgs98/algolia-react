import React from "react";

import zero_stars from "/assets/rating_0_of_5.svg";
import one_star from "/assets/rating_1_of_5.svg";
import two_stars from "/assets/rating_2_of_5.svg";
import three_stars from "/assets/rating_3_of_5.svg";
import four_stars from "/assets/rating_4_of_5.svg";
import five_stars from "/assets/rating_5_of_5.svg";

function ReviewStarsImage(props) {
            if (props.numberStars < 1) {
                return <img alt="zero out of five stars" src={zero_stars} />
            } else if (props.numberStars < 2) {
                return <img alt="one out of five stars" src={one_star} />
            } else if (props.numberStars < 3) {
                return <img alt="two out of five stars" src={two_stars} />
            } else if (props.numberStars < 4) {
                return <img alt="three out of five stars" src={three_stars} />
            } else if (props.numberStars < 5) {
                return <img alt="four out of five stars" src={four_stars} />
            } else {
                return <img alt="five out of five stars" src={five_stars} />
            }
        };

export default ReviewStarsImage;