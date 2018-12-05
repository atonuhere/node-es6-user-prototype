const Sequelize = require('sequelize');
const config = require('../config/env');

// Set up the config
const sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
  host: config.mysql.host,
  port: config.mysql.port,
  dialect: 'mysql',
  operatorsAliases: false, // Disable aliases,
  pool: {
    max: config.mysql.pool.max,
    min: config.mysql.pool.min,
    acquire: config.mysql.pool.acquire,
    idle: config.mysql.pool.idle
  },
  logging: console.log,
});
//sequelize.authenticate();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.project = require('./models/Project.js')(sequelize, Sequelize);
db.user = require('./models/User.js')(sequelize, Sequelize);
db.project.belongsToMany(db.user, { as: 'developers', through: 'project_user',foreignKey: 'userId', otherKey: 'projectId'});
db.user.belongsToMany(db.project, { as: 'projects', through: 'project_user',foreignKey: 'projectId', otherKey: 'userId'});
 
module.exports = db;
