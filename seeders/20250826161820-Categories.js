'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "DEPORTE Y RECREACIÓN",
          description: "Actividades deportivas y recreativas que fomentan la salud física, la integración y el trabajo en equipo.",
          image: "https://pixabay.com/get/gd7996fdbf79a0045de1ebcae18c502e4bbd35e218c9793f5dbf4e5c0ac6a4c25d18208a23524cd0b4b5d9e86bd6b02fba_1280.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "CULTURA Y ARTE",
          description: "Eventos culturales, talleres artísticos y muestras de talento para promover la creatividad y la identidad regional.",
          image: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "SALUD Y BIENESTAR",
          description: "Jornadas de salud, pausas activas, campañas de autocuidado y promoción del bienestar integral.",
          image: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "FORMACIÓN COMPLEMENTARIA",
          description: "Cursos, seminarios y capacitaciones adicionales para fortalecer competencias personales y laborales.",
          image: "https://images.pexels.com/photos/414519/pexels-photo-414519.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "AMBIENTE Y SOSTENIBILIDAD",
          description: "Actividades enfocadas en el cuidado del medio ambiente y la promoción de prácticas sostenibles.",
          image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "INNOVACIÓN Y TECNOLOGÍA",
          description: "Eventos de ciencia, innovación y tecnología para impulsar la creatividad y la investigación.",
          image: "https://images.pexels.com/photos/3861954/pexels-photo-3861954.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "INTEGRACIÓN Y CONVIVENCIA",
          description: "Espacios para fortalecer la convivencia, la tolerancia y el respeto entre aprendices.",
          image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "EMPRENDIMIENTO",
          description: "Actividades para potenciar ideas de negocio, planes de emprendimiento y proyectos innovadores.",
          image: "https://images.pexels.com/photos/4968392/pexels-photo-4968392.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "LIDERAZGO Y PARTICIPACIÓN",
          description: "Procesos de formación en liderazgo y espacios de participación en la vida institucional.",
          image: "https://images.pexels.com/photos/1181405/pexels-photo-1181405.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "VOLUNTARIADO Y RESP. SOCIAL",
          description: "Proyectos de voluntariado y responsabilidad social para impactar positivamente en la comunidad.",
          image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  }
};
