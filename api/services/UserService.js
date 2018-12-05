const db = require('../../db/sequelize');
const User = db.user;
const Project = db.project;

function load(req, res, next, userId) {
  User.findByPk(userId, { attributes: { exclude: ['password', 'refresh_token'] } }).then((user) => {
    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      req.dbUser = user;
      next();
    }
  }).catch((e) => {
    res.status(500).json({ error: e.message });
  });
}

function create(req, res) {
  User.create({
    username: req.body.username,
    password: req.body.password,
  }, { attributes: { exclude: ['refresh_token'] } }).then((newUser) => {
    res.status(201).json(newUser);
  }).catch((e) => {
    res.status(500).json({ error: e.message });
  });
}

function update(req, res) {
  req.dbUser.update(req.body).then(() => {
    res.sendStatus(201);
  }).catch((e) => {
    res.status(500).json({ error: e.message });
  });
}

function list(req, res) {
  const { offset = 0, limit = 50 } = req.query;
  User.findAll({
    offset: offset,
    limit: limit,
    attributes: { exclude: ['password', 'refresh_token'] },
  }).then((users) => {
    res.status(200).json(users);
  }).catch((e) => {
    res.status(500).json({ error: e.message });
  });
}

async function remove(req, res) {
  await req.dbUser.destroy();
  res.sendStatus(204);
}

function generatePass() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function createProj(req, res) {
	var users=[];
	
	var startDt=new Date(req.body.startDate);
	
	var userObjs = req.body.users;
	
	Project.create({
		name: req.body.name,
		startDate: startDt,
	}).then(proj => {
		
		userObjs.forEach(function(userData) {
			//console.log(userData);
			User.create({
				username: userData.username,
				email: userData.email,
				role: userData.role,
				password : generatePass() , 
			}).then((newUser) => {
				//console.log(newUser);
				newUser.setProjects(proj);
				//console.log(users);
			});
			
		});
		//console.log(proj);
		res.status(200).json({ status: 'Proj created : '+proj.id });
	}).catch((e) => {
		res.status(500).json({ error: e.message });
	});
}

function loadProj(req, res, next, projectId) {
	Project.findByPk(projectId, { 
		attributes: { exclude: [] },
		include: [{
			model: User, as: 'developers',
			attributes: ['id', 'username', 'email','role'],
			through: {attributes: [],}
		}],
	}).then((proj) => {
		if (!proj) {
			res.status(404).json({ error: 'Proj not found' });
		} else {
			req.dbProj = proj;
			next();
		}
	}).catch((e) => {
		res.status(500).json({ error: e.message });
	});
}

module.exports = {
  load, create, update, list, remove,createProj,loadProj,
};
