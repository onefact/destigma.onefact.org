import React from 'react';

const MapMarker = ({ name, id }) => {
    return (
        <>
            <a className="map-marker" href={id} rel="noreferrer noopener">
                <div className="map-marker-label">{name}</div>
            </a>
        </>
    );
}

export default MapMarker;
