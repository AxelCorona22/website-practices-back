require( 'dotenv' ).config();

module.exports.datastores = {
  default: {
    charset: 'utf8mb4',
    connectTimeout: 5000,
    adapter: 'sails-mysql',
    url: `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_DB}`
  }
};
