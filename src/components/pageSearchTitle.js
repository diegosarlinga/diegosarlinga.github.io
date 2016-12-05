import React from 'react';
import MaterializeSelect from './materializeSelect';

const pageTitle = props => (
    <div className="blue-grey lighten-5">
        <div className="container">
            <div className="section row red-text">
                <h5 className="col s12 m6 l6">{props.children}</h5>
                <div className="col s6 m3 l3 input-field onTitle">
                    <MaterializeSelect>
                        <option value="" disabled defaultValue>Seleccione una opción</option>
                        <option value="1">Venta</option>
                        <option value="2">Alquiler</option>
                    </MaterializeSelect>
                    <label>Operación</label>
                </div>
                <div className="col s6 m3 l3 input-field onTitle">
                    <MaterializeSelect>
                        <option value="" disabled defaultValue>Seleccione una opción</option>
                        <option value="1">Capital</option>
                        <option value="2">Sur</option>
                        <option value="2">Norte</option>
                        <option value="2">Oeste</option>
                    </MaterializeSelect>
                    <label>Zona</label>
                </div>
            </div>
        </div>
    </div>
);

export default pageTitle;