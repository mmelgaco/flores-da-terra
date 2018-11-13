import React, { Component } from "react";
import Menu from './Menu';

export default class Oils extends Component {
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
                            Óleos essenciais: O que são?
                        </h1>
                        <p>
                        Se você já sentiu o perfume de uma rosa, 
                        você já experimentou as qualidades aromáticas de óleos essenciais. 
                        Estes compostos aromáticos voláteis naturais são encontrados nas sementes, 
                        casca, raízes, caules, flores, e outras partes das plantas. 
                        Poderosamente perfumados, os óleos essenciais dão às plantas seus cheiros característicos, 
                        protegem e desempenham um papel fundamental na polinização das plantas.
                        </p>
                    
                        <img src="/images/demo/backgrounds/rosas.jpg" />

                        <p>
                        Além de seus benefícios intrínsecos às plantas e sua bela fragrância, 
                        os óleos essenciais têm sido utilizados há muito tempo para preparação de alimentos, 
                        tratamentos de beleza e práticas de cuidados à saúde.
                        </p>

                        <h2>
                            Mas o que exatamente é um composto aromático volátil?
                        </h2>

                        <p>
                        Em resumo, esses compostos são pequenas moléculas orgânicas, 
                        que tendem a mudar rapidamente do seu estado sólido ou líquido para o 
                        estado gasoso na temperatura ambiente. São chamados de voláteis porque 
                        mudam de estado rapidamente. Quando você abre um frasco de óleo essencial, 
                        percebe imediatamente que o aroma é potente e pode ser sentido mesmo a uma 
                        certa distância. As propriedades físicas e químicas dos compostos aromáticos 
                        voláteis (que compõem óleos essenciais) lhes permite mover-se rapidamente 
                        através do ar e interagir diretamente com nossos sensores olfativos.
                        Tais propriedades únicas, tornam os óleos essenciais ideais para aplicações 
                        na aromaterapia, utilizando esses compostos de plantas para ajudar a manter 
                        a mente e o corpo saudável, bem como outras aplicações.
                        </p>

                        <img src="/images/demo/backgrounds/rosas2.jpg" />

                        <h2>
                            O que determina a qualidade de um Óleo Essencial?
                        </h2>

                        <p>
                        O tipo de compostos aromáticos voláteis presentes em um óleo essencial determina 
                        tanto o aroma quanto os benefícios que ele oferece. Mais de 3.000 variedades de 
                        compostos aromáticos voláteis foram identificadas até o momento. 
                        A natureza de um óleo essencial varia de planta para planta, dentro das 
                        famílias botânicas e de espécie para espécie. A proporção delicada de 
                        compostos aromáticos encontrados em um determinado óleo essencial é o 
                        que o torna único e lhe confere benefícios específicos. Mesmo com óleo essencial puro, 
                        a composição do óleo pode variar em função da hora do dia, estação do ano, 
                        localização geográfica, método e duração de destilação, ano de cultivação e o tempo, 
                        fazendo com que cada passo do processo de produção seja determinante na qualidade do 
                        produto final.
                        </p>

                        <h2>
                            Como os Óleos Essenciais podem ser utilizados?
                        </h2>

                        <p>
                        Os óleos essenciais podem ser utilizados para uma ampla gama de aplicações de 
                        bem-estar físico e emocional. Podem ser usados individualmente ou em misturas de 
                        diversos óleos essenciais complexos, dependendo da experiência do usuário e do 
                        benefício desejado. Quer saber como usar óleos essenciais? Leia o nosso post 
                        sobre como usar óleos essenciais para aprender mais sobre como usar com segurança 
                        os produtos doterra.
                        </p>

                    </div>
                </main>
            </div>

        </div>
        </React.Fragment>
    );
  }
}