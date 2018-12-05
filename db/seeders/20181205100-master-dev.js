'use strict';
module.exports = {
up: async (queryInterface,Sequelize) => {
	await queryInterface.bulkInsert('User', [
	      {username: 'Atonu',email: 'atonuhere@gmail.com',role: 'PM',password : '123456',createdAt: Sequelize.literal('NOW()'),	updatedAt: Sequelize.literal('NOW()')},
	      {username: 'Atonu1',email: 'atonuhere1@gmail.com',role: 'PM',password : '123456',createdAt: Sequelize.literal('NOW()'),	updatedAt: Sequelize.literal('NOW()')},
	      {username: 'Atonu2',email: 'atonuhere2@gmail.com',role: 'PM',password : '123456',createdAt: Sequelize.literal('NOW()'),	updatedAt: Sequelize.literal('NOW()')},
	      
	    ], {});
	const users = await queryInterface.sequelize.query(
			`SELECT id from user;`
		);
	
	return await queryInterface.bulkInsert('Project', [
	    {name: 'Project 1',startDate: Sequelize.literal('NOW()'),createdAt: Sequelize.literal('NOW()'),updatedAt: Sequelize.literal('NOW()'),
	    	developers : [{users[0],users[2]}]
	    },
	    {name: 'Project 2',startDate: Sequelize.literal('NOW()'),createdAt: Sequelize.literal('NOW()'),updatedAt: Sequelize.literal('NOW()'),
	    	developers : [{users[1],users[2]}]	
	    },
	], {});
	
}, 
down: async (queryInterface,Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
    await queryInterface.bulkDelete('Project', null, {});
  }
};