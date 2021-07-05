const uuid = require('uuid');

'use strict';

module.exports = (sequelize,Sequelize) => {
    const Users = sequelize.define("users", {
         id: {
            type:Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey:true
        },
       photo: {
            type: Sequelize.STRING,
            allowNull: true
        },
        name: {
            type: Sequelize.STRING
        },
        phoneno: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        otheraddress: {
            type: Sequelize.INTEGER
        },
        password: {
            type: Sequelize.INTEGER
        },
        token: {
            type: Sequelize.INTEGER
        },
    });

    return Users;
};