require('normalize.css');
require('styles/App.css');
require('../../node_modules/react-tinderable/lib/tinderable.css');

import React from 'react';
import CardCarousel from './CardCarouselComponent';
import Tinderable from 'react-tinderable';

  const cardsData = [
  {
    title: 'A wonderful day',
    text: '—— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— -',
    image: 'portrait-1.jpg',
    id: '1',
    twitterData: {
      id: 'asdf4321',
      user: {
        name: 'monster',
        screen_name: '@monster',
        profile_image_url: ''
      },
      text: 'Ed balls!',
      created_at: '12/12/2016',
      favorite_count: '12',
      retweet_count: '40',
      entities: {
        media: [],
        urls: [],
        user_mentions: [],
        hashtags: [],
        symbols: []
      }
    },
  },
  {
    title: 'My amazing journey',
    text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ——— ———— ',
    image: 'portrait-2.jpg',
    id: '2',
    twitterData: {
      id: 'asdf4321',
      user: {
        name: 'monster',
        screen_name: '@monster',
        profile_image_url: ''
      },
      text: 'Ed balls!',
      created_at: '12/12/2016',
      favorite_count: '12',
      retweet_count: '40',
      entities: {
        media: [],
        urls: [],
        user_mentions: [],
        hashtags: [],
        symbols: []
      }
    },

  },
  {
    title: 'Three recipes without cocoa',
    text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ———',
    image: 'portrait-3.jpg',
    id: '3',
    twitterData: {
      id: 'asdf4321',
      user: {
        name: 'monster',
        screen_name: '@monster',
        profile_image_url: ''
      },
      text: 'Ed balls!',
      created_at: '12/12/2016',
      favorite_count: '12',
      retweet_count: '40',
      entities: {
        media: [],
        urls: [],
        user_mentions: [],
        hashtags: [],
        symbols: []
      }
    },

  },
  {
    title: 'Generic clickbait title',
    text: ' —— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— - ——— ',
    image: 'portrait-4.jpg',
    id: '4',
    twitterData: {
      id: 'asdf4321',
      user: {
        name: 'monster',
        screen_name: '@monster',
        profile_image_url: ''
      },
      text: 'Ed balls!',
      created_at: '12/12/2016',
      favorite_count: '12',
      retweet_count: '40',
      entities: {
        media: [],
        urls: [],
        user_mentions: [],
        hashtags: [],
        symbols: []
      }
    },

  }
  ];

class AppComponent extends React.Component {


  render() {
    const {actions, cards} = this.props;
    console.log('App Component render >>>>>', this.props)


//    return (
//      <div className="index">
//        <CardCarousel actions={actions} state={cards}/>
//      </div>
//    );

    return (
      <Tinderable initialCardsData={cardsData} />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
