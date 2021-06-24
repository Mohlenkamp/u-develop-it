
// MySql require
const mysql = require('mysql2')

// Express require stuff
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'kingbee',
      // Your MySQL password
      password: 'buzzbuzz',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

// Routes


// DB queries

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});


// Delete a candidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });

// Get single candidate data
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
      console.log(err);
    }
    console.log(row);
  });

// Get all candidates data
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

// Catchall route if not found
app.use((req, res) => {
    res.status(404).end();
});

// Express server listener (required)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
