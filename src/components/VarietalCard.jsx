import React from "react";
import {Accordion} from 'react-bootstrap';
export default function VarietalCard(props){
    const {name,sunlight,water,humidity,toxicity,temperature} = props;
    return(
        <div className='background'>
            <Accordion className="accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{name}</Accordion.Header>
                    <Accordion.Body className='varietal-card'>
                        <h4>Sunlight</h4>
                        <div>{sunlight}</div>
                        <h4>Water</h4>
                        <div>{water}</div>
                        <h4>Humidity</h4>
                        <div>{humidity}</div>
                        <h4>Toxicity</h4>
                        <div>{toxicity}</div>
                        <h4>Temperature</h4>
                        <div>{temperature}</div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}