import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';
import { Link } from 'react-router-dom';

const MAP_CENTER = {
    lat: 40.755832,
    lng: -73.959502
};

const MAP_ZOOM = 12;

const CLINIC_LOCATIONS = [
    {
        lat: 40.75153282302176,
        lng: -73.98079679718066,
        name: '1. Pure OBGYN',
        link: 'https://pureobgyn.com/',
        id: '#1'
    },
    {
        lat: 40.74041007836597,
        lng: -73.99294473765816,
        name: '2. Pure OBGYN',
        link: 'https://pureobgyn.com/',
        id: '#2'
    },
    {
        lat: 40.67611154741919,
        lng: -73.97229975300368,
        name: '3. Pure OBGYN',
        link: 'https://pureobgyn.com/',
        id: '#3'
    },
    {
        lat: 40.76568345636664,
        lng: -73.9611212953291,
        name: '4. Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc',
        id: '#4'
    },
    {
        lat: 40.75989621484998,
        lng: -73.97750562416519,
        name: '5. Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc',
        id: '#5'
    },
    {
        lat: 40.72679196544538,
        lng: -73.86054742416628,
        name: '6. Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc',
        id: '#6'
    },
    {
        lat: 40.737705071419654,
        lng: -73.61658755300176,
        name: '7. Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc',
        id: '#7'
    },
    {
        lat: 40.76690223113335,
        lng: -73.69256282416494,
        name: '8. Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc',
        id: '#8'
    },
    {
        lat: 40.67509316376526,
        lng: -73.47992547752735,
        name: '9. Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc',
        id: '#9'
    },
    {
        lat: 40.84032340566179,
        lng: -73.31165303765515,
        name: '10. Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc',
        id: '#10'
    },
    {
        lat: 40.62398884183503,
        lng: -73.72258515300524,
        name: '11. Garden OBGYN',
        link: 'https://www.gardenobgyn.com/contents/locations/nyc',
        id: '#11'
    },
    {
        lat: 40.740655720006956,
        lng: -73.98771936649403,
        name: '12. Tia',
        link: 'https://www.asktia.com/',
        id: '#12'
    },
    {
        lat: 41.01436903958884,
        lng: -73.8622985953215,
        name: '13. Symphony Medical',
        link: 'https://www.symphonymed.org/',
        id: '#13'
    },
    {
        lat: 40.968977548313454,
        lng: -73.88652841066633,
        name: '14. Symphony Medical',
        link: 'https://www.symphonymed.org/',
        id: '#14'
    },
    {
        lat: 40.71447472038008,
        lng: -74.01118862416662,
        name: '15. Elitra Health',
        link: 'https://www.elitrahealth.com/',
        id: '#15'
    },
    {
        lat: 40.78609891516861,
        lng: -73.95270115300028,
        name: '16. Village Obstretics',
        link: 'https://villageobstetrics.com/',
        id: '#16'
    },
    {
        lat: 40.739146194792305,
        lng: -73.99838025730388,
        name: '17. Village Obstretics',
        link: 'https://villageobstetrics.com/',
        id: '#17'
    },
    {
        lat: 40.71584355281667,
        lng: -73.99806985300236,
        name: '18. Bayard Street OBGYN',
        link: 'https://bayardobgyn.com/',
        id: '#18'
    },
    {
        lat: 40.71763838973356,
        lng: -74.00081986649475,
        name: '19. Bayard Street OBGYN',
        link: 'https://bayardobgyn.com/',
        id: '#15'
    },
    {
        lat: 40.63853275398824,
        lng: -74.00555257998958,
        name: '20. Bayard Street OBGYN',
        link: 'https://bayardobgyn.com/',
        id: '#20'
    },
    {
        lat: 40.75774599924008,
        lng: -73.83576453765762,
        name: '21. Bayard Street OBGYN',
        link: 'https://bayardobgyn.com/',
        id: '#21'
    },
    {
        lat: 40.72551416817743,
        lng: -73.9936354241663,
        name: '22. Planned Parenthood',
        link: 'https://www.plannedparenthood.org/',
        id: '#22'
    },
    {
        lat: 40.73462166874588,
        lng: -73.84946862698942,
        name: '23. Viva Eve',
        link: 'https://vivaeve.com/',
        id: '#23'
    },
    {
        lat: 40.76410663971396,
        lng: -73.97106894626101,
        name: '24. Viva Eve',
        link: 'https://vivaeve.com/',
        id: '#24'
    },
    {
        lat: 40.671586983416006,
        lng: -73.97747268183961,
        name: '25. FemGYN: For Her Wellness',
        link: 'https://www.femgynwellness.com/',
        id: '#25'
    },
    {
        lat: 40.62246263165888,
        lng: -74.02535779533355,
        name: '26. FemGYN: For Her Wellness',
        link: 'https://www.femgynwellness.com/',
        id: '#26'
    },
    {
        lat: 40.75021377091924,
        lng: -73.97169592416547,
        name: '27. NY Midtown OBGYN',
        link: 'http://www.nymidtownobgyn.com/',
        id: '#27'
    },
    {
        lat: 40.72442423237593,
        lng: -73.99732676649458,
        name: '28. Downtown Women',
        link: 'https://downtownwomen.com/',
        id: '#28'
    },
    {
        lat: 40.74497176869106,
        lng: -73.95211953765806,
        name: '29. Leaf Medical',
        link: 'https://www.leafmedical.org/',
        id: '#29'
    },
    {
        lat: 40.70373058128263,
        lng: -73.98892532416691,
        name: '30. Leaf Medical',
        link: 'https://www.leafmedical.org/',
        id: '#30'
    },
    {
        lat: 40.68088131734019,
        lng: -73.99436848183936,
        name: '31. Leaf Medical',
        link: 'https://www.leafmedical.org/',
        id: '#31'
    },
    {
        lat: 40.76450853586868,
        lng: -73.97034150650717,
        name: '32. Buruina OBGYN',
        link: 'https://buruianaobgyn.com/',
        id: '#32'
    },
    {
        lat: 40.7705131719212,
        lng: -73.9203578241649,
        name: '33. Walk In GYN Care',
        link: 'https://walkingyn.com/',
        id: '#33'
    },
    {
        lat: 40.682523651910266,
        lng: -73.96640732416756,
        name: '34. Walk In GYN Care',
        link: 'https://walkingyn.com/',
        id: '#34'
    },
    {
        lat: 40.76558567886424,
        lng: -73.98058277998564,
        name: '35. Walk In GYN Care',
        link: 'https://walkingyn.com/',
        id: '#35'
    },
    {
        lat: 40.75820485186993,
        lng: -73.79177972416528,
        name: '36. Walk In GYN Care',
        link: 'https://walkingyn.com/',
        id: '#36'
    },
    {
        lat: 40.769485592239874,
        lng: -73.98260367148737,
        name: '37. All Women\'s Medical of New York',
        link: 'https://nyabortion.com/index.html',
        id: '#37'
    },
    {
        lat: 41.02740336881888,
        lng: -73.76483249025631,
        name: '38. All Women\'s Medical of New York',
        link: 'https://nyabortion.com/index.html',
        id: '#38'
    },
    {
        lat: 40.71327279867965,
        lng: -73.82925249936454 ,
        name: '39. All Women\'s Medical of New York',
        link: 'https://nyabortion.com/index.html',
        id: '#39'
    },
    {
        lat: 40.74524403954878,
        lng: -73.98008121067326,
        name: '40. CareMount Medical',
        link: 'https://www.caremountmedical.com/',
        id: '#40'
    },
    {
        lat: 40.78394951950684,
        lng: -73.98130535300032,
        name: '41. Dr Jeffrey Yu OBGYN',
        link: 'http://www.drjeffreyyu.com/index.html',
        id: '#41'
    },
    {
        lat: 40.75035695388076,
        lng: -73.97737149532962,
        name: '42. Dr. Yuliya Boruch OBGYN',
        link: 'https://nycobgyn.com/',
        id: '#42'
    },
    {
        lat: 40.689887449780585,
        lng: -73.98220332416734,
        name: '43. Professional Brooklyn Gynecology Services',
        link: 'https://pbgs-ny.com/',
        id: '#43'
    },
    {
        lat: 40.750140621001066,
        lng: -73.9716851953298,
        name: '44. ParkMed NYC',
        link: 'https://parkmed.com/',
        id: '#44'
    },
    {
        lat: 40.746605361816336,
        lng: -73.98036978183735,
        name: '45. Murray Hill Urology PC',
        link: 'https://www.murrayhillurology.com/',
        id: '#45'
    },
    {
        lat: 40.75022952095712,
        lng: -73.97180816649372,
        name: '46. NY Urology',
        link: 'https://www.nyurology.com/',
        id: '#46'
    },
    {
        lat: 40.724473077626236,
        lng: -73.84643132416632,
        name: '47 NY Urology',
        link: 'https://www.nyurology.com/',
        id: '#47'
    },
    {
        lat: 40.83387253823697,
        lng: -73.90311852369544,
        name: '48. Morrisania Sexual Health Clinic',
        link: 'https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page',
        id: '#48'
    },
    {
        lat: 40.70523744485175,
        lng: -73.80052183082539,
        name: '49. Jamaica Sexual Health Clinic',
        link: 'https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page',
        id: '#49'
    },
    {
        lat: 40.69536005593001,
        lng: -73.98226068604832,
        name: '50. Fort Greene Sexual Health Clinic',
        link: 'https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page',
        id: '#50'
    },
    {
        lat: 40.74958432651444,
        lng: -73.99978306770862,
        name: '51. Chelsea Sexual Health/Express Clinic',
        link: 'https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page',
        id: '#51'
    },
    {
        lat: 40.87730254744648,
        lng: -73.8792622438678,
        name: '52. Montefiore Medical Center',
        link: 'https://www.health.ny.gov/diseases/communicable/std/clinics/clinics.htm#orange',
        id: '#52'
    },
    {
        lat: 40.74808929554354,
        lng: -73.99343470291915,
        name: '53. Oasis Wellness Center',
        link: 'https://www.oasiscenter.nyc/',
        id: '#53'
    }
];

const SurveyResultsPage = ({ results }) => {
    return (
      <>
      <div class="section2">
        <h1 class="heading-10">Test Results and Map Locator</h1>
        <div class="text-block-2 pad-vertical">We recommend you get tested for the following tests:</div>
          <p>{JSON.stringify(results)}</p>
      </div>

      <div class="text-block-2 pad-vertical">Below is a map of STI clinics in NYC.<br/> Zoom in the map or scroll thorugh the list of clinics to find testing near you!</div>

      <div>
        <div class="map-column">
          <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBMpoN1LPS6i3QBfQ5FcBUnFZsIwmKTh18' }}
              defaultCenter={MAP_CENTER}
              defaultZoom={MAP_ZOOM}
          >
              {
                  CLINIC_LOCATIONS.map((clinic) => (
                      <MapMarker lat={clinic.lat} lng={clinic.lng} name={clinic.name} id={clinic.id}/>
                  ))
              }
          </GoogleMapReact></div>
      </div>

      <div class ="clinic-list">
        <ol class="clinic-list-info">

          <li><div class="heading-clinic" id="1"><strong>Pure OBGYN</strong></div>
            <div class="clinic-info">274 Madison Ave suite 300, New York, NY 10016</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon-Fri 8:00am-6:30pm</li>
                <li class="hours-list"> Closed Sat-Sun</li>
              </ul>
            <a href="https://pureobgyn.com/" class="clinic-link"target="blank">Website: https://pureobgyn.com/</a></li>
            <div class="clinic-note">Women's // HACK: ealth. Requires co-pay</div>

          <li><div class="heading-clinic" id="2"><strong>Pure OBGYN</strong></div>
            <div class="clinic-info">32 W 20th St, New York, NY 10011</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon-Fri 8:00am-6:30pm</li>
                <li class="hours-list"> Closed Sat-Sun</li>
              </ul>
            <a href="https://pureobgyn.com/" class="clinic-link"target="blank">Website: https://pureobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Requires co-pay</div>

          <li><div class="heading-clinic" id="3"><strong>Pure OBGYN</strong></div>
            <div class="clinic-info">225 St Johns Pl, Brooklyn, NY 11217</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon-Fri 8:00am-6:30pm</li>
                <li class="hours-list"> Closed Sat-Sun</li>
              </ul>
            <a href="https://pureobgyn.com/" class="clinic-link"target="blank">Website: https://pureobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Requires co-pay</div>

          <li><div class="heading-clinic" id="4"><strong>Garden OBGYN</strong></div>
            <div class="clinic-info">260 E 67th St, New York, NY 10065</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon-Thu 8:00am-8:00pm</li>
                <li class="hours-list"> Fri-Sat 8:00am-2:15pm</li>
                <li class="hours-list"> Sun 8:00am-4:00pm</li>
              </ul>
            <a href="https://www.gardenobgyn.com/contents/locations/nyc" class="clinic-link"target="blank">Website: https://www.gardenobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="5"><strong>Garden OBGYN</strong></div>
            <div class="clinic-info">7 west 51 st Street, New York, NY 10104</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon 10:00am-6:00pm</li>
                <li class="hours-list"> Tue 10:00am-5:00pm</li>
                <li class="hours-list"> Wed, Fri 7:30am-2:00pm</li>
                <li class="hours-list"> Thu 8:00am-2:00pm</li>
              </ul>
            <a href="https://www.gardenobgyn.com/contents/locations/nyc" class="clinic-link"target="blank">Website: https://www.gardenobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="6"><strong>Garden OBGYN</strong></div>
            <div class="clinic-info">64-63 Austin Street 1A, Rego Park, NY 11374</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon, Thu 2:00pm-8:00pm</li>
                <li class="hours-list"> Tue-Wed 8:00am-8:00pm</li>
                <li class="hours-list"> Fri-Sat 8:00am-2:00pm</li>
              </ul>
            <a href="https://www.gardenobgyn.com/contents/locations/nyc" class="clinic-link"target="blank">Website: https://www.gardenobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="7"><strong>Garden OBGYN</strong></div>
            <div class="clinic-info">200 Garden City Plaza Suite 100, Garden City, Ny 11530</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon-Thurs 8:00am-8:00pm</li>
                <li class="hours-list"> Fri 8:00am-2:00pm</li>
                <li class="hours-list"> Sat 8:00am-3:00pm</li>
              </ul>
            <a href="https://www.gardenobgyn.com/contents/locations/nyc" class="clinic-link"target="blank">Website: https://www.gardenobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="8"><strong>Garden OBGYN</strong></div>
            <div class="clinic-info">3333 New Hyde Park Suite 102, New Hyde Park, NY 11042</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon, Thu 8:00am-7:00pm</li>
                <li class="hours-list"> Tue-Wed, Fri 8:00am-4:00pm</li>
                <li class="hours-list"> Sat 8:00am-2:00pm</li>
              </ul>
            <a href="https://www.gardenobgyn.com/contents/locations/nyc" class="clinic-link"target="blank">Website: https://www.gardenobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="9"><strong>Garden OBGYN</strong></div>
            <div class="clinic-info">4150 Sunrise Highway, Massapequa, NY 11758</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon-Wed 8:00am-8:00pm</li>
                <li class="hours-list"> Thu 2:00pm-8:00pm</li>
                <li class="hours-list"> Fri-Sat 8:00am-2:00pm</li>
              </ul>
            <a href="https://www.gardenobgyn.com/contents/locations/nyc" class="clinic-link"target="blank">Website: https://www.gardenobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="10"><strong>Garden OBGYN</strong></div>
            <div class="clinic-info">5036 Jericho Turnpike Suite 205, Commack, NY 11725</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon, Thu 1:00pm-8:00pm</li>
                <li class="hours-list"> Fri 8:00am-2:00pm</li>
              </ul>
            <a href="https://www.gardenobgyn.com/contents/locations/nyc" class="clinic-link"target="blank">Website: https://www.gardenobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="11"><strong>Garden OBGYN</strong></div>
            <div class="clinic-info">123 Maple Avenue, Cedarhurst, NY 11516</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon, Wed 8:00am-3:00pm</li>
                <li class="hours-list"> Tue, Thu 1:00pm-8:00pm</li>
                <li class="hours-list"> Fri 8:00am-2:00pm</li>
              </ul>
            <a href="https://www.gardenobgyn.com/contents/locations/nyc" class="clinic-link"target="blank">Website: https://www.gardenobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="11"><strong>Garden OBGYN</strong></div>
            <div class="clinic-info">123 Maple Avenue, Cedarhurst, NY 11516</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon, Wed 8:00am-3:00pm</li>
                <li class="hours-list"> Tue, Thu 1:00pm-8:00pm</li>
                <li class="hours-list"> Fri 8:00am-2:00pm</li>
              </ul>
            <a href="https://www.gardenobgyn.com/contents/locations/nyc" class="clinic-link"target="blank">Website: https://www.gardenobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="12"><strong>Ask Tia</strong></div>
            <div class="clinic-info">30 East 23rd, 7th Floor, New York, NY 10010</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon-Thu 7:30am-8:30pm</li>
                <li class="hours-list"> Fri 7:30am-5:00pm</li>
                <li class="hours-list"> Sat 8:00am-5:30pm</li>
              </ul>
            <a href="https://www.asktia.com/locations" class="clinic-link"target="blank">Website: https://www.asktia.com/</a></li>
            <div class="clinic-note">Multi specialty medical practice. Accepts insurance. Open for virtual & in-person care.</div>

          <li><div class="heading-clinic" id="13"><strong>Symphony Medical</strong></div>
            <div class="clinic-info">128 Ashford Avenue, 2nd Floor, Dobbs Ferry, NY 10522</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon 12:00pm-7:00pm</li>
                <li class="hours-list"> Tue, Thu 9:00am-4:30pm</li>
                <li class="hours-list"> Sat 8:30am-12:00pm</li>
              </ul>
            <a href="https://www.symphonymed.org/contents/services/outpatient/obgyn" class="clinic-link"target="blank">Website: https://www.symphonymed.org/</a></li>
            <div class="clinic-note">Multi Specialty Medical Practice. Accepts insurance.</div>

          <li><div class="heading-clinic" id="14"><strong>Symphony Medical</strong></div>
            <div class="clinic-info">967 North Broadway Yonkers, NY 10701</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon 12:00pm-7:00pm</li>
                <li class="hours-list"> Tue, Thu 9:00am-4:30pm</li>
                <li class="hours-list"> Sat 8:30am-12:00pm</li>
              </ul>
            <a href="https://www.symphonymed.org/contents/services/outpatient/obgyn" class="clinic-link"target="blank">Website: https://www.symphonymed.org/</a></li>
            <div class="clinic-note">Multi specialty medical practice. Accepts insurance.</div>

          <li><div class="heading-clinic" id="15"><strong>Elitra Health</strong></div>
            <div class="clinic-info">255 Greenwich St, New York, NY 10007</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon-Fri 8:00am-4:00pm</li>
              </ul>
            <a href="https://www.elitrahealth.com/" class="clinic-link"target="blank">Website: https://www.elitrahealth.com/</a></li>
            <div class="clinic-note">Preventive Healthcare and Longevity with STD panels included in additional testing options.</div>

          <li><div class="heading-clinic" id="16"><strong>Village Obstretics</strong></div>
            <div class="clinic-info">1225 Park Avenue, New York, NY 10128</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon-Fri 9:00am-5:00pm</li>
              </ul>
            <a href="https://villageobstetrics.com/" class="clinic-link"target="blank">Website: https://villageobstetrics.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="17"><strong>Village Obstretics</strong></div>
            <div class="clinic-info">101 West 12th Street, New York, NY 10011</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
                <li class="hours-list"> Mon, Wed, Fri 10:00am-5:00pm</li>
                <li class="hours-list"> Sat 10:00am-4:00pm</li>
              </ul>
            <a href="https://villageobstetrics.com/" class="clinic-link"target="blank">Website: https://villageobstetrics.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="18"><strong>Bayard OBGYN</strong></div>
            <div class="clinic-info">68 Bayard Street, New York, NY 10011</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              </ul>
            <a href="https://bayardobgyn.com/" class="clinic-link"target="blank">Website: https://bayardobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Via appointment.</div>

          <li><div class="heading-clinic" id="19"><strong>Bayard OBGYN</strong></div>
            <div class="clinic-info">139 Centre Street PH 120, New York, NY 10013</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              </ul>
            <a href="https://bayardobgyn.com/" class="clinic-link"target="blank">Website: https://bayardobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Via appointment.</div>

          <li><div class="heading-clinic" id="20"><strong>Bayard OBGYN</strong></div>
            <div class="clinic-info">822 54th Street Lower Level Brooklyn, NY 11220</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              </ul>
            <a href="https://bayardobgyn.com/" class="clinic-link"target="blank">Website: https://bayardobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Via appointment.</div>

          <li><div class="heading-clinic" id="21"><strong>Bayard OBGYN</strong></div>
            <div class="clinic-info">131-07 40th Road E29 (Level 5), Flushing, NY 11354</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              </ul>
            <a href="https://bayardobgyn.com/" class="clinic-link"target="blank">Website: https://bayardobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Via appointment.</div>

          <li><div class="heading-clinic" id="22"><strong>Planned Parenthood</strong></div>
            <div class="clinic-info">26 Bleecker Street, New York, NY 10012</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Thu 8:00am-6:30pm</li>
              <li class="hours-list"> Sat-Sun 8:00am-5:30pm</li>
              </ul>
            <a href="https://www.plannedparenthood.org/health-center/new-york/new-york/10012/manhattan-health-center-3325-91110?utm_campaign=margaret-sanger-health-center&utm_medium=referral&utm_source=yelp.com&utm_content=link" class="clinic-link"target="blank">Website: https://www.plannedparenthood.org/</a></li>
            <div class="clinic-note">Multi specialty medical practice. Accepts insurance.</div>

          <li><div class="heading-clinic" id="23"><strong>Viva Eve</strong></div>
            <div class="clinic-info">108-16 63rd Road Forest Hills, Queens, NY 11375</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Fri 8:00am-7:00pm</li>
              <li class="hours-list"> Sat 8:00am-4:00pm</li>
              </ul>
            <a href="https://vivaeve.com/viva-eve-forest-hills/" class="clinic-link"target="blank">Website: https://vivaeve.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="24"><strong>Viva Eve</strong></div>
            <div class="clinic-info">635 Madison Avenue, New York, NY 10022</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon 8:00am-4:00pm</li>
              <li class="hours-list"> Tue 11:00am-7:00pm</li>
              <li class="hours-list"> Wed 8:00am-4:00pm</li>
              <li class="hours-list"> Thu 11:00am-7:00pm</li>
              <li class="hours-list"> Fri 8:00am-4:00pm</li>
              <li class="hours-list"> Sat 8:00am-4:00pm</li>
              </ul>
            <a href="https://vivaeve.com/viva-eve-manhattan/" class="clinic-link"target="blank">Website: https://vivaeve.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="25"><strong>FemGYN</strong></div>
            <div class="clinic-info">175th-7th Avenue, Brooklyn, NY 11215</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Fri 9:00am-6:30pm</li>
              <li class="hours-list"> Sat 9:00am-1:30pm</li>
              </ul>
            <a href="https://www.femgynwellness.com/" class="clinic-link"target="blank">Website: https://www.femgynwellness.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="26"><strong>FemGYN</strong></div>
            <div class="clinic-info">8417 5th Avenue, Brooklyn, NY 11209</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon, Wed 11:00am-6:30pm</li>
              <li class="hours-list"> Tue, Thu 9:00am-6:30pm</li>
              <li class="hours-list"> Fri 9:00am-1:30pm</li>
              <li class="hours-list"> Sun 10:00am-2:30pm</li>
              </ul>
            <a href="https://www.femgynwellness.com/" class="clinic-link"target="blank">Website: https://www.femgynwellness.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="27"><strong>Midtown OBGYN</strong></div>
            <div class="clinic-info">800 Second Avenue, Suite 815, New York, NY 11209</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Tue 8:00am-6:00pm</li>
              <li class="hours-list"> Wed 9:00am-4:30pm</li>
              <li class="hours-list"> Thu 8:00am-4:00pm</li>
              <li class="hours-list"> Fri 9:00am-4:00pm</li>
              </ul>
            <a href="http://www.nymidtownobgyn.com/our-office" class="clinic-link"target="blank">Website: http://www.nymidtownobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="28"><strong>Downtown OBGYN</strong></div>
            <div class="clinic-info">568 Broadway, Suite 304 & 404, New York, NY 10012</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Thu 8:00am-6:30pm</li>
              <li class="hours-list"> Fri 8:00am-4:30pm</li>
              </ul>
            <a href="https://downtownwomen.com/" class="clinic-link"target="blank">Website: https://downtownwomen.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="29"><strong>Leaf Medical</strong></div>
            <div class="clinic-info">10-29 47th Road, Long Island City, NY 11101</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Fri 8:30am-5:30pm</li>
              </ul>
            <a href="https://www.leafmedical.org/locations/long-island-city" class="clinic-link"target="blank">Website: https://www.leafmedical.org/</a></li>
            <div class="clinic-note">Primary care including women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="30"><strong>Leaf Medical</strong></div>
            <div class="clinic-info">18 Adams Street, Brooklyn, NY 11201</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Fri 8:30am-5:30pm</li>
              </ul>
            <a href="https://www.leafmedical.org/locations/dumbo" class="clinic-link"target="blank">Website: https://www.leafmedical.org/</a></li>
            <div class="clinic-note">Primary care including women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="31"><strong>Leaf Medical</strong></div>
            <div class="clinic-info">325 Smith Street, Brooklyn, NY 11231</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Fri 8:30am-5:30pm</li>
              </ul>
            <a href="https://www.leafmedical.org/locations/dumbo" class="clinic-link"target="blank">Website: https://www.leafmedical.org/</a></li>
            <div class="clinic-note">Primary care including women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="32"><strong>Buruina OBGYN</strong></div>
            <div class="clinic-info">30 East 60th Street, Suite 808, New York, NY 10022</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon 9:00am-5:00pm</li>
              <li class="hours-list"> Tue-Thu 7:30am-5:00pm</li>
              <li class="hours-list"> Fri 9:00am-1:00pm</li>
              </ul>
            <a href="https://buruianaobgyn.com/contact" class="clinic-link"target="blank">Website: https://buruianaobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="33"><strong>WALKINGYN</strong></div>
            <div class="clinic-info">28-18 Astoria Blvd, Long Island City, NY 11102</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Thu 8:00am-6:00pm</li>
              <li class="hours-list"> Fri 8:30am-6:00pm</li>
              <li class="hours-list"> Sat-Sun 10:00am-3:00pm</li>
              </ul>
            <a href="https://walkingyn.com/" class="clinic-link"target="blank">Website: https://walkingyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="34"><strong>WALKINGYN</strong></div>
            <div class="clinic-info">535 Clinton Ave, Brooklyn, NY 11238</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Thu 8:00am-6:00pm</li>
              <li class="hours-list"> Fri 8:30am-6:00pm</li>
              <li class="hours-list"> Sat-Sun 10:00am-3:00pm</li>
              </ul>
            <a href="https://walkingyn.com/" class="clinic-link"target="blank">Website: https://walkingyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="35"><strong>WALKINGYN</strong></div>
            <div class="clinic-info">888 7th Avenue, 200 W 57th St, New York, NY 10019</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Thu 8:00am-6:00pm</li>
              <li class="hours-list"> Fri 8:30am-6:00pm</li>
              <li class="hours-list"> Sat-Sun 10:00am-3:00pm</li>
              </ul>
            <a href="https://walkingyn.com/" class="clinic-link"target="blank">Website: https://walkingyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="36"><strong>WALKINGYN</strong></div>
            <div class="clinic-info">189-01 Northern Blvd, Queens, NY 12358</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Thu 8:00am-6:00pm</li>
              <li class="hours-list"> Fri 8:30am-6:00pm</li>
              <li class="hours-list"> Sat-Sun 10:00am-3:00pm</li>
              </ul>
            <a href="https://walkingyn.com/" class="clinic-link"target="blank">Website: https://walkingyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="37"><strong>NY Abortion</strong></div>
            <div class="clinic-info">1841 Broadway (w. 60th), Suite #1011, New York, NY 10023</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              </ul>
            <a href="https://nyabortion.com/westside-location.html" class="clinic-link"target="blank">Website: https://nyabortion.com/index.html</a></li>
            <div class="clinic-note">Women's health. Accepts insurance. Via appointment.</div>

          <li><div class="heading-clinic" id="38"><strong>NY Abortion</strong></div>
            <div class="clinic-info">222 Mamaroneck Avenue, White Plains, NY 10605</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              </ul>
            <a href="https://nyabortion.com/whiteplains-location.html" class="clinic-link"target="blank">Website: https://nyabortion.com/index.html</a></li>
            <div class="clinic-note">Women's health. Accepts insurance. Via appointment.</div>

          <li><div class="heading-clinic" id="39"><strong>NY Abortion</strong></div>
            <div class="clinic-info">120-34 Queens Boulevard, Suite 420, Kew Gardens, NY 11415</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              </ul>
            <a href="https://nyabortion.com/queens-location.html" class="clinic-link"target="blank">Website: https://nyabortion.com/index.html</a></li>
            <div class="clinic-note">Women's health. Accepts insurance. Via appointment.</div>

          <li><div class="heading-clinic" id="40"><strong>CareMount Medical</strong></div>
            <div class="clinic-info">145 East 32nd Street 11th floor, New York, NY 10016</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              </ul>
            <a href="https://www.caremountmedical.com/directory/locations/show/new-york-145/" class="clinic-link"target="blank">Website: https://www.caremountmedical.com/</a></li>
            <div class="clinic-note">Multi specialty medical practice with multiple clinics, but Women's health for this NYC based clinic. Accepts insurance. Via appointment.</div>

          <li><div class="heading-clinic" id="41"><strong>Dr. Jeffrey Yu OBGYN</strong></div>
            <div class="clinic-info">390 West End Ave. Ste. 1H New York, NY 10024</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon, Wed 10:00am-7:00pm</li>
              <li class="hours-list"> Tue, Thu-Sat 10:00am-4:00pm</li>
              </ul>
            <a href="http://www.drjeffreyyu.com/index.html" class="clinic-link"target="blank">Website: http://www.drjeffreyyu.com/index.html</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="42"><strong>Dr. Yuliya Boruch OBGYN</strong></div>
            <div class="clinic-info">124 East 40th St, Suite 203, New York, NY 10016</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon 2:00pm-6:00pm</li>
              <li class="hours-list"> Tue-Wed 12:00pm-6:30pm</li>
              <li class="hours-list"> Thu 10:00am-2:00pm</li>
              </ul>
            <a href="https://nycobgyn.com/" class="clinic-link"target="blank">Website: https://nycobgyn.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="43"><strong>Professional Brooklyn Gynecology Services</strong></div>
            <div class="clinic-info"> 14 DeKalb Avenue, Brooklyn, NY 11201</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Sat 7:00am-4:00pm</li>
              </ul>
            <a href="https://pbgs-ny.com/" class="clinic-link"target="blank">Website: https://pbgs-ny.com/</a></li>
            <div class="clinic-note">Women's health. Accepts insurance. Only certified ambulatory surgical facility in Brooklyn for gynecological needs.</div>

          <li><div class="heading-clinic" id="44"><strong>Parkmed NYC</strong></div>
            <div class="clinic-info">800 2nd Ave, Suite 605, New York, NY 10017</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Sat 7:00am-8:00pm</li>
              <li class="hours-list"> Sun 9:00am-5:00pm</li>
              </ul>
            <a href="https://parkmed.com/" class="clinic-link"target="blank">Website: https://parkmed.com/</a></li>
            <div class="clinic-note">Women's health. All insurance accepted.</div>

          <li><div class="heading-clinic" id="45"><strong>Murray Hill Urology PC</strong></div>
            <div class="clinic-info">120 East 34th Street, Ground Floor Midtown, New York, NY 10016</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon, Wed 9:00am-5:00pm</li>
              <li class="hours-list"> Tue 9:00am-4:30pm</li>
              <li class="hours-list"> Thu 9:00am-7:00pm</li>
              <li class="hours-list"> Tue 9:00am-4:00pm</li>
              </ul>
            <a href="https://www.murrayhillurology.com/" class="clinic-link"target="blank">Website: https://www.murrayhillurology.com/</a></li>
            <div class="clinic-note">Men's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="46"><strong>NY Urology</strong></div>
            <div class="clinic-info">800 2nd Avenue 9th Floor, New York, NY 10017</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon 9:30am-4:00pm</li>
              <li class="hours-list"> Tue 9:00am-6:00pm</li>
              <li class="hours-list"> Wed 9:30am-3:30pm</li>
              <li class="hours-list"> Thu 9:30am-6:00pm</li>
              <li class="hours-list"> Fri 8:00am-1:00pm</li>
              </ul>
            <a href="https://www.nyurology.com/location/ny/new-york/midtown-east" class="clinic-link"target="blank">Website: https://www.nyurology.com/</a></li>
            <div class="clinic-note">Men's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="47"><strong>NY Urology</strong></div>
            <div class="clinic-info">69-15 Yellowstone Boulevard Suite 4, Forest Hills, NY 11375</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Tue 9:00am-7:00pm</li>
              <li class="hours-list"> Wed-Thu 9:00am-5:00pm</li>
              <li class="hours-list"> Fri 9:00am-2:00pm</li>
              <li class="hours-list"> Fri 9:00am-1:00pm</li>
              </ul>
            <a href="https://www.nyurology.com/location/ny/forest-hills" class="clinic-link"target="blank">Website: https://www.nyurology.com/</a></li>
            <div class="clinic-note">Men's health. Accepts insurance.</div>

          <li><div class="heading-clinic" id="48"><strong>Morrisania Sexual Health Clinic</strong></div>
            <div class="clinic-info">1309 Fulton Avenue, Bronx, NY 10456</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Fri 8:30am-3:30pm</li>
              </ul>
            <a href="https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page" class="clinic-link"target="blank">Website: https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page</a></li>
            <div class="clinic-note">Sexual Health Clinic. Accepts insurance.</div>

          <li><div class="heading-clinic" id="49"><strong>Jamaica Sexual Health Clinic</strong></div>
            <div class="clinic-info">90-37 Parsons Boulevard, Queens, NY 11432</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Fri 8:30am-3:30pm</li>
              </ul>
            <a href="https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page" class="clinic-link"target="blank">Website: https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page</a></li>
            <div class="clinic-note">Sexual Health Clinic. Accepts insurance.</div>

          <li><div class="heading-clinic" id="50"><strong>Fort Greene Sexual Health Clinic</strong></div>
            <div class="clinic-info">295 Flatbush Avenue Extension, Second Floor, Brooklyn, NY 11201</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Fri 8:30am-3:30pm</li>
              </ul>
            <a href="https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page" class="clinic-link"target="blank">Website: https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page</a></li>
            <div class="clinic-note">Sexual Health Clinic. Accepts insurance.</div>

          <li><div class="heading-clinic" id="51"><strong>Chelsea Sexual Health Clinic</strong></div>
            <div class="clinic-info">303 Ninth Avenue, Manhattan, NY 10001</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon, Wed-Fri 8:30am-3:30pm</li>
              <li class="hours-list"> Tue 8:30am-7:00pm</li>
              </ul>
            <a href="https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page" class="clinic-link"target="blank">Website: https://www1.nyc.gov/site/doh/services/sexual-health-clinics.page</a></li>
            <div class="clinic-note">Sexual Health Clinic. Accepts insurance.</div>

          <li><div class="heading-clinic" id="52"><strong>Montefiore Medical Center</strong></div>
            <div class="clinic-info">3230 Bainbridge Avenue, Suite D, Bronx, NY 10467</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Wed 1:00pm-6:00pm</li>
              </ul>
            <a href="https://www.health.ny.gov/diseases/communicable/std/clinics/clinics.htm#orange" class="clinic-link"target="blank">Website: https://www.health.ny.gov/diseases/communicable/std/clinics/clinics.htm#orange</a></li>
            <div class="clinic-note">Sexual Health Clinic. Accepts insurance.</div>

          <li><div class="heading-clinic" id="53"><strong>Oasis Wellness Center</strong></div>
            <div class="clinic-info">330 7th Avenue, New York, NY 10001</div>
            <div class="clinic-info"><i>Hours:</i></div>
              <ul>
              <li class="hours-list"> Mon-Fri 11:00am-5:00pm</li>
              </ul>
            <a href="https://www.oasiscenter.nyc/" class="clinic-link"target="blank">Website: https://www.oasiscenter.nyc/</a></li>
            <div class="clinic-note">Sexual Health Clinic. Accepts insurance.</div>
        </ol>
      </div>

      <div class="section2 under-map">
        <div class="heading-home-1">Check out our <Link to="/education" target="blank" class="page-link">Education</Link> page to learn about the STIs you may be at risk for.</div>

      </div>





      </>
    );
}

export default SurveyResultsPage;
