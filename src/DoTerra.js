import React, { Component } from "react";
import Menu from './Menu';

export default class DoTerra extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="bgded" 
            style={{backgroundImage: 'url(/images/demo/backgrounds/flores.jpg)'}} > 
            <Menu />
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div class="content"> 

                        <h1>
                            Porque usar dōTERRA?
                        </h1>

                        <p>
                            Quando você escolhe dōTERRA, você está escolhendo óleos essenciais 
                            cuidadosamente destilados de plantas que foram pacientemente colhidas 
                            no momento perfeito por produtores experientes de todo o mundo para a 
                            composição ideal do extrato.
                        </p>

                        <img src="/images/demo/backgrounds/doterra1.jpg" />

                        <p>
                            Cada óleo essencial dōTERRA também é cuidadosamente testado, 
                            usando rigorosos protocolos de qualidade da CPTG (Certified Pure Therapeutic Grade®). 
                            Os usuários mais experientes dos óleos essenciais reconhecerão imediatamente 
                            o padrão de qualidade superior nos produtos dōTERRA, que são naturalmente seguros 
                            e eficazes para uso terapêutico.
                            Embora haja uma ciência por trás do processo de destilação de óleos essenciais, 
                            também é uma arte. Destiladores profissionais não só desfrutam de anos de experiência, 
                            mas também empregam as técnicas e tecnologias mais modernas existentes no mercado.
                        </p>

                        <h2>
                            Extração de Óleos Essenciais
                        </h2>

                        <p>
                            O método mais comum de extração de óleos essenciais é através de um processo de destilação a 
                            vapor em baixa temperatura. Neste processo, o vapor pressurizado é circulado através do material 
                            vegetal. Os óleos essenciais são liberados da planta e levados pelo vapor.
                            Quando o vapor se esfria, a água e os óleos separam-se naturalmente e o óleo então é recolhido. 
                            Para garantir o extrato de óleo da mais alta qualidade e a composição química correta, a temperatura 
                            e a pressão devem ser monitoradas de perto. Com pouco calor ou pressão, o óleo não será liberado; 
                            Já com calor e pressão demais, a composição e a potência do óleo serão comprometidas.
                        </p>

                        <h2>
                            Óleos Essenciais dōTERRA
                        </h2>

                        <p>
                            Quando você escolhe dōTERRA, você está escolhendo óleos essenciais cuidadosamente 
                            destilados de plantas que foram pacientemente colhidas no momento perfeito por produtores 
                            experientes de todo o mundo para a composição ideal do extrato.
                        </p>

                        <img src="/images/demo/backgrounds/doterra2.jpg" />

                        <p>
                            Cada óleo essencial dōTERRA também é cuidadosamente testado, usando rigorosos 
                            protocolos de qualidade da CPTG (Certified Pure Therapeutic Grade®). Os usuários 
                            mais experientes dos óleos essenciais reconhecerão imediatamente o padrão de 
                            qualidade superior nos produtos dōTERRA, que são naturalmente seguros e eficazes 
                            para uso terapêutico.
                        </p>

                        <h2>
                            Onde comprar Óleos Essenciais dōTERRA?
                        </h2>

                        <p>
                            Se você busca ter mais saúde e bem estar para você e para a sua família, 
                            considere usar Óleos Essenciais dōTERRA. 
                            <br/>Você pode solicitar os óleos por whatsapp: (37) 99993-5181 ou <br/>
                            <a href="http://bit.ly/fale-com-marina" target="_blank">
                            <img src="/images/demo/backgrounds/whatsapp.jpg" 
                                    style={{width: '100px'}}/>clique aqui</a>
                        </p>

                    </div>
                </main>
            </div>

        </div>
        </React.Fragment>
    );
  }
}