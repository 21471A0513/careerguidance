const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "prasanna",
  connectString: "localhost:/orcl",
};  
const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.studentname}','${Details.email}','${Details.address}','${Details.phoneno}','${Details.schoolname}','${Details.schooladdress}','${Details.gpa}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set studentname = '${Parameters[3].studentname}', email = '${Parameters[3].email}', address = '${Parameters[3].address}', phoneno = '${Parameters[3].phoneno}' , schoolname = '${Parameters[3].schoolname}' , schooladdress = '${Parameters[3].schooladdress}' , gpa= '${Parameters[3].gpa}' where email = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where email = '${Details}'`;
      break;
    case "Read":
        Sql = `select * from ${Parameters[0]}`;
        if(Details != "All"){
          Sql = `select * from ${Parameters[0]} where email = '${Details}'`;
        }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};
module.exports = Result;