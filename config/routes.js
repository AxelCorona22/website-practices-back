/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'POST /api/v1/clientes/delete':                     { action: 'clientes/delete' },
  'GET /api/v1/clientes/get':                         {action:'clientes/get'},

  'POST /api/v1/clientes/registro':                   {action:'acceso/clientes/register'},
  'POST /api/v1/clientes/login':                      { action: 'acceso/clientes/login' },

  'POST /api/v1/acceso/usuarios/login':               { action: 'acceso/usuarios/login' },

  'POST /api/v1/usuarios/delete':                     { action: 'usuarios/delete' },
  'POST /api/v1/usuarios/create':                     { action: 'usuarios/create' },
  'GET /api/v1/usuarios/get':                         { action: 'usuarios/get' },





  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
