const db = require('../db')

async function listar() {
    const con = await db.conexao();
    const [rows] = await con.query('select * from video');
    return rows;
};