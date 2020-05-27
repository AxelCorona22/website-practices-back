module.exports = {
  friendlyName: 'Write json db version',
  description: '',
  inputs: {
    version: {
      type: 'string',
      defaultsTo: '00'
    },
    file: {
      type: 'string'
    }
  },
  exits: {
    success: {
      description: 'All done.'
    }
  },
  fn: async function ( inputs, exits ) {
    try {
      await sails.helpers.fs.writeJson.with( {
        destination: 'database.config.json',
        json: {
          version: inputs.version,
          fecha: new Date().toISOString(),
          file: inputs.file
        },
        force: true
      } );
      return exits.success();
    } catch ( err ) {
      var msg = '☠ No se pudo guardar el archivo .json de configuración para la base de datos.  Error: ' + err.stack + '\n\n';
      sails.log( msg );
      return exits.error( msg );
    }
  }


};
