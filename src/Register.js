import React, { Component } from 'react';
import Menu from './Menu';

class More extends Component {
  render() {
    return (
      <div className="bgded" 
      style={{backgroundImage: 'url(/images/demo/backgrounds/flores.jpg)'}} > 
      <Menu />
         <div className="wrapper row3">
            <main className="hoc container clear"> 
                <div className="content"> 
                    <h1>
                        A maior empresa de óleos essenciais do mundo chegou ao Brasil!
                    </h1>
                    <h2>
                        Seja um pioneiro e conheça esta empresa que bate todos os recordes em todo o mundo. <br/>
                        Deixe seus dados abaixo e entrarei em contato.
                    </h2>

                    <br/>
                    <div className="one_half">
                        <h6 className="title">Cadastre-se e saiba mais</h6>
                        <p className="btmspace-30">Deixe seus dados que entrarei em contato em breve!</p>
                        <form action="https://mailthis.to/falecom@marinaflores.net" method="POST">
                            <fieldset>
                                <legend>Dados:</legend>
                                <input className="btmspace-15" type="text" name="name"  placeholder="Nome"/>
                                <input className="btmspace-15" type="email" name="email"  placeholder="Email"/>
                                <input className="btmspace-15" type="text" name="tel"  placeholder="Telefone"/>
                                <input type="hidden" name="_after" value="https://www.marinaflores.net/"/>
                                <button type="submit" value="submit">Enviar</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </main>
          </div>
          <div className="wrapper row3">
            <main className="hoc container clear"> 
                <div className="content"> 
                    <div className="one_half">
                    <a href="http://bit.ly/fale-com-marina" target="_blank">
                                <img src="/images/demo/backgrounds/whatsapp.jpg" 
                                    style={{width: '100px'}}/>
                            &nbsp;&nbsp;&nbsp;Se preferir, clique aqui
                            </a> e me chame no Whatsapp: (37) 99993-5181
                    </div>
                </div>
            </main>
          </div>
      </div>
    );
  }
}

export default More;