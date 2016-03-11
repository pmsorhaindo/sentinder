require('normalize.css');
require('styles/App.css');

import React from 'react';
import CardCarousel from './CardCarouselComponent'
import Tinderable from './Tinderable';
import fetch from 'isomorphic-fetch';
import urlUtils from 'url';

class AppComponent extends React.Component {

  rehydrateCards() {
    let url = `http://localhost:9200/tweets_2016_11/twitter/_search?q=kanye&size=20&from=0`;
    return fetch(url, options);
  }

  render() {
    const {actions, cards, povOf} = this.props;
    //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    let cardsData = [
    {
      title: 'Sentinder',
      pov: povOf,
      id: '1',
      tweetData: {
        id: '703601794824466432',
        user: {
          name: 'Kanye West',
          screen_name: 'kanyewest',
          profile_image_url: 'https://pbs.twimg.com/profile_images/585565077207678977/N_eNSBXi_400x400.jpg'
        },
        text: 'We all know Will Ferrell has always been the one!!!',
        created_at: 'Sat Feb 27 23:57:10 +0000 2016',
        favorite_count: '31432',
        retweet_count: '14784',
        entities: {
          urls: [],
          user_mentions: [],
          hashtags: [],
          symbols: []
        }
      }
    },
    {
      title: 'Sentinder',
      pov: povOf,
      id: '2',
      tweetData: {
        id: '703601794824466432',
        user: {
          name: 'Kanye West',
          screen_name: 'kanyewest',
          profile_image_url: 'https://pbs.twimg.com/profile_images/585565077207678977/N_eNSBXi_400x400.jpg'
        },
        text: 'There\'s good and then there\' Kanye West',
        created_at: 'Sat Feb 27 23:57:10 +0000 2016',
        favorite_count: '31432',
        retweet_count: '14784',
        entities: {
          urls: [],
          user_mentions: [],
          hashtags: [],
          symbols: []
        }
      }
    },
    {
      title: 'Sentinder',
      pov: povOf,
      id: '3',
      tweetData: {
        id: '703601794824466432',
        user: {
          name: 'Kanye West',
          screen_name: 'kanyewest',
          profile_image_url: 'https://pbs.twimg.com/profile_images/585565077207678977/N_eNSBXi_400x400.jpg'
        },
        text: 'We all know Will Ferrell has always been the one!!!',
        created_at: 'Sat Feb 27 23:57:10 +0000 2016',
        favorite_count: '31432',
        retweet_count: '14784',
        entities: {
          urls: [],
          user_mentions: [],
          hashtags: [],
          symbols: []
        }
      }
    },
    {
      title: 'Sentinder',
      pov: povOf,
      id: '4',
      tweetData: {
        id: '703601794824466432',
        user: {
          name: 'Kanye West',
          screen_name: 'kanyewest',
          profile_image_url: 'https://pbs.twimg.com/profile_images/585565077207678977/N_eNSBXi_400x400.jpg'
        },
        text: 'There\'s good and then there\' Kanye West',
        created_at: 'Sat Feb 27 23:57:10 +0000 2016',
        favorite_count: '31432',
        retweet_count: '14784',
        entities: {
          urls: [],
          user_mentions: [],
          hashtags: [],
          symbols: []
        }
      }
    }
    ];
    if (!cards) {
      return <div />;
    }
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

    return (
      <div className="index">
        <Tinderable actions={actions} initialCardsData={cardsData} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
