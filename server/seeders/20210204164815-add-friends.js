'use strict';
const { User } = require('../models');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll();
    const steven = users[0];
    const peridot = users[1];
    const pearl = users[2];
    const connie = users[7];
    const onion = users[8];
    const sadie = users[10];
    const doc = users[11];
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: fals
     * }], {});
    */
    return await queryInterface.bulkInsert("Friends", [
      {
      userID: steven.id,
      friendID: peridot.id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userID: steven.id,
      friendID: pearl.id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userID: steven.id,
      friendID: onion.id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userID: doc.id,
      friendID: steven.id,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userID: connie.id,
      friendID: steven.id,
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
    return await queryInterface.bulkDelete("Friends")
  }
};
