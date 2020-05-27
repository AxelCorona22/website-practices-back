var uuidv4 = require( 'uuid' ).v4;
module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true
    },
    uuid:{
      type:'string'
    },
    perfil: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    activo: {
      type: 'boolean',
      defaultsTo: false,
      columnType: 'int'
    },
    password: {
      type: 'string',
      required: true
    },
    clearPassword:{
      type:'string',
      required:false
    }
  },
  beforeCreate: async function ( newUser, next ) {
    //generamos un uuid para el
    newUser.uuid = uuidv4();

    //verificamos que este en minusculas
    newUser.email = newUser.email.toLowerCase();

    //verificamos que no exista
    var found = await Usuarios.findOne( { where: { email: newUser.email } } );

    //si está duplicado, generar el error
    if ( found ) {
      return next( 'Usuario Duplicado' );
    }

    //todo bien, continuar con la creación de usuario
    return next();
  }
};

