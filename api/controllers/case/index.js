module.exports = {


  friendlyName: 'Index',


  description: 'Index case.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const _cases = await Case.find()
    return _cases

  }


};
