const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const reviews = require('../models/review.model')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
}, 
{
    tableName: 'users',
    timestamps: true
});

User.associate = (models) =>{
    User.hasMany(models.Review, {
        foreignKey: 'user_id',
        as: 'reviews'
    });
}

module.exports = User;
