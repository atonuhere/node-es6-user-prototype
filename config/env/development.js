module.exports = {
  mysql: {
    host: 'localhost',
    port: 3306,
    database: 'node_es6',
    username: 'nodejs',
    password: 'node@123456',
    pool: {
  	  max: 5,
  	  min: 0,
  	  acquire: 30000,
  	  idle: 10000
    }
  },
  jwt: {
	secret: '$eCrEt',
    duration: '2 hours',
  },
  app : {
	  port: 3001
  }
};
