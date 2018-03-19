'use strict'

module.exports = {
  name: 'pttg-rps-contact',
  baseUrl: '/',
  steps: {
    '/contact': {
      fields: ['title', 'name', 'surname', 'telephone', 'email-address', 'existing', 'appref', 'dob', 'nationality'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    },
    '/healthz': {}
  }
}

/*
Title
Given Name*
Family Name*
Telephone Guidance: we may need to contact you by phone to answer your question.
Email*

Is your question about an existing application? yes/no*

If yes: Preferable if these questions only appear if the above answer is “yes”.

What is your application Reference Number? Guidance: what this is and where they would get it etc.
Or
What is your date of birth?
What is your nationality?
*/
