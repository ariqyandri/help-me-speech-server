
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Speech",
          description:
            "A formal talk given usually to a large number of people on a special occasion.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Presentation",
          description: "A talk giving information about something.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Interview",
          description:
            "A conversation in which someone is asked questions about themselves or a subject they know about for a newspaper article, television show, etc., or to see if they are suitable for a job or a course.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Poem",
          description:
            "A piece of writing in which the words are arranged in separate lines, often ending in rhyme, and are chosen for their sound and for the images and ideas they suggest.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Play",
          description: "A dramatic work for the stage or to be broadcast.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blog",
          description: "A regular record of your thoughts, opinions, or experiences that you put on the internet for other people to read.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
