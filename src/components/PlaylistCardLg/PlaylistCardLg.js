import React from 'react'
import Card from 'react-bootstrap/Card';

import './PlaylistCardLg.scss';

export default function PlaylistCardLg() {
    return (
        <Card className="playlist-card-lg">
            <Card.Img variant="top" src="https://cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}
