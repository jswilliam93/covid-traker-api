/**
 * Case.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      description: 'The name of the case',
      type: 'string',
      required: true
    },
    temperature: {
      description: 'The temperature of the case',
      type: 'number',
      required: true
    },
    location: {
      description: 'The location of the case',
      type: 'json',
      custom: function (value) {
        return _.isObject(value) &&
          _.isNumber(value.lng) && _.isNumber(value.lat) &&
          value.lng !== Infinity && value.lng !== -Infinity &&
          value.lat !== Infinity && value.lat !== -Infinity;
      },
      required: true
    }

  },

};

