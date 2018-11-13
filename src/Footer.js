import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="wrapper row4">
            <footer id="footer" className="hoc clear"> 
                <div className="one_quarter first">
                    <h6 className="title">Marina Flores</h6>
                    <ul className="nospace linklist contact">
                        <li><i className="fa fa-map-marker"></i>
                            <address>
                                Belo Horizonte - MG
                            </address>
                        </li>
                        <li>
                            <i className="fa fa-phone"></i> (37) 99993-5181<br/>
                        (31) 99315-5608
                        </li>
                        <li><i className="fa fa-envelope-o"></i> contato@marinaflores.net</li>
                    </ul>
                </div>
                <div className="one_quarter">
                    <h6 className="title">Receba novidades</h6>
                    <p className="btmspace-30">Deixe seus dados e sempre te enviarei novidades e dicas sobre os óleos essenciais!</p>
                    <form action="https://mailthis.to/contato@marcelograssi.com" method="POST">
                        <fieldset>
                            <legend>Dados:</legend>
                            <input className="btmspace-15" type="text" name="name" value="" placeholder="Nome"/>
                            <input className="btmspace-15" type="email" name="email" value="" placeholder="Email"/>
                            <input className="btmspace-15" type="text" name="tel" value="" placeholder="Telefone"/>
                            <input type="hidden" name="_after" value="https://www.marinaflores.net/"/>
                            <button type="submit" value="submit">Enviar</button>
                        </fieldset>
                    </form>
                </div>
            </footer>
        </div>
        </React.Fragment>
    );
  }
}