"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "writings",
      [
        {
          type: "Speech",
          title: "Dummy Author's speech",
          content:
            "Hello,  I am Dummy Author. This is just an example speech, so there will be little to no content. Thankyou.",
          userId: 2,
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
