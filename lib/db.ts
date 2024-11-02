import mysql from "mysql2/promise";

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Create a connection pool instead of individual connections
const pool = mysql.createPool(dbConfig);

// Test the connection
pool
  .getConnection()
  .then((connection) => {
    console.log("lib/db.ts: Database connected ");
    connection.release();
  })
  .catch((err) => {
    console.error("lib/db.ts: Error connecting to the Database:", err);
  });

export async function query(sql: string, params: any[] = []) {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    throw error;
  }
}

export default pool;
