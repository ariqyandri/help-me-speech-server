"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "writings",
      [
        {
          title: "Dummy Author's speech",
          content:
            "Hello,  I am Dummy Author. This is just an example speech, so there will be little to no content. Thankyou.",
          userId: 2,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("writings", null, {});
  },
};
