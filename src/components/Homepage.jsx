import React from 'react';

export default function Homepage(props) {
    const {isLoggedIn} = props;
    if (isLoggedIn){
        return (
            <div className="pageContents body-text homepage-contents">
                <h1>Welcome!</h1>
                <div>Not sure how to care for your green housemates?</div>
                <h1>Know Your Greens</h1>
                <div>Enter a name to find out how to take care of your plants!</div>
            </div>
        );
    }
    return (
            <div className="pageContents body-text homepage-contents">
                <div>Not sure how to care for your green housemates?</div>
                <h1>Know Your Greens</h1>
                <div>Enter a name to find out how to take care of your plants!</div>
            </div>
        );  
}
