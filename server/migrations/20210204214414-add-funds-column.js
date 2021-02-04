'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("Users", "funds", {
			type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
		});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
		await queryInterface.removeColumn("Users", "funds");
  }
};
