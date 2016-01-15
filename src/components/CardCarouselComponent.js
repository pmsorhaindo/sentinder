'use strict';

import React from 'react';
import {CARD_BUFFER_LIMIT} from '../constants/CardBufferConstants';
require('styles//CardCarousel.scss');

class CardCarouselComponent extends React.Component {

  componentDidUpdate() {
    const {state} = this.props;
    console.log('CardCarousel >>>>', state);
  }

  render() {
  const {actions, state} = this.props;
    return (
      <div className="cardcarousel-component">
      {CARD_BUFFER_LIMIT} Hello!
      </div>
    );
  }
}

CardCarouselComponent.displayName = 'CardCarouselComponent';

// Uncomment properties you need
// CardCarouselComponent.propTypes = {};
// CardCarouselComponent.defaultProps = {};

export default CardCarouselComponent;
