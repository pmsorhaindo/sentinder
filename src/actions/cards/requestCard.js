import apiClient from '../../sources/apiClient';
import {getJsonOrThrow} from '../../utils/apiUtils';
import {receiveCard, receiveCardFailed} from './';

function requestCard(parameter) {
  return {type: 'REQUEST_CARD', parameter};
}

module.exports = function(query) {
  return (dispatch) => {
    dispatch(requestCard(query));

    return apiClient.fetchCards(query)
      .then(getJsonOrThrow)
      .then(json => dispatch(receiveCard(json)))
      .catch(err => dispatch(receiveCardFailed(err)));
  };
}
