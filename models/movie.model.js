const { DataTypes } = require("sequelize");
const Sequelize = require("../config/database");
const reviews = require("../models/review.model");

const movie = Sequelize.define(
  "movie",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    synopse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "movie",
    timestamps: true,
  },
);

movie.associate = (models) => {
  movie.hasMany(models.Review, {
    foreignKey: "movie_id",
    as: "reviews",
  });
};

module.exports = movie;
