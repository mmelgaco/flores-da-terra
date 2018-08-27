import React, { Component } from "react";
import Menu from './Menu';

export default class Training extends Component {
  render() {
    return (
        <div className="bgded" 
            style={{backgroundImage: 'url(/images/demo/backgrounds/flores.jpg)'}} > 
        <Menu />
        <div className="wrapper row3">
            <main className="hoc container clear"> 
                <div class="content"> 

                    <h1>
                        Aromaterapia
                    </h1>
                    <p>
                    Fazendo parte da minha equipe você poderá participar de treinamentos gratuitos 
                    de Aromaterapia. Aprenda o que são os óleos essenciais, sua história, de onde são extraídos, 
                    quais as principais famílias aromáticas e como utilizar cada um deles.
                    </p>

                    <h1>
                        Construção de equipe
                    </h1>
                    <p>
                    Você irá aprender todas as técnicas para construir sua equipe de consultores, 
                    como ajudá-los a iniciar no negócio doTERRA e como receber bônus pelo trabalho.
                    </p>

                </div>
            </main>
        </div>

        </div>
    );
  }
}