const Sequelize = require("sequelize");
const kshUsers = require("./kshUsers");
const kshProducts = require("./kshProducts");
const kshAdmins = require("./kshAdmins");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.kshUsers = kshUsers;
db.kshProducts = kshProducts;
db.kshAdmins = kshAdmins;
kshUsers.init(sequelize);
kshProducts.init(sequelize);
kshAdmins.init(sequelize);

kshUsers.associate(db);
kshProducts.associate(db);
module.exports = db;
