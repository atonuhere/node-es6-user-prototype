# Node ES6 JWT
![](https://img.shields.io/badge/node-success-brightgreen.svg)
![](https://img.shields.io/badge/test-success-brightgreen.svg)

# Stack
![](https://img.shields.io/badge/node_8-blue.svg)
![](https://img.shields.io/badge/ES6-blue.svg)
![](https://img.shields.io/badge/express-blue.svg)
![](https://img.shields.io/badge/sequelize-blue.svg)
![](https://img.shields.io/badge/mocha-blue.svg)
![](https://img.shields.io/swagger/valid/2.0/:scheme/:url.svg)

## How to use this code?

1. Make sure you have the latest stable version of Node.js installed

  ```
  $ sudo npm cache clean -f
  $ sudo npm install -g n
  $ sudo n stable
  ```
  
2. Configure your database and jsonwebtoken in `config/env`. E.g.:

  ```javascript
  module.exports = {
  mysql: {
    host: 'localhost',
    port: 3306,
    database: 'node_es6',
    username: 'root',
    password: 'mysql',
    pool: {
  	  max: 5,
  	  min: 0,
  	  acquire: 30000,
  	  idle: 10000
    }
  },
  jwt: {
    jwtSecret: '$eCrEt',
    jwtDuration: '2 hours',
  },
  app : {
	  port: 3001
  }
};
  ```

3. Navigate into the folder  

  ```
  $ cd node-es6-user-prototype
  ```
  
4. Install NPM dependencies

  ```
  $ npm install
  ```
  
5. Install NPM sequelize-cli

  ```
  $ npm install --save sequelize-cli
  ```
  
6. Run the project

  ```
  $ node index.js
  ```
  
7. Or use `nodemon` for live-reload
  
  ```
  $ npm run start
  ```
  
  > `npm start` will run `nodemon index.js`.

8. Or use `seeders` for loading master data for dev or prod
  
  ```
  $ npm run seeddemo
  ```
  
  > `npm seeddemo` will run `db:seed`. all files under `db/seeders` dir having filenames `*master-dev.js`  
  
9. Navigate to `http://localhost:3001/api-status` in your browser to check you're seeing the following response

  ```javascript
  { "status": "ok" }
  ```

  > The port can be changed by the setting the env variable `PORT` in app under config

10. API examples are given below   
  
  > Projects can be added by POST http://localhost:3001/api/v1/projects
  	```
  	{
	  "name" : "Project 1",
	  "startDate": "2018-12-04 04:05:02",
	  "users" : [
	    {
	      "username" : "atonu",
	      "email" : "atonu@gmail.com",
	      "role" : "PM"
	    },
	    {
	      "username" : "raj",
	      "email" : "raj@gmail.com",
	      "role" : "Team Member"
	    }
	    ]
	}
	
	```
  > Project created be viewed by GET http://localhost:3001/api/v1/projects/1
  ```
	  {
	    "id": 1,
	    "name": "Project 1",
	    "startDate": "2018-12-03T22:35:02.000Z",
	    "created_at": "2018-12-05T20:27:22.000Z",
	    "updated_at": "2018-12-05T20:27:22.000Z",
	    "developers": [
	        {
	            "id": 1,
	            "username": "atonu",
	            "email": "atonu@gmail.com",
	            "role": "PM"
	        },
	        {
	            "id": 2,
	            "username": "raj",
	            "email": "raj@gmail.com",
	            "role": "Team Member"
	        }
	    ]
	}
	
	```
  > Can create Token using http://localhost:3001/auth with username & password as json request
  > For viewing User info   http://localhost:3001/api/v1/users/1  sent headers "x-access-token"
   
11. If you want to execute the tests

```
$ npm test
```

> `npm test` will run `mocha`.

12. Swagger Api Docs

```
http://localhost:3001/swagger.json
```
## Contribution
- Reach out to me directly at <atonuhere@gmail.com>