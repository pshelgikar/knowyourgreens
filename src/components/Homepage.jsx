import React from 'react';

export default function Homepage(props) {
    const {isLoggedIn} = props;
    if (isLoggedIn){
        return (
            <div className="pageContents body-text homepage-contents">
                <h1>Welcome!</h1>
                <h1>Know Your Greens</h1>
                <div>Care instructions for your green housemates.</div>
                <div>Worried about your plants? Not sure how to care for your new green housemates?</div>
                <div>Enter a name to find out how to take care of your plants!</div>
            </div>
        );
    }
    return (
            <div className="pageContents body-text homepage-contents">
                <h1>Know Your Greens</h1>
                <div>Care instructions for your green housemates.</div>
                <div>Worried about your plants? Not sure how to care for your new green housemates?</div>
                <div>Enter a name to find out how to take care of your plants!</div>
            </div>
        );  
}
