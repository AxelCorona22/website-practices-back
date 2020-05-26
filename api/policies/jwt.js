
module.exports = async function ( req, res, next ) {
/*

haders debe traer "authorization: Bearer key"
*/


  if(req.headers.authorization){
    let partes = req.headers.authorization.split(' ');
    if(partes[1] && partes[1].length){ //trae llave?
      //es valida?
      let decodificado = jwtService.verify(partes[1]); //verificamos con el mismo service que la generó
      if(decodificado.cliente && decodificado.cliente.id){
        req.cliente = decodificado.cliente;
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
