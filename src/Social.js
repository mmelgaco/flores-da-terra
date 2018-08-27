import React, { Component } from 'react';
import Instafeed from 'instafeed';

class Social extends Component {

  componentDidMount() {
    var instafeed = new Instafeed({
        accessToken: "6070700562.17babc8.ad9da11601904a75a4a999f83696e8dd",
        imageTemplate: "<a class=\"instagram\" target=\"_blank\" href=\"{{link}}\"><img src=\"{{image}}\" width=\"{{width}}\" height=\"{{height}}\"></a>"

    });
    instafeed.run();
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