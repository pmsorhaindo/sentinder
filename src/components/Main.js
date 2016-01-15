require('normalize.css');
require('styles/App.css');

import React from 'react';
import CardCarousel from './CardCarouselComponent'

class AppComponent extends React.Component {
  render() {
    const {actions, cards} = this.props;
    console.log('App Component render >>>>>', this.props)

    return (
      <div className="index">
        <CardCarousel actions={actions} state={cards}/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
