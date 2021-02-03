'use strict';
const { User } = require('../models');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll();
    const steven = users[0];
    const pearl = users[2];
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert("Transactions", [
      {
        senderID: steven.id,
        recipientID: pearl.id,
        type: 'request',
        description: 'Food',
        amount: 30,
        month: 'January',
        year: '2021',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Transactions")
  }
};
