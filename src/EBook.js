import React, { Component } from 'react';
import Menu from './Menu';

class EBook extends Component {
  render() {
    return (
      <div className="bgded" 
      style={{backgroundImage: 'url(/images/demo/backgrounds/flores.jpg)'}} > 
      <Menu />
         <div className="wrapper row3">
            <main className="hoc container clear"> 
                <div className="content"> 
                    <h1>
                        Baixar E-book
                    </h1>
                    <h2>
                        Deixe seus dados abaixo e você poderá obter o e-book
                    </h2>

                    <br/>
                    <div className="one_half">
                        <h6 className="title">Cadastre-se e receba o e-book</h6>
                        <p className="btmspace-30">.</p>
                        <form action="https://mailthis.to/falecom@marinaflores.net" method="POST">
                            <fieldset>
                                <legend>Dados:</legend>
                                <input className="btmspace-15" type="text" name="name"  placeholder="Nome"/>
                                <input className="btmspace-15" type="email" name="email"  placeholder="Email"/>
                                <input className="btmspace-15" type="text" name="tel"  placeholder="Telefone"/>
                                <input name="consultor" value="Sim" type="radio" />Sou associado doTERRA
                                <input name="consultor" value="Não" type="radio" />Não sou associado doTERRA
                                <br/>
                                <input type="hidden" name="_after" value="http://marcelograssi.com/ebookmarina"/>
                                <input type="hidden" name="_confirmation" value="Recebido com sucesso! Aguarde o e-book abrir."/>
                                <input type="hidden" name="_subject" value="Novo download de E-book"/>
                                <br/>
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

export default EBook;