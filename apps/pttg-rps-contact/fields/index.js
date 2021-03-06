'use strict'

const dateComponent = require('hof-component-date')

module.exports = {
  name: {
    mixin: 'input-text',
    validate: 'required'
  },
  existing: {
    validate: 'required',
    mixin: 'radio-group',
    options: {
      yes: {
        label: 'Yes',
        value: 'Y',
        toggle: 'conditional'
      },
      no: {
        label: 'No',
        value: 'N'
      }
    }
  },
  appref: {
    mixin: 'input-text'
  },
  dob: dateComponent('dob', {
    validate: ['required', 'date', 'before']
  }),
  nationality: {
    mixin: 'input-text'
  },
  'email': {
    validate: ['email', 'required']
  },
  topic: {
    mixin: 'select',
    options: {
      general: {
        value: 'general',
        label: 'A general question about the Scheme'
      },
      applicationform: {
        value: 'applicationform',
        label: 'The application form'
      },
      supportingdocs: {
        value: 'supportingdocs',
        label: 'Supporting documents'
      },
      reply: {
        value: 'reply',
        label: 'A reply to contact from UKVI'
      },
      myapplication: {
        value: 'myapplication',
        label: 'Details of my application'
      },
      mydecision: {
        value: 'mydecision',
        label: 'Understanding my decision'
      },
      other: {
        value: 'other',
        label: 'Other'
      }
    }
  },
  question: {
    mixin: 'textarea'
  }
}
