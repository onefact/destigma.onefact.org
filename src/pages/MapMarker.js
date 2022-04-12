import React from 'react';

const MapMarker = ({ name, link }) => {
    return (
        <>
            <a className="map-marker" href={link} target="_blank" rel="noreferrer noopener">
                <div className="map-marker-label">{name}</div> 
            </a>
        </>
    );
}

export default MapMarker;