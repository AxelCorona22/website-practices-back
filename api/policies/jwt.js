
module.exports = async function ( req, res, next ) {
/*

haders debe traer "authorization: Bearer key"
*/


  if(req.headers.authorization){
    let partes = req.headers.authorization.split(' ');
    if(partes[1] && partes[1].length){ //trae llave?
      //es valida?
      var decodedTokenInfo;
      try {
        decodedTokenInfo = jwtService.verify(partes[1]); //verificamos con el mismo service que la generó
      } catch (error) {
        // el token no es valido por expiración, malformación, etc.
        sails.log('Error en token jwt:', error);
        return res.status( 498 ).send( 'Token Expired/Invalid' );
      }

      if(decodedTokenInfo.cliente && decodedTokenInfo.cliente.id || decodedTokenInfo.usuario && decodedTokenInfo.usuario.id){
        req.cliente = decodedTokenInfo.cliente;
        req.usuario = decodedTokenInfo.usuario;
        return next();
      }else{
        sails.log('no hay cliente en el token');
      }
    }else{
      sails.log('no hay parte 1');
    }
  }else{
    sails.log('no hay headers authorization');
  }

  sails.log.verbose( 'policy:jwt', req.headers );

  return res.sendStatus( 401 ); //regresamos un 401 que será procesado por el interceptor en el front.

};
