'use strict'

const dateComponent = require('hof-component-date')

module.exports = {
  name: {
    validate: 'required'
  },
  surname: {
    validate: 'required'
  },
  existing: {
    validate: 'required',
    mixin: 'radio-group',
    options: {
      yes: {
        label: 'Yes',
        value: 'Y',
        toggle: 'appref-group'
      },
      no: {
        label: 'No',
        value: 'N'
      }
    }
  },
  dob: dateComponent('dob', {
    validate: ['required', 'date', 'before']
  }),
  'email-address': {
    validate: ['email', 'required']
  }
}
