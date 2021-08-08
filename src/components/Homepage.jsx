import React from 'react';

export default function Homepage(props) {
    const {isLoggedIn} = props;
    if (isLoggedIn){
        return (
            <div className="pageContents body-text homepage-contents">
                <span className="image-credit">Photo by <a href="https://unsplash.com/@kaufmann_mercantile?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kaufmann Mercantile</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></span>
                <h1>Welcome!</h1>
                <div>Not sure how to care for your green housemates?</div>
                <h1>Know Your Greens</h1>
                <div>Enter a name to find out how to take care of your plants!</div>
            </div>
        );
    }
    return (
            <div className="pageContents body-text homepage-contents">
                <span className="image-credit">Photo by Ksenia Chernaya from Pexels</span>
                <div>Not sure how to care for your green housemates?</div>
                <h1>Know Your Greens</h1>
                <div>Enter a name to find out how to take care of your plants!</div>
            </div>
        );  
}
