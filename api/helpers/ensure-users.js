require( 'dotenv' ).config();
module.exports = {
  friendlyName: 'Ensure collections',
  description: '',
  inputs: {},
  exits: {
    success: {
      description: 'All done.'
    }
  },

  fn: async function ( inputs, exits ) {
    sails.log.verbose('ensure-users...');
    //el proposito de este helper es crear los usuarios iniciales del sistema cuando no existan,
    //se llama en config/bootstrap.js

    if(!process.env.ACCOUNTS_DOMAIN || !process.env.FIRST_PASSWORD){
      sails.log('ensure-users: FIRST_PASSWORD y ACCOUNTS_DOMAIN  debe estar configurado en las variables de entorno.');
      sails.log('No se crearán cuentas de usuario.' );
      return exits.success();
    }
    // creacion de usuarios
    let domain = '@' + process.env.ACCOUNTS_DOMAIN;

    //admin
    if ( await Usuarios.count( {
      email: 'admin' + domain
    } ) === 0 ) {
      sails.log.verbose( '◊ Generando usuario admin' + domain + '...' );
      await Usuarios.create( {
        email: 'admin' + domain,
        perfil: 'admin',
        nombre: 'Administrador de Sistema',
        activo: true,
        password: await sails.helpers.passwords.hashPassword( process.env.FIRST_PASSWORD ),
        clearPassword: process.env.FIRST_PASSWORD
      } );
      sails.log.verbose( '◊ Password: ' + process.env.FIRST_PASSWORD );
    }

    return exits.success();
  }
};
