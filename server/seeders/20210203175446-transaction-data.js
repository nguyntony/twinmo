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
    const tony = users[11];
    const nomi = users[16];
    const lito = users[17];
    const david = users[23];
    const alexis = users[24];
    const moira = users[25];
    const jocelyn = users[26];
    const tyler = users[29];
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
        senderID: tony.id,
        recipientID: pearl.id,
        type: 'request',
        description: 'Food 🍑',
        amount: 30.00,
        month: 'December',
        year: '2020',
        status: false,
        archived: false,
        approved: false,
        createdAt: new Date('2020-12-01'),
        updatedAt: new Date()
      },
      {
        senderID: tony.id,
        recipientID: connie.id,
        type: 'request',
        description: 'Sword repair 🗡',
        amount: 99.99,
        month: 'January',
        year: '2021',
        status: false,
        archived: false,
        approved: false,
        createdAt: new Date('2021-01-01'),
        updatedAt: new Date()
      },
      {
        senderID: peridot.id,
        recipientID: tony.id,
        type: 'request',
        description: 'Trash Can 🗑',
        amount: 22.08,
        month: 'December',
        year: '2020',
        status: true,
        archived: false,
        approved: true,
        createdAt: new Date('2020-12-10'),
        updatedAt: new Date()
      },
      {
        senderID: onion.id,
        recipientID: tony.id,
        type: 'request',
        description: 'Ranger Guy 🤠',
        amount: 666.00,
        month: 'July',
        year: '2020',
        status: false,
        archived: false,
        approved: false,
        createdAt: new Date('2020-7-10'),
        updatedAt: new Date()
      },
      {
        senderID: sadie.id,
        recipientID: tony.id,
        type: 'request',
        description: 'Microphone 🎙',
        amount: 16.00,
        month: 'November',
        year: '2020',
        status: false,
        archived: false,
        approved: false,
        createdAt: new Date('2020-11-10'),
        updatedAt: new Date()
      },
      {
        senderID: connie.id,
        recipientID: tony.id,
        type: 'request',
        description: 'Debt from last month 💸',
        amount: 16.00,
        month: 'December',
        year: '2020',
        status: true,
        archived: false,
        approved: false,
        createdAt: new Date('2020-12-25'),
        updatedAt: new Date()
      },
      {
        senderID: tony.id,
        recipientID: onion.id,
        type: 'request',
        description: 'Stolen cookiecat 🍪🐱',
        amount: 5.00,
        month: 'July',
        year: '2020',
        status: true,
        archived: false,
        approved: false,
        createdAt: new Date('2020-7-25'),
        updatedAt: new Date()
      },
      {
        senderID: amethyst.id,
        recipientID: tony.id,
        type: 'request',
        description: 'Paper towels 🧻',
        amount: 9.30,
        month: 'January',
        year: '2020',
        status: false,
        archived: false,
        approved: false,
        createdAt: new Date('2020-01-11'),
        updatedAt: new Date()
      },
      {
        senderID: lars.id,
        recipientID: tony.id,
        type: 'request',
        description: 'Gave extra donut 🍩',
        amount: 2.00,
        month: 'July',
        year: '2020',
        status: false,
        archived: false,
        approved: false,
        createdAt: new Date('2020-04-25'),
        updatedAt: new Date()
      },
      {
        senderID: greg.id,
        recipientID: tony.id,
        type: 'request',
        description: 'Car gas ⛽️',
        amount: 32.90,
        month: 'December',
        year: '2020',
        status: true,
        archived: false,
        approved: false,
        createdAt: new Date('2020-12-25'),
        updatedAt: new Date()
      },
      {
        senderID: tony.id,
        recipientID: lapis.id,
        type: 'request',
        description: 'Flooded basement',
        amount: 76.99,
        month: 'August',
        year: '2020',
        status: false,
        archived: false,
        approved: false,
        createdAt: new Date('2020-08-25'),
        updatedAt: new Date()
      },
      {
        senderID: tony.id,
        recipientID: bismuth.id,
        type: 'request',
        description: 'Rent 🏡',
        amount: 300.54,
        month: 'January',
        year: '2021',
        status: true,
        archived: false,
        approved: true,
        createdAt: new Date('2021-01-25'),
        updatedAt: new Date()
      },
      {
        senderID: tony.id,
        recipientID: greg.id,
        type: 'request',
        description: 'Toothbrush 🪥',
        amount: 3.57,
        month: 'November',
        year: '2020',
        status: true,
        archived: false,
        approved: true,
        createdAt: new Date('2020-11-30'),
        updatedAt: new Date()
      },
      {
        senderID: tony.id,
        recipientID: pearl.id,
        type: 'request',
        description: 'Allowance',
        amount: 10.00,
        month: 'May',
        year: '2020',
        status: true,
        archived: false,
        approved: false,
        createdAt: new Date('2020-05-25'),
        updatedAt: new Date()
      },
      {
        senderID: tony.id,
        recipientID: sadie.id,
        type: 'request',
        description: 'Makeup',
        amount: 8.30,
        month: 'May',
        year: '2020',
        status: true,
        archived: false,
        approved: false,
        createdAt: new Date('2020-05-30'),
        updatedAt: new Date()
      },
      {
        senderID: tyler.id,
        recipientID: nomi.id,
        type: 'request',
        description: 'Final notes',
        amount: 81.30,
        month: 'May',
        year: '2020',
        status: true,
        archived: false,
        approved: false,
        createdAt: new Date('2020-05-30'),
        updatedAt: new Date()
      },
      {
        senderID: tyler.id,
        recipientID: alexis.id,
        type: 'request',
        description: 'Studio rent',
        amount: 33.30,
        month: 'June',
        year: '2020',
        status: true,
        archived: false,
        approved: false,
        createdAt: new Date('2020-06-22'),
        updatedAt: new Date()
      },
      {
        senderID: tyler.id,
        recipientID: jocelyn.id,
        type: 'request',
        description: 'Wig',
        amount: 18.00,
        month: 'June',
        year: '2020',
        status: true,
        archived: false,
        approved: false,
        createdAt: new Date('2020-06-30'),
        updatedAt: new Date()
      },
      {
        senderID: lito.id,
        recipientID: tyler.id,
        type: 'request',
        description: 'Singing tips',
        amount: 44.00,
        month: 'November',
        year: '2020',
        status: false,
        archived: false,
        approved: false,
        createdAt: new Date('2020-11-10'),
        updatedAt: new Date()
      },
      {
        senderID: david.id,
        recipientID: tony.id,
        type: 'request',
        description: 'Debt from last month 💸',
        amount: 116.00,
        month: 'December',
        year: '2020',
        status: true,
        archived: false,
        approved: false,
        createdAt: new Date('2020-12-25'),
        updatedAt: new Date()
      },
      {
        senderID: tony.id,
        recipientID: moira.id,
        type: 'request',
        description: 'Wig scissors',
        amount: 9.00,
        month: 'July',
        year: '2020',
        status: true,
        archived: false,
        approved: false,
        createdAt: new Date('2020-7-25'),
        updatedAt: new Date()
      },
      {
        senderID: amethyst.id,
        recipientID: tyler.id,
        type: 'request',
        description: 'Lent clothes',
        amount: 9.30,
        month: 'January',
        year: '2020',
        status: false,
        archived: false,
        approved: false,
        createdAt: new Date('2020-01-11'),
        updatedAt: new Date()
      },
      {
        senderID: tyler.id,
        recipientID: pearl.id,
        type: 'request',
        description: 'Food 🍑',
        amount: 33.10,
        month: 'January',
        year: '2020',
        status: false,
        archived: false,
        approved: false,
        createdAt: new Date('2020-01-01'),
        updatedAt: new Date()
      },
      {
        senderID: tyler.id,
        recipientID: connie.id,
        type: 'request',
        description: 'Dinner',
        amount: 9.99,
        month: 'February',
        year: '2021',
        status: false,
        archived: false,
        approved: false,
        createdAt: new Date('2021-02-01'),
        updatedAt: new Date()
      },
      {
        senderID: lito.id,
        recipientID: tony.id,
        type: 'payment',
        description: 'Dinner',
        amount: 66.99,
        month: 'November',
        year: '2020',
        status: true,
        archived: false,
        approved: true,
        createdAt: new Date('2020-11-01'),
        updatedAt: new Date()
      },
      {
        senderID: moira.id,
        recipientID: tony.id,
        type: 'payment',
        description: 'Napkins',
        amount: 6.09,
        month: 'January',
        year: '2021',
        status: true,
        archived: false,
        approved: true,
        createdAt: new Date('2021-01-05'),
        updatedAt: new Date()
      },
      {
        senderID: moira.id,
        recipientID: tyler.id,
        type: 'payment',
        description: 'Toiletries',
        amount: 11.84,
        month: 'January',
        year: '2021',
        status: true,
        archived: true,
        approved: true,
        createdAt: new Date('2021-01-05'),
        updatedAt: new Date()
      },
      {
        senderID: tony.id,
        recipientID: jocelyn.id,
        type: 'payment',
        description: 'Cool hair tricks',
        amount: 63.09,
        month: 'January',
        year: '2021',
        status: true,
        archived: false,
        approved: true,
        createdAt: new Date('2021-01-05'),
        updatedAt: new Date()
      },
      {
        senderID: tony.id,
        recipientID: alexis.id,
        type: 'payment',
        description: 'Your cool mixtape',
        amount: 110.82,
        month: 'August',
        year: '2020',
        status: true,
        archived: false,
        approved: true,
        createdAt: new Date('2020-08-27'),
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
