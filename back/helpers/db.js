const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "poulet123",
  database: "todo"
});
module.exports = connection;
