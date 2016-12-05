import React from 'react';

const appraisalsForm = props => (
    <form className="row">
        <div className="col s12 m6 l6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title grey-text text-darken-4">Datos de la propiedad</span>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">language</i>
                            <input id="city" type="text" className="validate"/>
                            <label htmlFor="city">Ciudad</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">room</i>
                            <input id="state" type="text" className="validate"/>
                            <label htmlFor="state">Barrio</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">my_location</i>
                            <input id="location" type="text" className="validate"/>
                            <label htmlFor="location">Dirección</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">business</i>
                            <select>
                                <option value="" disabled defaultValue>Seleccione una opción</option>
                                <option value="Casa">Casa</option>
                                <option value="Departamento">Departamento</option>
                                <option value="PH">PH</option>
                                <option value="Duplex">Dúplex</option>
                            </select>
                            <label>Tipo de propiedad</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col s12 m6 l6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title grey-text text-darken-4">Datos de contacto</span>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="name" type="text" className="validate"/>
                            <label htmlFor="name">Nombre y Apellido</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input id="totmailemail" type="email" className="validate"/>
                            <label htmlFor="totmailemail" data-error="Ingrese un email válido">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">phone</i>
                            <input id="phone" type="tel" className="validate"/>
                            <label htmlFor="phone">Teléfono</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">schedule</i>
                            <input id="hour" type="text" className="validate"/>
                            <label htmlFor="hour">Horario de contacto</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <button className="btn waves-effect waves-light right sendTasaciones" type="submit" name="action">Enviar
            <i className="material-icons right">send</i>
        </button>
    </form>
);

export default appraisalsForm;