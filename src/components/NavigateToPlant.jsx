import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function NavigateToPlant(props){
    const {plant} = props;
    const history = useHistory();
    const onShowDetails = () => {
        history.push(`/plants/${plant}`) 
    }

    return(
        <div className="pageContents">
            <Button onClick={onShowDetails} size="sm">View Varietals</Button>
        </div>
    )
}