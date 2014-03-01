'use strict'

$(document).ready(function() {
  initializePage();
});

function initializePage() {
  $('#next-button').click(function() {
    window.location.href = '/medication';
  });
}