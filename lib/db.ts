import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Default XAMPP user
  password: '', // Default XAMPP password is empty
  database: 'beltran_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});