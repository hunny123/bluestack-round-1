import React from 'react'
import {  Row, Col } from 'reactstrap';

export default function CampaignCard(props) {
    const { name , image_url,region} = props
    return (
        
            <Row>
                <Col xs={3} ><img className="mt-1" src={image_url} alt={name+"img"}/></Col>
                <Col xs={9}>{name} <br/> {region}</Col>
            </Row>
        
    )
}
