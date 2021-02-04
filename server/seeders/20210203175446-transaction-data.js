'use strict';
const { User } = require('../models');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll();
    const steven = users[0];
    const peridot = users[1];
    const pearl = users[2];
    const connie = users[7];
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
        month: 'December',
        year: '2020',
        status: false,
        createdAt: new Date('2020-12-01'),
        updatedAt: new Date()
      },
      {
        senderID: steven.id,
        recipientID: connie.id,
        type: 'request',
        description: 'Sword repair',
        amount: 99.99,
        month: 'January',
        year: '2021',
        status: false,
        createdAt: new Date('2021-01-01'),
        updatedAt: new Date()
      },
      {
        senderID: peridot.id,
        recipientID: steven.id,
        type: 'request',
        description: 'Trash Can',
        amount: 22.08,
        month: 'December',
        year: '2020',
        status: false,
        createdAt: new Date('2020-12-10'),
        updatedAt: new Date()
      }
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
