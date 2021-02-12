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
        first: "Ali",
        last: "Wong",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "ali@mail.com",
        username: "new_mom",
        profilePic: '/uploads/ali.png',
        funds: 4338.10,
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
      {
        first: "Wolfgang",
        last: "Bogdanow",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "wolfgang@mail.com",
        username: "wolfgang",
        profilePic: '/uploads/wolfgang.jpg',
        funds: 34.90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Nomi",
        last: "Marks",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "nomi@mail.com",
        username: "tech_wiz",
        profilePic: '/uploads/nomi.jpg',
        funds: 744.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Lito",
        last: "Rodriguez",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "lito@mail.com",
        username: "nacho_libre",
        profilePic: '/uploads/lito.jpg',
        funds: 744.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Riley",
        last: "Blue",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "riley@mail.com",
        username: "das_sound",
        profilePic: '/uploads/riley.jpg',
        funds: 124.29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Kala",
        last: "Dendekar",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "kala@mail.com",
        username: "goddess",
        profilePic: '/uploads/kala.jpg',
        funds: 8221.49,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Sun",
        last: "Bak",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "sun@mail.com",
        username: "twin_fists",
        profilePic: '/uploads/sun.png',
        funds: 284.22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Will",
        last: "Gorski",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "will@mail.com",
        username: "code_blue",
        profilePic: '/uploads/will.jpg',
        funds: 492.14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Capheus",
        last: "Onyango",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "capheus@mail.com",
        username: "van_damn",
        profilePic: '/uploads/capheus.jpg',
        funds: 106.79,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "David",
        last: "Rose",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "david@mail.com",
        username: "oh_my_gawd",
        profilePic: '/uploads/david.jpg',
        funds: 4554.37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Alexis",
        last: "Rose",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "alexis@mail.com",
        username: "queen_b",
        profilePic: '/uploads/alexis.jpg',
        funds: 4554.37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Moira",
        last: "Rose",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "moira@mail.com",
        username: "bebe",
        profilePic: '/uploads/moira.jpg',
        funds: 4554.37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Johnny",
        last: "Rose",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "johnny@mail.com",
        username: "ex_billionare",
        profilePic: '/uploads/johnny.jpg',
        funds: 4554.37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Jocelyn",
        last: "Schitt",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "jocelyn@mail.com",
        username: "wifey",
        profilePic: '/uploads/jocelyn.jpg',
        funds: 4554.37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Tyler",
        last: "Nguyen",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "tyler@mail.com",
        username: "nguyntyler",
        profilePic: '/uploads/defaultProfile.jpg',
        funds: 5431.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Roland",
        last: "Schitt",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "roland@mail.com",
        username: "hubby",
        profilePic: '/uploads/roland.jpg',
        funds: 4554.37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Twyla",
        last: "Sands",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "twyla@mail.com",
        username: "lone_worker",
        profilePic: '/uploads/twyla.jpg',
        funds: 4554.37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Ted",
        last: "Mullins",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "ted@mail.com",
        username: "animal_lover1",
        profilePic: '/uploads/ted.jpg',
        funds: 4554.37,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first: "Stevie",
        last: "Budd",
        hash: "$2a$10$qj.lITVk0berjRBEKsMdWudTvGhwQAsoY1dtrg52HchsNOhcouxJO",
        email: "stevie@mail.com",
        username: "kms",
        profilePic: '/uploads/stevie.jpg',
        funds: 4554.37,
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
