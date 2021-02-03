'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert("Users", [
      {
        first: "Steven",
        last: "Universe",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "steven@mail.com",
        username: "Stevenator",
        profilePic: '/uploads/stevenuni.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Peridot",
        last: "Glorp",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "peridot@mail.com",
        username: "Peridactyl",
        profilePic: '/uploads/peridot.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Pearl",
        last: "Nguyen",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "pearl@mail.com",
        username: "Pearlizer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Bismuth",
        last: "Nguyen",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "bismuth@mail.com",
        username: "Down_To_Bismuth",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Amethyst",
        last: "Nguyen",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "amethyst@mail.com",
        username: "Purple_Puma",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Lapis",
        last: "Lazuli",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "lapis@mail.com",
        username: "Watergirl",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Greg",
        last: "Universe",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "greg@mail.com",
        username: "muzak_man",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Connie",
        last: "Maheswaran",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "connie@mail.com",
        username: "Blade122",
        profilePic: '/uploads/connie.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Onion",
        last: "?",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "onion@mail.com",
        username: "Onion",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Laramie",
        last: "Barriga",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "lars@mail.com",
        username: "Lars",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Sadie",
        last: "Miller",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "sadie@mail.com",
        username: "Donut_Girl007",
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
