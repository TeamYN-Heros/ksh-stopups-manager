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
        userToken: {
          type: Sequelize.STRING(200),
          primaryKey: true,
          allowNull: false,
        },
        userEmail: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        userPw: {
          type: Sequelize.STRING(16),
          allowNull: false,
        },
        userName: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
        userAddress: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        userPhone: {
          type: Sequelize.STRING(13),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "KshUsers",
        tableName: "kshUsers",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {}
};
