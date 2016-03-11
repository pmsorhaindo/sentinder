function wasSuccessful(response) {
  return response.status >= 200 && response.status < 300;
}

function createError(response, message = (response.statusText || 'Internal Error')) {
  const error = new Error(message);
  error.status = response.status;
  return error;
}

function pluckMessage(error = {message: ''}) {
  return (typeof error === 'string') ? error : error.message;
}

export function wasSuccessfulOrThrow(response) {
  if (wasSuccessful(response)) {
    return;
  }
  throw createError(response.statusText, response);
}

export function getJsonsOrThrow(responses) {
  if (Array.isArray(responses)) {
    return responses.map(getJsonOrThrow);
  }
  return getJsonOrThrow(responses);
}

export function getJsonOrThrow(response) {
  const json = response.json();

  if (wasSuccessful(response)) {
    return json;
  }

  return json
    .catch(() => {
      throw createError(response);
    })
    .then((data = {errors: []}) => {
      const errorMessage = data.errors.map(pluckMessage).join(', ');
      throw createError(response, errorMessage);
    });
}
