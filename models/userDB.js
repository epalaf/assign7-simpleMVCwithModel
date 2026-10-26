// Simulated database
const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'assignDBuser',
   database: 'assignDB',
});

const users = [
  { "id": 1, "fname": "Jim", "lname": "Smith", "username": "jsmith" },
  { "id": 2, "fname": "Jack", "lname": "Kennedy", "username": "jkennedy" },
  { "id": 3, "fname": "Linda", "lname": "Nelson", "username": "lnelson" },
  { "id": 4, "fname": "Kayli", "lname": "Williams", "username": "kwilliams" },
  { "id": 5, "fname": "Seth", "lname": "Walters", "username": "swalters" },
  { "id": 6, "fname": "Brandon", "lname": "Jones", "username": "bjones" },
  { "id": 7, "fname": "Ally", "lname": "Smith", "username": "asmith" },
  { "id": 8, "fname": "Jordan", "lname": "Wilson", "username": "jwilson" }
];

function getUsers(callback) {
   connection.execute(
      'SELECT * FROM `users`',
      function (err, results, fields) {
	 console.log(results);
	 console.log(fields);

	 connection.end();
      }
   );
   setTimeout(function () {
      callback(connection);
   }, 1000);
}

function addUser(user, callback) {
  connection.execute(
     'INSERT INTO `users`('fname', 'lname', 'username', 'passwd') VALUES ('user.fname', 'user.lname', 'user.username', 'user.passwd')',
     function (err, results, fields) {
	console.log(results);
	console.log(fields);

	connection.end();
     }
  );
  setTimeout(function () {
     callback(connection);
   }, 500);
}

module.exports = { getUsers, addUser };
