'use strict';

var contentNode = document.getElementById('contents');
var continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
var message = continents.map(function (c) {
  return 'Hello, ' + c + '!';
}).join(' ');
var component = React.createElement(
  'h1',
  null,
  message
);
ReactDOM.render(component, contentNode);