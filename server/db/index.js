const mysql=require('mysql');

const pool =mysql.createPool({
    connectionLimit:10,
    password:'',
    user:'root',
    database:'test',
    host:'localhost',
    port:'3306'
});

let test ={};
 test.all=()=>{
     return new Promise((resolve,reject)=>{
         pool.query('select *from amtbl',(err,results)=>{
             if(err){
                 return reject(err);
             }
             return resolve(results);
         });

     });

 };
 test.one=(id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('select *from amtbl where id=?',[id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });

    });

};

 module.exports=test;