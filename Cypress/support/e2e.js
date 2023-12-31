// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
require('./commands');
import './commands'
import "@shelex/cypress-allure-plugin";
import 'cypress-iframe'; //veya  require('cypress-iframe'); ===> iframe icin
require('@4tw/cypress-drag-drop')  //drag drop icin
// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err) => {
  return false;
});

// Hide fetch/XHR requests from command log
if (Cypress.config('hideXHRInCommandLog')) {
  const app = window.top;
  if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style');
    style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');
    app.document.head.appendChild(style);
  }
}