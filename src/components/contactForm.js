import React from 'react';

const contactForm = props => (
    <form className="col s12">
        <div className="row">
            <div className="input-field col s12 m6 l6">
                <i className="material-icons prefix">account_circle</i>
                <input id="name" type="text" className="validate"/>
                <label htmlFor="name">Nombre y Apellido (*)</label>
            </div>
            <div className="input-field col s12 m6 l6">
                <i className="material-icons prefix">email</i>
                <input id="totmailemail" type="email" className="validate"/>
                <label htmlFor="totmailemail" data-error="Ingrese un email válido">Email (*)</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12 m6 l6">
                <i className="material-icons prefix">phone</i>
                <input id="phone" type="tel" className="validate"/>
                <label htmlFor="phone">Teléfono</label>
            </div>
            <div className="input-field col s12 m6 l6">
                <i className="material-icons prefix">schedule</i>
                <input id="hour" type="text" className="validate"/>
                <label htmlFor="hour">Horario de contacto</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">message</i>
              <textarea id="textarea" className="materialize-textarea"></textarea>
              <label htmlFor="textarea">Consulta</label>
            </div>
        </div>
        <button className="btn waves-effect waves-light right" type="submit" name="action">Enviar
            <i className="material-icons right">send</i>
        </button>
    </form>
);

export default contactForm;