import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
        <div className="wrapper overlay">
            <header id="header" className="hoc clear">
                <nav id="mainav" className="clear"> 
                    <ul className="clear">
                        <li className="active"><a href="/">Início</a></li>
                        <li><a href="/oils">Sobre os óleos essenciais</a></li>
                        <li><a href="/doterra">Por quê dōTERRA?</a></li>
                        <li><a href="/training">Treinamentos</a></li>
                        <li><a href="/business">Tenha seu negócio</a></li>
                    </ul>
                </nav>
                <div id="logo"> 
                    <img src="/images/demo/backgrounds/marina_profile.jpg" 
                        className="img-circle" 
                        style={{borderRadius: '50%', border: '1px solid #dbdbdb'}}
                        width="32%" alt="Empreender c/ Óleos Essenciais" />
                    <h1>Marina Flores</h1>
                    <p>consultora independente doTERRA</p>
                </div>
            </header>
        </div>
    );
  }
}