const userService = require('../services/UserService');

function load(req, res, next, id) {
	return userService.load(req, res, next, id);
}

function get(req, res) {
  return res.status(200).json(req.dbUser);
}

function create(req, res) {
	return userService.create(req, res);
}

function update(req, res) {
	return userService.update(req, res);
}

function list(req, res) {
	return userService.list(req, res);
}

function remove(req, res) {
	return userService.remove(req, res);
}

function createProj(req, res) {
	return userService.createProj(req, res);
}

function getProj(req, res) {
	return res.status(200).json(req.dbProj);
}

function loadProj(req, res, next, id) {
	return userService.loadProj(req, res, next, id);
}

module.exports = {
  load, get, create, update, list, remove,createProj,getProj,loadProj,
};
