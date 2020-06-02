/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */
var path = require( 'path' );
const fs = require( 'fs' );

let rawdata = fs.readFileSync( 'package.json' );
let package = JSON.parse( rawdata );
module.exports.custom = {
  app: {
    name: package.description,
    version: package.version,
    author: package.author
  },
  appDir: path.dirname( __dirname ),
};
