'use strict';

import React from 'react';
import addons from 'react-addons';
import DraggableCardComponent from './DraggableCardComponent';
import CardComponent from './CardComponent';
import {CARD_BUFFER_LIMIT} from '../constants/CardBufferConstants';
require('styles//CardCarousel.scss');

class CardCarouselComponent extends React.Component {
  getInitialState() {
    return {
      cards: this.props.initialCardsData,
      alertLeft: false,
      alertRight: false
    };
  }

  removeCard(side, cardId) {
    setTimeout(function() {
      if (side === 'left') {
        this.setState({alertLeft: false});
      } else if (side === 'right') {
        this.setState({alertRight: false});
      }
    }.bind(this), 3000);

    this.setState({
      cards: this.state.cards.filter(function(c) {
        return c.id !== cardId;
      }),
      alertLeft: side === 'left',
      alertRight: side === 'right'
    });
  }

  render() {
    var cards = this.state.cards.map(function(c, index, coll) {
      var props = {
        cardId: c.id,
        index: index,
        onOutScreenLeft: this.removeCard.bind(this, 'left'),
        onOutScreenRight: this.removeCard.bind(this, 'right'),
        title: c.title,
        text: c.text,
        image: c.image
      };

      var component = (index === (coll.length - 1)) ?
        DraggableCardComponent :
        CardComponent;

      return React.createElement(component, props);
    }, this);

    var classesAlertLeft = addons.classSet({
      'alert-visible': this.state.alertLeft,
      'alert-left': true,
      'alert': true
    });
    var classesAlertRight = addons.classSet({
      'alert-visible': this.state.alertRight,
      'alert-right': true,
      'alert': true
    });

    return (
      <div>
        <div className={classesAlertLeft}>left</div>
        <div className={classesAlertRight}>right</div>
        <div id="cards">
        {cards}
        </div>
      </div>
    );
  }
}

CardCarouselComponent.displayName = 'CardCarouselComponent';

// Uncomment properties you need
// CardCarouselComponent.propTypes = {};
// CardCarouselComponent.defaultProps = {};

export default CardCarouselComponent;
