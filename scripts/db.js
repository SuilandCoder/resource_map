
var oracledb = require('oracledb');
 
var query = function(sql,callback){
    oracledb.getConnection(
        {
            user          : "c##sj_test",
            password      : "258258",
            connectString : "localhost:1521/orcl"
        },
        function (err, connection)
        {
            if (err)
            {
                console.error(err.message);
                return;
            }/*else{
                console.log("θΏζ₯ζε");
            }*/
            connection.execute(sql, [], function (err, result)
            {
                if (err)
                {
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                // console.log(result);
                // console.log(result.metaData);
                callback(result.rows.map((v)=>
                    {
                        return result.metaData.reduce((p, key, i)=>
                        {
                            p[key.name] = v[i];
                            return p;
                        }, {})
                    }));
                doRelease(connection);
            });
        }
    );
}
 
function doRelease(connection) {
    connection.close(
        function(err) {
            if (err)
                console.error(err.message);
        });
}
 
exports.query = query;