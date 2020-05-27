const fs = require( 'fs' );
module.exports = {
  friendlyName: 'Run sql file',
  description: '',
  inputs: {
    file: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      description: 'All done.'
    }
  },
  fn: async function ( inputs, exits ) {
    //recibe un archivo, lo abre, lo separa por consultas ";"
    //las ejecuta una por una
    var query = Buffer.from( fs.readFileSync( inputs.file ) ).toString();
    const querys = query.split( ';' );
    const logRegex = /^((?:\S+\s+){2}\w+).*/g;
    for ( const q in querys ) {
      if ( querys[q].trim() ) {
        var r = logRegex.exec( querys[q].trim() );
        if ( r && r.length ) {
          sails.log.info( r[0] );
        }
        try {
          await sails.getDatastore().sendNativeQuery( querys[q].trim() );
        } catch (error) {
          return exits.error(error);
        }
      }
    }
    return exits.success();
  }


};
