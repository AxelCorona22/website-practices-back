var Sentry;

if ( process.env.SENTRY_NODE ) {
  Sentry = require( '@sentry/node' );
  Sentry.init( { dsn: process.env.SENTRY_NODE } );
  sails.log.info( '★ Sentry Node Activado...' );
}

module.exports.captureMessage = function ( msg ) {
  if ( !Sentry ) {
    sails.log.warn( '★ Sentry Node no está configurado...' );
    return;
  }
  return Sentry.captureMessage( msg );
};
