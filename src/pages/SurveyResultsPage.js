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
        lat: 40.75153282302176,
        lng: -73.98079679718066,
        name: 'Pure OBGYN',
        link: 'https://pureobgyn.com/'
    },
    {
        lat: 40.74041007836597,
        lng: -73.99294473765816,
        name: 'Pure OBGYN',
        link: 'https://pureobgyn.com/'
    },
    {
        lat: 40.67611154741919,
        lng: -73.97229975300368,
        name: 'Pure OBGYN',
        link: 'https://pureobgyn.com/'
    },
    {
        lat: 40.76568345636664,
        lng: -73.9611212953291,
        name: 'Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc'
    },
    {
        lat: 40.75989621484998,
        lng: -73.97750562416519,
        name: 'Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc'
    },
    {
        lat: 40.72679196544538,
        lng: -73.86054742416628,
        name: 'Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc'
    },
    {
        lat: 40.737705071419654,
        lng: -73.61658755300176,
        name: 'Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc'
    },
    {
        lat: 40.76690223113335,
        lng: -73.69256282416494,
        name: 'Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc'
    },
    {
        lat: 40.84032340566179,
        lng: -73.31165303765515,
        name: 'Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc'
    },
    {
        lat: 40.62398884183503,
        lng: -73.72258515300524,
        name: 'Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc'
    },
    {
        lat: 40.740655720006956,
        lng: -73.98771936649403,
        name: 'Tia',
        link: 'https://www.asktia.com/'
    },
    {
        lat: 41.01436903958884,
        lng: -73.8622985953215,
        name: 'Symphony Medical',
        link: 'https://www.symphonymed.org/'
    },
    {
        lat: 40.968977548313454,
        lng: -73.88652841066633,
        name: 'Symphony Medical',
        link: 'https://www.symphonymed.org/'
    },
    {
        lat: 40.94024895402439,
        lng: -73.89165679532394,
        name: 'Symphony Medical',
        link: 'https://www.symphonymed.org/'
    },
    {
        lat: 40.71447472038008,
        lng: -74.01118862416662,
        name: 'Elitra Health',
        link: 'https://www.elitrahealth.com/'
    },
    {
        lat: 40.78609891516861,
        lng: -73.95270115300028,
        name: 'Village Obstretics',
        link: 'https://villageobstetrics.com/'
    },
    {
        lat: 40.739146194792305,
        lng: -73.99838025730388,
        name: 'Village Obstretics',
        link: 'https://villageobstetrics.com/'
    },
    {
        lat: 40.71584355281667,
        lng: -73.99806985300236,
        name: 'Bayard Street OBGYN',
        link: 'https://bayardobgyn.com/'
    },
    {
        lat: 40.71763838973356,
        lng: -74.00081986649475,
        name: 'Bayard Street OBGYN',
        link: 'https://bayardobgyn.com/'
    },
    {
        lat: 40.63853275398824,
        lng: -74.00555257998958,
        name: 'Bayard Street OBGYN',
        link: 'https://bayardobgyn.com/'
    },
    {
        lat: 40.75774599924008,
        lng: -73.83576453765762,
        name: 'Bayard Street OBGYN',
        link: 'https://bayardobgyn.com/'
    },
    {
        lat: 40.72551416817743,
        lng: -73.9936354241663,
        name: 'Planned Parenthood',
        link: 'https://www.plannedparenthood.org/health-center/new-york/new-york/10012/manhattan-health-center-3325-91110?utm_campaign=margaret-sanger-health-center&utm_medium=referral&utm_source=yelp.com&utm_content=link'
    },
    {
        lat: 40.73462166874588,
        lng: -73.84946862698942,
        name: 'Viva Eve',
        link: 'https://vivaeve.com/viva-eve-forest-hills/'
    },
    {
        lat: 40.671586983416006,
        lng: -73.97747268183961,
        name: 'FemGYN: For Her Wellness',
        link: 'https://www.femgynwellness.com/'
    },
    {
        lat: 40.62246263165888,
        lng: -74.02535779533355,
        name: 'FemGYN: For Her Wellness',
        link: 'https://www.femgynwellness.com/'
    },
    {
        lat: 40.75021377091924,
        lng: -73.97169592416547,
        name: 'NY Midtown OBGYN',
        link: 'http://www.nymidtownobgyn.com/'
    },
    {
        lat: 40.72442423237593,
        lng: -73.99732676649458,
        name: 'Downtown Women',
        link: 'https://downtownwomen.com/'
    },
    {
        lat: 40.74497176869106,
        lng: -73.95211953765806,
        name: 'Leaf Medical',
        link: 'https://www.leafmedical.org/'
    },
    {
        lat: 40.70373058128263,
        lng: -73.98892532416691,
        name: 'Leaf Medical',
        link: 'https://www.leafmedical.org/'
    },
    {
        lat: 40.68088131734019,
        lng: -73.99436848183936,
        name: 'Leaf Medical',
        link: 'https://www.leafmedical.org/'
    },
    {
        lat: 40.76450853586868,
        lng: -73.97034150650717,
        name: 'Buruina OBGYN',
        link: 'https://buruianaobgyn.com/'
    },
    {
        lat: 40.7705131719212,
        lng: -73.9203578241649,
        name: 'Walk In GYN Care',
        link: 'https://walkingyn.com/'
    },
    {
        lat: 40.682523651910266,
        lng: -73.96640732416756,
        name: 'Walk In GYN Care',
        link: 'https://walkingyn.com/'
    },
    {
        lat: 40.76558567886424,
        lng: -73.98058277998564,
        name: 'Walk In GYN Care',
        link: 'https://walkingyn.com/'
    },
    {
        lat: 40.75820485186993,
        lng: -73.79177972416528,
        name: 'Walk In GYN Care',
        link: 'https://walkingyn.com/'
    },
    {
        lat: 40.71339069094251,
        lng: -73.82923892416667,
        name: 'All Women\'s Medical of New York',
        link: 'https://nyabortion.com/index.html'
    },
    {
        lat: 40.74524403954878,
        lng: -73.98008121067326,
        name: 'CareMount Medical',
        link: 'https://www.caremountmedical.com/'
    },
    {
        lat: 40.78394951950684,
        lng: -73.98130535300032,
        name: 'Dr Jeffrey Yu OBGYN',
        link: 'http://www.drjeffreyyu.com/index.html'
    },
    {
        lat: 40.75035695388076,
        lng: -73.97737149532962,
        name: 'Dr. Yuliya Boruch OBGYN',
        link: 'https://nycobgyn.com/'
    },
    {
        lat: 40.689887449780585,
        lng: -73.98220332416734,
        name: 'Professional Brooklyn Gynecology Services',
        link: 'https://pbgs-ny.com/'
    },
    {
        lat: 40.750140621001066,
        lng: -73.9716851953298,
        name: 'ParkMed NYC',
        link: 'https://parkmed.com/'
    },
    {
        lat: 40.746605361816336,
        lng: -73.98036978183735,
        name: 'Murray Hill Urology PC',
        link: 'https://www.murrayhillurology.com/'
    },
    {
        lat: 40.75022952095712,
        lng: -73.97180816649372,
        name: 'NY Urology',
        link: 'https://www.nyurology.com/'
    },
    {
        lat: 40.724473077626236,
        lng: -73.84643132416632,
        name: 'NY Urology',
        link: 'https://www.nyurology.com/'
    },
    {
        lat: 42.92891746443016,
        lng: -78.78306507991782,
        name: 'Western New York Urology',
        link: 'https://www.wnyurology.com/'
    },
    {
        lat: 43.14299407622247,
        lng: -78.83359072409034,
        name: 'Western New York Urology',
        link: 'https://www.wnyurology.com/'
    },
    {
        lat: 42.79238466523871,
        lng: -78.76876682410156,
        name: 'Western New York Urology',
        link: 'https://www.wnyurology.com/'
    },
    {
        lat: 42.736687921105315,
        lng: -78.87885012410338,
        name: 'Western New York Urology',
        link: 'https://www.wnyurology.com/'
    },
    {
        lat: 42.093481532710015,
        lng: -79.23311142412373,
        name: 'Western New York Urology',
        link: 'https://www.wnyurology.com/'
    },
    {
        lat: 42.96031423798296,
        lng: -78.40403311060382,
        name: 'Western New York Urology',
        link: 'https://www.wnyurology.com/'
    },
    {
        lat: 42.69458171852919,
        lng: -78.99625246643294,
        name: 'Western New York Urology',
        link: 'https://www.wnyurology.com/'
    },
    {
        lat: 42.48126504803306,
        lng: -79.3333363241115,
        name: 'Western New York Urology',
        link: 'https://www.wnyurology.com/'
    },
    {
        lat: 42.50863241461272,
        lng: -78.66678172411062,
        name: 'Western New York Urology',
        link: 'https://www.wnyurology.com/'
    },
    {
        lat: 42.75618270397304,
        lng: -78.13102579526685,
        name: 'Western New York Urology',
        link: 'https://www.wnyurology.com/'
    },
    {
        lat: 40.83387253823697,
        lng: -73.90311852369544,
        name: 'Morrisania Sexual Health Clinic',
        link: 'https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page'
    },
    {
        lat: 40.70523744485175,
        lng: -73.80052183082539,
        name: 'Jamaica Sexual Health Clinic',
        link: 'https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page'
    },
    {
        lat: 40.69536005593001,
        lng: -73.98226068604832,
        name: 'Fort Greene Sexual Health Clinic',
        link: 'https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page'
    },
    {
        lat: 40.74958432651444,
        lng: -73.99978306770862,
        name: 'Chelsea Sexual Health/Express Clinic',
        link: 'https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page'
    },
    {
        lat: 40.87730254744648,
        lng: -73.8792622438678,
        name: 'Montefiore Medical Center',
        link: 'https://www.health.ny.gov/diseases/communicable/std/clinics/clinics.htm#orange'
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
