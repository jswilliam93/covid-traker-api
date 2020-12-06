module.exports = {


  friendlyName: 'Create',


  description: 'Create case.',


  inputs: {
    name: {
      description: 'The name of the case',
      type: 'string',
      required: true
    },
    temperature: {
      description: 'The temperature of the case',
      type: 'number',
      required: true,
      max: 43,
      min: 35
    },
    location: {
      description: 'The location of the case',
      type: 'json',
      required: true
    },
  },


  exits: {

  },


  fn: async function ({name, temperature, location}) {

    const _case = await Case.create({name, temperature, location}).fetch();
    return _case;
  }


};
