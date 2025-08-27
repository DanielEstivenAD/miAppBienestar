'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "rols",
      [
        {
          name: "ADMINISTRADOR",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "COORDINADOR",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "PROFESIONAL DE BIENESTAR",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "INSTRUCTOR",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "APRENDIZ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    ) 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rols', null, {})
  }
};
