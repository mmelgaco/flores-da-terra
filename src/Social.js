import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed'

class Social extends Component {
  render() {
    return (
        <div className="wrapper row3">
            <section className="hoc container clear">         
                <div className="center btmspace-50">
                <InstagramEmbed
                    url='https://www.instagram.com/p/Bm3RMxilN2c/'
                    maxWidth={320}
                    hideCaption={false}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    />
                </div>
            </section>
      </div>
    );
  }
}

export default Social;