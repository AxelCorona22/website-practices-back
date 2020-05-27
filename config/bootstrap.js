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
  var date1 = new Date();

  await sails.helpers.ensureDatabase();
  await sails.helpers.ensureUsers();

  var date2 = new Date();

  var diff = date2.getTime() - date1.getTime();

  var msec = diff;
  var hh = Math.floor( msec / 1000 / 60 / 60 );
  msec -= hh * 1000 * 60 * 60;
  var mm = Math.floor( msec / 1000 / 60 );
  msec -= mm * 1000 * 60;
  var ss = Math.floor( msec / 1000 );
  msec -= ss * 1000;

  sails.log.verbose( `★ Bootstrap done...`, hh + ':' + mm + ':' + ss );
};
