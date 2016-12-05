import React from 'react';

const paralax = props => (
  <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
      <div className="container">
        <br/><br/>
        <h1 className="header center">
            <img src="images/logo-caizza-big.png" alt="Caizza Propiedades" /><br/>
            R. CAIZZA<br/>
            <small>NEGOCIOS INMOBILIARIOS</small>
        </h1>
      </div>
    </div>
    <div className="parallax">
        <img src="images/background1.jpg" className="uno" alt="Unsplashed background img 1"/>
    </div>
    <div className="parallax">
        <img src="images/background2.jpg" className="dos" alt="Unsplashed background img 1"/>
    </div>
    <div className="parallax">
        <img src="images/background3.jpg" className="tres" alt="Unsplashed background img 1"/>
    </div>
  </div>
);

export default paralax;