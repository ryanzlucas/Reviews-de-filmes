const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const review = sequelize.define(
  "review",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    coment: {
      type: DataTypes.TEXT,
    },

    movie_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "reviews",
    timestamps: true,
  },
);

review.associate = (models) => {
  review.belongsTo(models.Movie, {
    foreignKey: "movie_id",
    as: "movie",
  });

  review.belongsTo(models.User, {
    foreignKey: "user_id",
    as: "user",
  });
};

module.exports = review;
