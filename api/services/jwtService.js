const jwtLib = require('jsonwebtoken');

require('dotenv').config();

// With this method we generate a new token based on payload we want to put on it
module.exports.issue = function (payload, expiration) {
  if( !process.env.JWT_SECRET ){
    sails.log('No esta configurado JWT_SECRET en el archivo .env');
    return;
  }
  return jwtLib.sign(
    payload, // This is the payload we want to put inside the token
    process.env.JWT_SECRET, // Secret string which will be used to sign the token
    {
      expiresIn: expiration || process.env.JWT_EXPIRATION || '8h'
    }
  );
};

// Here we verify that the token we received on a request hasn't be tampered with.
module.exports.verify = function (jwt, verified) {
  if( !process.env.JWT_SECRET ){
    sails.log('No esta configurado JWT_SECRET en el archivo .env');
    return;
  }
  return jwtLib.verify(
    jwt,
    process.env.JWT_SECRET, {},
    verified
  );
};
