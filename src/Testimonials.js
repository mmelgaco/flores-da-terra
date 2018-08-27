import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
        <div className="bgded overlay" 
            style={{backgroundImage: 'url(/images/demo/backgrounds/marinaflores2.png)'}} >
            <section id="testimonials" className="hoc container clear"> 
                <div className="center btmspace-50">
                    <h2 className="heading">Quem é Marina Flores?</h2>
                    <p>xxx</p>
                </div>
                <ul className="nospace group">
                    <li className="one_half first">
                        <div className="clear">
                            <a href="http://bit.ly/fale-com-marina" target="_blank">
                                <img src="/images/demo/backgrounds/whatsapp.jpg" alt="" style={{width: '80px'}}/> 
                                <span className="block">                                
                                    <strong>Whatsapp</strong> / <em>(37) 99993-5181</em>                                
                                </span>
                                <blockquote>Clique aqui e entre em contato comigo no Whatsapp&hellip;</blockquote>
                            </a>
                        </div>
                    </li>
                    <li className="one_half">
                        <div className="clear">
                            <a href="http://bit.ly/fale-com-marina" target="_blank">
                                <img src="/images/demo/backgrounds/instagram.png" alt="" style={{width: '80px'}}/> 
                                <span className="block">
                                    <strong>Instagram</strong> / <em>@marinaflores_aromaterapia</em>
                                </span>
                                <blockquote>Acompanhe os meus posts diários através do instagram, você vai adorar&hellip;</blockquote>
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
  }
}

export default Testimonials;