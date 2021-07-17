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
test.Login=(username)=>{
    return new Promise((resolve,reject)=>{
        pool.query('select *from logintbl where username=?',[username],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);

        });

    });

};
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
test.insert=(id,name,date)=>{
    return new Promise((resolve,reject)=>{
        pool.query('insert into  amtbl values (?,?,?)',[id,name,date],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.delete=(id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('delete from  amtbl where id=? ',[id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.put=(name,id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('update amtbl set name=? where id=? ',[name,id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });

    });
};

 module.exports=test;