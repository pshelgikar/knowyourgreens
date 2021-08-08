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
                        <h4><i class="bi bi-brightness-high"></i> Sunlight</h4>
                        <div className="content">{sunlight}</div>
                        <h4><i class="bi bi-water"></i> Water</h4>
                        <div className="content">{water}</div>
                        <h4><i class="bi bi-cloud-fill"></i> Humidity</h4>
                        <div className="content">{humidity}</div>
                        <h4><i class="bi bi-exclamation-diamond"></i> Toxicity</h4>
                        <div className="content">{toxicity}</div>
                        <h4><i class="bi bi-thermometer-half"></i> Temperature</h4>
                        <div className="content">{temperature}</div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}