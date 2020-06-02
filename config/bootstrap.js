/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {
  var startTime = new Date();

  await sails.helpers.ensureDatabase();
  await sails.helpers.ensureUsers();

  var endTime = new Date();

  var timeUsed = endTime.getTime() - startTime.getTime();

  var msec = timeUsed;
  var hh = Math.floor( msec / 1000 / 60 / 60 );
  msec -= hh * 1000 * 60 * 60;
  var mm = Math.floor( msec / 1000 / 60 );
  msec -= mm * 1000 * 60;
  var ss = Math.floor( msec / 1000 );
  msec -= ss * 1000;

  sails.log.verbose( `★ Bootstrap done...`, hh + ':' + mm + ':' + ss );
  sentryService.captureMessage(sails.config.custom.app.name+' v'+sails.config.custom.app.version+' ha iniciado.');
};
