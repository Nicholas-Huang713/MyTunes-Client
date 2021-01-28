import React from 'react'
import Row from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import './PlaylistCardContainerSm.scss';

export default function PlaylistCardContainerSm({children}) {
    return (
        <div className="playlist-card-container-sm">
            {children}
        </div>
    )
}
