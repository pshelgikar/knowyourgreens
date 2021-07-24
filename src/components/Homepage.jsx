export default function Homepage(props) {
    const {isLoggedIn} = props;
    if (isLoggedIn){
        return (
            <div className="pageContents">
                <h1>Welcome!</h1>
                <h1>Know Your Greens</h1>
                <div>Care instructions for your green housemates.</div>
            </div>
        );
    }
    return (
            <div className="pageContents">
                <h1>Know Your Greens</h1>
                <div>Care instructions for your green housemates.</div>
            </div>
        );  
}
