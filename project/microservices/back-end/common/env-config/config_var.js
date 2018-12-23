
var mongo_env = process.env.DB_HOST || "localhost";
module.exports =
{
  "test": {
    "PORT": 3000,
    "MONGODB_URI": "mongodb://"+mongo_env+":27017/NucoreTest"

  },
  "development": {
    "PORT": 3000,
    "MONGODB_URI": "mongodb://"+mongo_env+":27017/NucoreDev"

  },
  "staging": {
    "PORT": 3000,
    "MONGODB_URI": "mongodb://"+mongo_env+":27017/NucoreStaging"

  },
  "production": {
    "PORT": 3000,
    "MONGODB_URI": "mongodb://"+mongo_env+":27017/NucoreProduction"

  }
}
