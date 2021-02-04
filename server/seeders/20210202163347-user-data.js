'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe'
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert("Users", [
      {
        first: "Steven",
        last: "Universe",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "steven@mail.com",
        username: "stevenator",
        profilePic: '/uploads/stevenuni.jpg',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Peridot",
        last: "Glorp",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "peridot@mail.com",
        username: "peridactyl",
        profilePic: '/uploads/peridot.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Pearl",
        last: "Nguyen",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "pearl@mail.com",
        username: "pearlizer",
        profilePic: '/uploads/pearl.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Bismuth",
        last: "Nguyen",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "bismuth@mail.com",
        username: "down_to_bismuth",
        profilePic: '/uploads/bismuth.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Amethyst",
        last: "Nguyen",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "amethyst@mail.com",
        username: "purple_puma",
        profilePic: '/uploads/amethyst.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Lapis",
        last: "Lazuli",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "lapis@mail.com",
        profilePic: '/uploads/lapis.png',
        username: "watergirl",
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Greg",
        last: "Universe",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "greg@mail.com",
        profilePic: '/uploads/greg.png',
        username: "muzak_man",
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Connie",
        last: "Maheswaran",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "connie@mail.com",
        username: "blade122",
        profilePic: '/uploads/connie.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Onion",
        last: "?",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "onion@mail.com",
        username: "the_abyss",
        profilePic: '/uploads/onion.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Laramie",
        last: "Barriga",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "lars@mail.com",
        username: "the_cool_lars",
        profilePic: '/uploads/lars.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Sadie",
        last: "Miller",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "sadie@mail.com",
        username: "donut_girl007",
        profilePic: '/uploads/sadie.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Ruby",
        last: "Facet",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "doc@mail.com",
        username: "doc",
        profilePic: '/uploads/doc.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Ruby",
        last: "Facet",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "eyeball@mail.com",
        username: "eyeball",
        profilePic: '/uploads/eyeball.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Ruby",
        last: "Facet",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "army@mail.com",
        username: "army",
        profilePic: '/uploads/army.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Garnet",
        last: "Duo",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "garnet@mail.com",
        username: "g_force",
        profilePic: '/uploads/garnet.png',
        funds: 5000.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Users")

  }
};
