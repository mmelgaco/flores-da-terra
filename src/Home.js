import React, { Component } from 'react';
import Menu from './Menu';

class Home extends Component {
  render() {
    return (
        <div className="bgded" 
            style={{backgroundImage: 'url(/images/demo/backgrounds/flores.jpg)'}} > 
            <Menu />
            <div id="pageintro" className="hoc clear"> 
                <article>
                <div className="introtxt">
                    <p>
                        <img src="/images/demo/backgrounds/oleo.png" 
                                className="img-circle" 
                                style={{borderRadius: '50%', border: '1px solid #dbdbdb', width: '100px'}}
                                alt="Empreender c/ Óleos Essenciais" />
                    </p>
                    <h2 className="heading">Óleos essenciais</h2>
                    <p>
                    Tudo o que precisamos, encontramos na natureza. 
                    Neste site quero te passar um pouquinho de como ter bem estar de forma natural com os óleos essenciais.
                    </p>
                </div>
                </article>
            </div>
        </div>
    );
  }
}

export default Home;