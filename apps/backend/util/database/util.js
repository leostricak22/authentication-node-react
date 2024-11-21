const pool = require('./connection');

async function query(sql, params=[]) {
    let connection;

    try {
        connection = await pool.getConnection();
        const [results] = await connection.query(sql, params);

        return results;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    } finally {
        if (connection) connection.release();
    }
}

module.exports = { query };