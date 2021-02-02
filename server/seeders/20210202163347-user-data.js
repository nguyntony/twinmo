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
        first: "Pearl",
        last: "Nguyen",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "pearl@mail.com",
        username: "Pearlizer",
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
        first: "Pearl",
        last: "Nguyen",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "pearl@mail.com",
        username: "Pearlizer",
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
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
