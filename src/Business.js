import React, { Component } from "react";
import Menu from './Menu';

export default class Business extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="bgded" 
            style={{backgroundImage: 'url(/images/demo/backgrounds/flores.jpg)'}} > 
            <Menu />
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div className="content"> 

                        <h1>
                            Oportunidade dōTERRA
                        </h1>

                        <div class="one_quarter first">
                            <h2>
                                Você sabia que pode ter seu próprio negócio ajudando mais pessoas a 
                                conhecerem e se beneficiarem dos óleos essenciais?
                            </h2>
                            <h2>
                                A dōTERRA chegou recentemente ao Brasil, esta é a sua oportunidade ser 
                                um pioneiro nesta empresa que cresce no ritmo de empresas como Apple e Microsoft.
                            </h2>
                            <h2>
                                Veja este vídeo para saber um pouco mais. Deixe seus dados abaixo 
                                que entraremos em contato.
                            </h2>

                        </div>

                        <div class="three_quarter">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/N1t8_V_wiwY" 
                                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>

                        <h2>
                            Whatsapp
                        </h2>

                        <p>
                            <a href="http://bit.ly/fale-com-marina" target="_blank">
                                <img src="/images/demo/backgrounds/whatsapp.jpg" 
                                    style={{width: '100px'}}/>
                            &nbsp;&nbsp;&nbsp;Clique aqui
                            </a> e me chame no Whatsapp: (37) 99993-5181
                        </p>

                    </div>
                </main>
            </div>

        </div>
        </React.Fragment>
    );
  }
}