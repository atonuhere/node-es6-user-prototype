const bcrypt = require('bcrypt');
const uuidv1 = require('uuid/v1');

module.exports = (sequelize, Sequelize) => {

	const User = sequelize.define('User', {
	  id: {
	    type: Sequelize.INTEGER,
	    autoIncrement: true,
	    primaryKey: true,
	  },
	  username: {
	    type: Sequelize.STRING,
	    allowNull: false,
	    unique: {
	      args: true,
	      msg: 'Username already exists',
	    }
	  },
	  password: {
	    type: Sequelize.STRING,
	    allowNull: true,
	  },
	  email: {
		  type: Sequelize.STRING,
		  allowNull: true,
	  },
	  role: {
		  type: Sequelize.STRING,
		  allowNull: true,
	  },
	  refresh_token: {
	    type: Sequelize.UUID,
	    allowNull: false,
	    unique: {
	      args: true,
	      msg: 'Odds are really against you',
	    },
	    defaultValue: uuidv1(),
	  },
	}, { underscored: true });
	
	User.beforeCreate((user) => {
		// Create a password salt
		var salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(user.password, salt);
		user.password = hash;
		user.refresh_token = uuidv1();
	});
	
	User.prototype.comparePassword = function (somePassword) {
		var salt = bcrypt.genSaltSync(10);
		return bcrypt.compareSync(somePassword, this.password,salt);
	};
	
	return User;
}