
module.exports = async function ( req, res, next ) {
/*

haders debe traer "llave"
"llave" debe contener sails.config.custom.llave = 'estaeslapinchellave123!'
*/

  if(req.headers.authorization && req.headers.authorization === sails.config.custom.llave){
    return next();
  }


  sails.log( 'policy:llave->no valida', req.headers );

  return res.sendStatus( 401 );

};
