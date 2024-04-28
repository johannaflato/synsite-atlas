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
