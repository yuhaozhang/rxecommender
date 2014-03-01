'use strict'

$(document).ready(function() {
  initializePage();
});

function initializePage() {
  
  $('#back-button').click(function() {
    window.location.href = '/';
  });

  $('#next-button').click(function() {
    window.location.href = '/condition';
  });
}