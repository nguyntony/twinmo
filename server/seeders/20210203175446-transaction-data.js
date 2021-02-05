'use strict';
const { User } = require('../models');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll();
    const steven = users[0];
    const peridot = users[1];
    const pearl = users[2];
    const bismuth = users[3];
    const amethyst = users[4];
    const lapis = users[5];
    const greg = users[6];
    const connie = users[7];
    const onion = users[8];
    const lars = users[9];
    const sadie = users[10];
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: fals
     * }], {});
    */
    return await queryInterface.bulkInsert("Transactions", [
      {
        senderID: steven.id,
        recipientID: pearl.id,
        type: 'request',
        description: 'Food 🍑',
        amount: 30.00,
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
        description: 'Sword repair 🗡',
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
        description: 'Trash Can 🗑',
        amount: 22.08,
        month: 'December',
        year: '2020',
        status: false,
        createdAt: new Date('2020-12-10'),
        updatedAt: new Date()
      },
      {
        senderID: onion.id,
        recipientID: steven.id,
        type: 'request',
        description: 'Ranger Guy 🤠',
        amount: 666.00,
        month: 'July',
        year: '2020',
        status: false,
        createdAt: new Date('2020-7-10'),
        updatedAt: new Date()
      },
      {
        senderID: sadie.id,
        recipientID: steven.id,
        type: 'request',
        description: 'Microphone 🎙',
        amount: 16.00,
        month: 'November',
        year: '2020',
        status: false,
        createdAt: new Date('2020-11-10'),
        updatedAt: new Date()
      },
      {
        senderID: connie.id,
        recipientID: steven.id,
        type: 'request',
        description: 'Debt from last month 💸',
        amount: 16.00,
        month: 'December',
        year: '2020',
        status: true,
        createdAt: new Date('2020-12-25'),
        updatedAt: new Date()
      },
      {
        senderID: steven.id,
        recipientID: onion.id,
        type: 'request',
        description: 'Stolen cookiecat 🍪🐱',
        amount: 5.00,
        month: 'July',
        year: '2020',
        status: true,
        createdAt: new Date('2020-7-25'),
        updatedAt: new Date()
      },
      {
        senderID: amethyst.id,
        recipientID: steven.id,
        type: 'request',
        description: 'Paper towels 🧻',
        amount: 9.30,
        month: 'January',
        year: '2020',
        status: false,
        createdAt: new Date('2020-01-11'),
        updatedAt: new Date()
      },
      {
        senderID: lars.id,
        recipientID: steven.id,
        type: 'request',
        description: 'Gave extra donut 🍩',
        amount: 2.00,
        month: 'July',
        year: '2020',
        status: false,
        createdAt: new Date('2020-04-25'),
        updatedAt: new Date()
      },
      {
        senderID: greg.id,
        recipientID: steven.id,
        type: 'request',
        description: 'Car gas ⛽️',
        amount: 32.90,
        month: 'December',
        year: '2020',
        status: true,
        createdAt: new Date('2020-12-25'),
        updatedAt: new Date()
      },
      {
        senderID: steven.id,
        recipientID: lapis.id,
        type: 'request',
        description: 'Flooded basement',
        amount: 76.99,
        month: 'August',
        year: '2020',
        status: false,
        createdAt: new Date('2020-08-25'),
        updatedAt: new Date()
      },
      {
        senderID: steven.id,
        recipientID: bismuth.id,
        type: 'request',
        description: 'Rent 🏡',
        amount: 300.54,
        month: 'January',
        year: '2021',
        status: true,
        createdAt: new Date('2021-01-25'),
        updatedAt: new Date()
      },
      {
        senderID: steven.id,
        recipientID: greg.id,
        type: 'request',
        description: 'Toothbrush 🪥',
        amount: 3.57,
        month: 'November',
        year: '2020',
        status: true,
        createdAt: new Date('2020-11-30'),
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
