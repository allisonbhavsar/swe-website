import React from 'react';
import './Sponsors.css';
import SponsorsInfo from '../data/Sponsors';

function Sponsors() {
  return (
    <div className="margin">
      <h1 className="h2 purple">Our Sponsors</h1>
      <div className="SponsorshipContainer">
        {SponsorsInfo.map((sponsor) => (
          <div className="sponsorImgContainer">
            <img src={sponsor.image} style={{ width: 170 }} alt="" />
          </div>
        ))}
      </div>
      <p className="h3 mediumPurple">Interested in sponsoring us?</p>
      <p className="p1 darkGray">
        Email us at
        {' '}
        <a className="clickableLink" href="mailto:swe@eng.ucsd.edu">swe@eng.ucsd.edu</a>
        {' '}
        to get in contact with our VP External and receive information about how
        your company can partner with our section.
      </p>
    </div>
  );
}

export default Sponsors;
