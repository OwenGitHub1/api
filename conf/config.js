/**
 * Created with JetBrains WebStorm 2019.1
 * User: Yong.Wei
 * Date:
 * Time:
 * Desc:
 */
module.exports = {
  development:{
    postgresUrl:"postgres://postgres:secretpassword@127.0.0.1:5432/postgres",
    platformList:['tool']
  },
  production:{
    postgresUrl:"postgres://postgres:23f0c7776de6949b6a9777fb35efad7f@postgredb-3297f72719-postgresql:5432/postgres"
  },
};
