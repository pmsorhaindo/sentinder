'use strict';

import React from 'react';
import merge from 'merge';
import addons from 'react-addons';
import ReactDOM from 'react-dom';

require('styles//Card.scss');

class CardComponent extends React.Component {
  getInitialState() {
    return {
      initialPosition: {
        x: 0,
        y: 0
      }
    };
  }

  setInitialPosition() {
    var screen = document.getElementById('master-root'),
    card = ReactDOM.findDOMNode(this),

    initialPosition = {
      x: Math.round((screen.offsetWidth - card.offsetWidth) / 2),
      y: Math.round((screen.offsetHeight - card.offsetHeight) / 2)
    };

    this.setState({
      initialPosition: initialPosition
    });
  }

  componentDidMount() {
    this.setInitialPosition();

    window.addEventListener('resize', this.setInitialPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setInitialPosition);
  }

  render() {
    var initialTranslate = ''.concat(
        'translate3d(',
          this.state.initialPosition.x + 'px,',
          this.state.initialPosition.y + 'px,',
          '0px)'
        );

    var style = merge({
      msTransform: initialTranslate,
      WebkitTransform: initialTranslate,
      transform: initialTranslate,
      zIndex: this.props.index,
      backgroundImage: 'url("images/' + this.props.image + '")'
    }, this.props.style);

    var classes = addons.classSet(merge(
          {
            card: true
          },
          this.props.classes
          ));

    return (
        <div style={style} className={classes}>
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
        </div>
        );
  }
}

CardComponent.displayName = 'CardComponent';

// Uncomment properties you need
// CardComponent.propTypes = {};
// CardComponent.defaultProps = {};

export default CardComponent;
