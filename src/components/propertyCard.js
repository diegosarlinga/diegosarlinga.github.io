import React from 'react';

const propertyCard = props => (
    <div className="col s12 m4 l3">
        <div className="card hoverable">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="images/background1.jpg"/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">U$S 1.000.000</span>
                <p>Carlos Pelegrini al 400</p>
            </div>
            <div className="card-action">
                <a href="ficha.html">Ver Ficha</a>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Venta<i className="material-icons right">close</i></span>
                <p>
                    Departamento<br/>
                    Carlos Pelegrini al 400, Lomas de Zamora Oeste<br/>
                    Precio: U$S 1.000.000
                    <hr/>
                    Cod: RAP208496
                </p>
            </div>
        </div>
    </div>
);

export default propertyCard;