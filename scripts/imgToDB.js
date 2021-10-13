var db = require('./db');
var path = require("path");
var fs = require("fs");
var pathName = "E:/public/apache-tomcat-9.0.7/webapps/dxh_resource/imgs/resource/incubator";

var imgRootPath = "/dxh_resource/imgs/resource/incubator/";


fs.readdir(pathName, function(err, files){
    files.forEach((fileName)=>{
        // console.log(val.split("."));
        let infoArr = fileName.split('.');
        let sql = `INSERT INTO RESOURCEINF (PID,TYPE,NAME,IMGPATH) VALUES (${infoArr[0]},'孵化器','${infoArr[1]}','${imgRootPath}${fileName}')`;
        console.log(sql);
        // 执行插入失败！！！
        db.query(sql,function(result){
            console.log(result);
        })
    })
});

db.query("SELECT * FROM RESOURCEINF",function(result){
    console.log(result)
})
