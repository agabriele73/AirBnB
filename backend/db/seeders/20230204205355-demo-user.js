'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Users'
    await queryInterface.bulkInsert(options,[{
        firstName: 'Alfonso',
        lastName: 'Gabriel',
        username: 'sadcheeto',
        email: 'sadcheetto@gmail.com',
        hashedPassword: bcrypt.hashSync('ilikecheetos')
    }] )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users'
    await queryInterface.bulkDelete('Users', {where: {
      userName: 'sadcheeto'
    }})
  }
};