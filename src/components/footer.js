import React from 'react';

const footer = props => (
  <footer className="page-footer teal">
    <div className="container">
      <div className="row">
        <div className="col l9 s12">
          <h5 className="white-text">C. Pellegrini 166, Lomas de Zamora<br/>Buenos Aires, Argentina</h5>
          <p className="grey-text text-lighten-4">
            <i className="material-icons">phone</i>
            +54 (011) 4244-1371 / 4244-8867<br/>
            <i className="material-icons">mail_outline</i>
            <a className="teal-text text-lighten-3" href="http://www.caizzapropiedades.com.ar/#!/contacto">info@caizzapropiedades.com.ar</a><br/>
            <svg className="facebook">
                <g><path d="M57.378,0.001H3.352C1.502,0.001,0,1.5,0,3.353v54.026c0,1.853,1.502,3.354,3.352,3.354h29.086V37.214h-7.914v-9.167h7.914   v-6.76c0-7.843,4.789-12.116,11.787-12.116c3.355,0,6.232,0.251,7.071,0.36v8.198l-4.854,0.002c-3.805,0-4.539,1.809-4.539,4.462   v5.851h9.078l-1.187,9.166h-7.892v23.52h15.475c1.852,0,3.355-1.503,3.355-3.351V3.351C60.731,1.5,59.23,0.001,57.378,0.001z"/></g>
            </svg>
            <a className="teal-text text-lighten-3" href="https://www.facebook.com/caizzapropiedades" target="_blank">/caizzapropiedades</a><br/>
            <i className="material-icons">plus_one</i>
            <a className="teal-text text-lighten-3" href="https://plus.google.com/102369240024769171011/posts" target="_blank">Google+</a>
          </p>


        </div>
        <div className="col l3 s12">
            <h5>
                <img src="images/logo-caizza.png" alt="Caizza Propiedades" />
            </h5>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Diseño & Hosting <a className="teal-text text-lighten-3" href="http://www.conceptobayres.com">Concepto Bayres</a>
      </div>
    </div>
  </footer>
);

export default footer;