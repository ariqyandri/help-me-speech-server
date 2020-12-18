"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "test",
          lastName: "user",
          email: "test@u.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          image:
            "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "dummy",
          lastName: "author",
          email: "dummy@a.com",
          image:
            "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg",
          password: bcrypt.hashSync("dummy", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
