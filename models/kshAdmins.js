const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        idx: {
          type: Sequelize.INTEGER(10),
          autoIncrement: true,
          allowNull: false,
          unique: true,
        },
        adminId: {
          type: Sequelize.STRING(20),
          primaryKey: true,
          allowNull: false,
        },
        adminPw: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        adminToken: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        adminName: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "kshAdmins",
        tableName: "kshAdmins",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
};
