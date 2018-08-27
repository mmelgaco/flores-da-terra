import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
        <div className="bgded overlay2" 
            style={{backgroundImage: 'url(/images/demo/backgrounds/lavanda.jpg)'}} >
            <section id="testimonials" className="hoc container clear"> 
                <div className="center btmspace-50">
                    <ul className="nospace group">
                        <li>
                            <div>
                                <img src="/images/demo/backgrounds/marina_profile.jpg" 
                                    className="img-circle" 
                                    style={{borderRadius: '50%', border: '1px solid #dbdbdb', width: '80px'}}
                                    width="32%" alt="Empreender c/ Óleos Essenciais" />
                                <h2 className="heading">Quem é Marina Flores?</h2>
                                <p>
                                    Marina é apaixonada por óleos essenciais, mas nem sempre foi assim. 
                                    Formada em Direito, especialista em serviços notariais e de registro, 
                                    foi Oficial de Registro Civil das Pessoas Naturais no interior de Minas 
                                    Gerais por cinco anos.
                                </p>
                                <p>
                                    Esposa do Marcelo desde 2012 e mamãe da Valentina desde 2014, 
                                    descobriu as maravilhas da maternidade, mas também seus desafios. 
                                    Desafios estes que a levaram a conhecer óleos essenciais e a cuidar 
                                    de sua filha (e toda família) de forma natural e eficaz.
                                </p>
                                <p>
                                    Com resultados incríveis o amor pelos óleos essenciais não poderia ser 
                                    diferente, e então porque não compartilha-los? Compartilhar óleos essenciais 
                                    dōTERRA e poder ajudar as pessoas de alguma forma começou a ter um sentido 
                                    muito grande. E aqui estamos hoje. Aromaterapeuta, eterna estudiosa, consultora  
                                    do bem estar dōTERRA, líder de marketing de rede.
                                </p>
                            </div>
                        </li>
                    </ul>

                </div>
                <ul className="nospace group">
                    <li className="one_half first">
                        <div className="clear">  
                            <a href="http://bit.ly/fale-com-marina" target="_blank">                          
                                <img src="/images/demo/backgrounds/whatsapp.jpg" alt="" style={{width: '80px'}}/> 
                            </a>
                            <span className="block">                                
                                <strong>Whatsapp</strong> / <em>(37) 99993-5181</em>                                
                            </span>
                            <blockquote>
                                <a href="http://bit.ly/fale-com-marina" target="_blank">
                                Clique aqui</a> e entre em contato comigo no Whatsapp&hellip;
                            </blockquote>
                        </div>
                    </li>
                    <li className="one_half">
                        <div className="clear">
                            <a href="https://instagram.com/marinaflores_aromaterapia/" target="_blank">
                                <img src="/images/demo/backgrounds/instagram.png" alt="" style={{width: '80px'}}/> 
                            </a>
                            <span className="block">
                                <strong>Instagram</strong> / <em>@marinaflores_aromaterapia</em>
                            </span>
                            <blockquote>
                                <a href="https://instagram.com/marinaflores_aromaterapia/" target="_blank">
                                Clique aqui </a>e companhe os meus posts diários através do instagram, você vai adorar&hellip;
                            </blockquote>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
  }
}

export default Testimonials;