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
    sails.log.verbose('ensure-database...');
    //el proposito de este helper es crear y mantener actualizada la base de datos segun los archivos en mysql/scripts,
    //se llama en config/bootstrap.js

    // leer la version actual de la base de datos.
    var currentDbVersion = await sails.helpers.fs.readJson( 'database.config.json' ).tolerate( 'doesNotExist' );

    // si no hay ninguna base de datos implementada...
    if ( !currentDbVersion || typeof currentDbVersion.version === 'undefined' ) {
      sails.log.info( `◊ Generando estructura de base de datos a partir de: mysql/scripts/init.sql` );

      //ejecutamos el archivo de inicializacion de la base de datos
      await sails.helpers.runSqlFile( `mysql/scripts/init.sql` );

      // almacenamos la version 00
      await sails.helpers.writeJsonDbVersion( '00', `init.sql` );
      sails.log( 'Establecida la version 00 de la BD en archivo database.config.json' );

    } else {

      currentDbVersion = await sails.helpers.fs.readJson( 'database.config.json' ).tolerate( 'doesNotExist' );
      sails.log( 'Ejecutando con la base de datos version ', currentDbVersion.version );
      sails.log( '  de fecha ', currentDbVersion.fecha );
    }

    return exits.success();
  }
};
