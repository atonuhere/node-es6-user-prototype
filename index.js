const app = require('./api/express');
const config = require('./config/env');
const db = require('./db/sequelize');

//force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
	console.log('Resync with { force: false }');
});

const port = parseInt(process.env.PORT, 10) || config.app.port;

app.listen(port, () => {
  console.log(`The server is running at localhost: ${port}`);
});

module.exports = app;
