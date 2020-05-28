module.exports = {


  friendlyName: 'Login',


  description: 'Login usuarios.',


  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true
    },
    password: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    console.log('usuario: ', inputs);
    const usuario = await Usuarios.findOne({email: inputs.email});
    // All done.
    if(!usuario){
      console.log('usuario no encontrado');
      return exits.success({error:true});
    }

    //validar el pass hasheado

    try {
      await sails.helpers.passwords.checkPassword(inputs.password, usuario.password);
    } catch (error) {
      console.log('Error en el password:', error);
      return exits.success({error:true});
    }

    //el usuario existe, y su password, es valido

    //generamos un token jwt
    let jwt = jwtService.issue({ usuario });

    //entregamos al front
    return exits.success({ jwt, usuario });

  }


};
