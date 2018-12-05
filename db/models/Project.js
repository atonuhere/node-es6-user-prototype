module.exports = (sequelize, Sequelize) => {

	const Project = sequelize.define('Project', {
		id: {
		    type: Sequelize.INTEGER,
		    autoIncrement: true,
		    primaryKey: true,
		},
		name: {
		    type: Sequelize.STRING,
		    allowNull: false,
		    unique: {
		      args: true,
		      msg: 'Name already exists',
		    }
		},
		startDate: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.NOW,
		},
	}, { underscored: true });
	
	return Project;
};