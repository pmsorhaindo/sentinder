'use strict';

import React from 'react';
import merge from 'merge';
import addons from 'react-addons';
import ReactDOM from 'react-dom';

require('styles//Card.scss');

class DraggableCardComponent extends React.Component {
  getInitialState() {
    return {
      x: 0,
      y: 0,
      initialPosition: {
        x: 0,
        y: 0
      },
      startPosition: {
        x: 0,
        y: 0
      },
      animation: null
    };
  }

  resetPosition() {
    var screen = document.getElementById('master-root'),
    card = ReactDOM.findDOMNode(this);

    var initialPosition = {
      x: Math.round((screen.offsetWidth - card.offsetWidth) / 2),
      y: Math.round((screen.offsetHeight - card.offsetHeight) / 2)
    };

    var initialState = this.getInitialState();
    this.setState(
      {
        x: initialPosition.x,
        y: initialPosition.y,
        initialPosition: initialPosition,
        startPosition: initialState.startPosition
      }
    );
  }

  panstart() {
    this.setState({
      animation: false,
      startPosition: {
        x: this.state.x,
        y: this.state.y
      }
    });
  }

  panend(ev) {
    var screen = document.getElementById('master-root'),
    card = ReactDOM.findDOMNode(this);

    if (this.state.x < -50) {
      this.props.onOutScreenLeft(this.props.cardId);
    } else if ((this.state.x + (card.offsetWidth - 50)) > screen.offsetWidth) {
      this.props.onOutScreenRight(this.props.cardId);
    } else {
      this.resetPosition();
      this.setState({
        animation: true
      });
    }
  }

  panmove(ev) {
    this.setState(this.calculatePosition(
          ev.deltaX, ev.deltaY
          ));
  }

  pancancel(ev) {
    console.log(ev.type);
  }

  handlePan(ev) {
    ev.preventDefault();
    this[ev.type].call(this, ev);
    return false;
  }

  handleSwipe(ev) {
    console.log(ev.type);
  }

  calculatePosition(deltaX, deltaY) {
    return {
      x: (this.state.initialPosition.x + deltaX),
      y: (this.state.initialPosition.y + deltaY)
    };
  }

  componentDidMount() {
    this.hammer = new Hammer.Manager(ReactDOM.findDOMNode(this));
    this.hammer.add(new Hammer.Pan({threshold: 0}));

    var events = [
      ['panstart panend pancancel panmove', this.handlePan],
      ['swipestart swipeend swipecancel swipemove',
      this.handleSwipe]
    ];

      events.forEach(function(data) {
        if (data[0] && data[1]) {
          this.hammer.on(data[0], data[1]);
        }
      }, this);

      this.resetPosition();
      window.addEventListener('resize', this.resetPosition);
  }

  componentWillUnmount() {
    this.hammer.stop();
    this.hammer.destroy();
    this.hammer = null;

    window.removeEventListener('resize', this.resetPosition);
  }

  render() {
    var translate = ''.concat(
        'translate3d(',
          this.state.x + 'px,',
          this.state.y + 'px,',
          '0px)'
        );

    var style = {
      msTransform: translate,
      WebkitTransform: translate,
      transform: translate
    };

    var classes = {
      animate: this.state.animation
    };

    return (<Card {...this.props}
        style={style}
        classes={classes}></Card>);
  }
}

DraggableCardComponent.displayName = 'DraggableCardComponent';

// Uncomment properties you need
// DraggableCardComponent.propTypes = {};
// DraggableCardComponent.defaultProps = {};

export default DraggableCardComponent;
