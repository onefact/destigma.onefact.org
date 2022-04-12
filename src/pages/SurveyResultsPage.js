import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

const MAP_CENTER = {
    lat: 40.815832,
    lng: -73.959502
};

const MAP_ZOOM = 11;

const CLINIC_LOCATIONS = [
    {
        lat: 40.751340,
        lng: -73.980740,
        name: 'Pure OBGYN',
        link: 'https://pureobgyn.com/'
    },
    {
        lat: 40.6714341,
        lng: -73.9774195,
        name: 'FemGYN: For Her Wellness',
        link: 'https://www.femgynwellness.com/'
    }
];

const SurveyResultsPage = ({ results }) => {
    return (
        <div>
            Re recommend you get tested for the following tests:
            <p>{JSON.stringify(results)}</p>
            <div>
                <p>Go over here to become not dead!!!</p>
                <div style={{ height: '60vh', width: '60vw' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBMpoN1LPS6i3QBfQ5FcBUnFZsIwmKTh18' }}
                        defaultCenter={MAP_CENTER}
                        defaultZoom={MAP_ZOOM}
                    >
                        {
                            CLINIC_LOCATIONS.map((clinic) => (
                                <MapMarker lat={clinic.lat} lng={clinic.lng} name={clinic.name} link={clinic.link} />
                            ))
                        }
                    </GoogleMapReact>
                </div>
            </div>
        </div >
    );
}

export default SurveyResultsPage;
