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
        category: {
          type: Sequelize.STRING(20),
          primaryKey: true,
          allowNull: false,
        },
        productId: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        productName: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        pPrice: {
          type: Sequelize.STRING(12),
          allowNull: false,
        },
        amounts: {
          type: Sequelize.INTEGER(10),
          allowNull: false,
        },
        size: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        nutrients: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        option: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "kshProducts",
        tableName: "kshProducts",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  static associate(db) {}
};
