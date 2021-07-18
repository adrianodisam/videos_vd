async function conexao() {
    if (global.connection && global.connection.state !== 'disconnected');
    return global.connection;

    const msql = require('mysql2/promise');
    const con = await msql.createConnection("mysql://root:123456@localhost:3306/videos_vd");
    global.connection = con;
    return con;

}
conexao();
module.exports = {};