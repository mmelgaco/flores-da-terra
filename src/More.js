import React, { Component } from 'react';

class More extends Component {
  render() {
    return (
      <div className="wrapper row3">
        <main className="hoc container clear">
          <div className="center btmspace-50">
            <h2 className="heading">Conheça um pouco mais</h2>
            <p>
            A dōTERRA é a maior fabricante mundial de óleos essenciais, 
            extraídos diretamente da natureza e processados com tecnologia de ponta. 
            Uma oportunidade única para respaldar a sua saúde e ainda um negócio altamente rentável.
            </p>
          </div>
          <ul className="nospace group blocks">
            <li className="one_quarter first bgded overlay" 
              style={{backgroundImage: 'url(/images/demo/backgrounds/8799237242910-399x266.jpg)'}}>
              <a className="btn medium" href="/oils">O que são</a><br/>
                Óleos essenciais
            </li>
            <li className="one_quarter bgded overlay" 
              style={{backgroundImage: 'url(/images/demo/backgrounds/8799237308446-399x266.jpg)'}}>
              <a className="btn medium" href="/doterra">Por quê dōTERRA?</a><br/>
                dōTERRA
            </li>
            <li className="one_quarter bgded overlay" 
              style={{backgroundImage: 'url(/images/demo/backgrounds/8799237275678-399x266.jpg)'}}>
              <a className="btn medium" href="/training">Treinamentos</a><br/>
                Aromaterapia
            </li>
            <li className="one_quarter bgded overlay" 
              style={{backgroundImage: 'url(/images/demo/backgrounds/oportunidade.jpeg)'}}>
              <a className="btn medium" href="/business">Oportunidade</a><br/>
                Tenha seu negócio
            </li>
          </ul>
          <div className="clear"></div>
        </main>
      </div>
    );
  }
}

export default More;