module.exports = {
mysql: {
    host: 'localhost',
    port: 3306,
    database: 'node_es6_prod',
    username: 'nodejs',
    password: 'node!23456',
    pool: {
  	  max: 10,
  	  min: 0,
  	  acquire: 30000,
  	  idle: 10000
    }
  },
  jwt: {
    jwtSecret: '$eCrEt',
    jwtDuration: '6 hours',
  },
  app : {
	  port: 3001
  }
};
