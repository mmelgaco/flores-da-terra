import React, { Component } from 'react';
import Instafeed from 'instafeed.js';

class Social extends Component {

  componentDidMount() {
    var feed = new Instafeed({        
        clientId: '895889ab1e944c8fbe61daee069b2cb1'
    });
    feed.run();
  }

  render() {
    return (
        <div className="wrapper row3">
            <section className="hoc container clear">         
                <div className="center btmspace-50">
                    <div id="instafeed"></div>
                </div>
            </section>
      </div>
    );
  }
}

export default Social;