import React from "react";

function Guarantee() {
  return (
    <div className='about-us '>
      <h2 className='title'>Guarantee policy</h2>
      <p className='info-text'>
        All of glasses are entitled to two global warranty policies and a
        warranty right in Vietnam. Warranty period for genuine Ray-Ban glasses:
        1 year from the date of purchase indicated on the purchase receipt at
        Eyewear.
      </p>
      <p className='info-text'>Warranty items related to manufacturing and manufacturing defects:</p>
      <ul className='info-text'>
        <li>Screws and screws are loose or lost.</li>
        <li>Laser inscriptions are blurred and peeled.</li>
        <li>
          Lenses that “explode”, “splash”, or appear as tiny white spots that
          cannot be cleaned.
        </li>
      </ul>
      <p className='info-text'>Items not covered by warranty:</p>
      <ul className='info-text'>
        <li>Glass frames and frames are broken.</li>
        <li>Lenses are broken, cracked, chipped due to physical impact.</li>
      </ul>
    </div>
  );
}

export default Guarantee;
