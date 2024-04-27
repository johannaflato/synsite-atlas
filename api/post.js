const express = require('express');
const router = express.Router();
const Arena = require('are.na');

// Information to reach API
//'accessToken' or 'access_token'?
const accessToken = 'APIKey';
const url = 'https://api.are.na/v2/';

let arena = new Arena({ accessToken: 'APIKey' });

// page elements
const inputField = document.querySelector('#definition-text');
const postButton = document.querySelector('#post');
const result = document.querySelector('#result');

// AJAX functions from boilerplate
const editsToArena = () => {
  const edits = inputField.value;
  arena.block().create('syn-site-edits', edits);

//in order to authenticate the user, should i do something like this...
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  		renderResponse(xhr.response);
		}
  }
  xhr.open('POST', 'https://dev.are.na/oauth/token');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('accessToken', RETURNED_CODE);
  xhr.send(data);
}

//...or something else, and then 'fetch'? see notes from are.na below.
fetch('YOUR_CALLBACK_URL')
  .then(response => response.json())
  .then(jsonResponse => {
    console.log(jsonResponse);
});


// add something here to see if the post sent.
const returnResults = (event) => {
  event.preventDefault();
  editsToArena();
}

postButton.addEventListener('click', returnResults);

// Requesting authorization
// To request the authorization token, you should redirect users to the authorize endpoint:
//
// http://dev.are.na/oauth/authorize
//    ?client_id=YOUR_CLIENT_ID
//    &redirect_uri=YOUR_CALLBACK_URL
//    &response_type=code
// If the user authorizes the your application they will be redirected back to
//
// YOUR_CALLBACK_URL/?code=CODE

// To request the access token,
// you should use the returned code and exchange it for a access token.
// To do that you can use any HTTP client.

// POST https://dev.are.na/oauth/token
//    ?client_id=THE_ID
//    &client_secret=THE_SECRET
//    &code=RETURNED_CODE
//    &grant_type=authorization_code
//    &redirect_uri=YOUR_CALLBACK_URL
//
// Response
// The response will be in JSON
//
// {
//    "access_token": "ACCESS_TOKEN",
//    "token_type": "bearer",
//    "expires_in": null
// }
//
// You can now make authenticated requests to the API signed with this access token.
