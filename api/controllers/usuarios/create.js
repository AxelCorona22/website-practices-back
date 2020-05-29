module.exports = {


  friendlyName: 'Create',


  description: 'Create usuarios.',


  inputs: {
    nombre: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true,
    },
    password: {
      type: 'string',
      required: true,
    },
    activo: {
      type: 'boolean',
      defaultsTo: false,
      columnType: 'int'
    },
    perfil: {
      type: 'string',
      required: true
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const crearUsuario = await Usuarios.create(inputs);
    inputs.password = await sails.helpers.passwords.hashPassword( process.env.FIRST_PASSWORD );
    // All done.
    return exits.success(crearUsuario);

  }


};
