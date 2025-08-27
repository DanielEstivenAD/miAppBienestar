'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "events",
      [
        {
        name: "TORNEO DE FÚTBOL REGIONAL",
        description: "Competencia deportiva entre aprendices de diferentes programas.",
        startDate: new Date("2025-03-15"),
        endDate: new Date("2025-03-20"),
        categoryId: 1,
        state: true,
        maxCapacity: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "CAMINATA ECOLÓGICA",
        description: "Recorrido ecológico para fomentar la actividad física y el contacto con la naturaleza.",
        startDate: new Date("2025-04-05"),
        endDate: new Date("2025-04-05"),
        categoryId: 1,
        state: true,
        maxCapacity: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "MUESTRA DE DANZA FOLCLÓRICA",
        description: "Presentación cultural con bailes tradicionales de la región.",
        startDate: new Date("2025-05-10"),
        endDate: new Date("2025-05-10"),
        categoryId: 2,
        state: true,
        maxCapacity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "TALLER DE PINTURA Y DIBUJO",
        description: "Espacio creativo para explorar técnicas artísticas.",
        startDate: new Date("2025-05-15"),
        endDate: new Date("2025-05-17"),
        categoryId: 2,
        state: true,
        maxCapacity: 50,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "JORNADA DE VACUNACIÓN",
        description: "Vacunación gratuita para aprendices y funcionarios.",
        startDate: new Date("2025-03-22"),
        endDate: new Date("2025-03-22"),
        categoryId: 3,
        state: true,
        maxCapacity: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PAUSA ACTIVA MASIVA",
        description: "Actividad física breve para mejorar la salud durante la jornada.",
        startDate: new Date("2025-03-29"),
        endDate: new Date("2025-03-29"),
        categoryId: 3,
        state: false,
        maxCapacity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "CURSO DE ORATORIA",
        description: "Formación en habilidades comunicativas para aprendices.",
        startDate: new Date("2025-06-01"),
        endDate: new Date("2025-06-05"),
        categoryId: 4,
        state: true,
        maxCapacity: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SEMINARIO DE FINANZAS PERSONALES",
        description: "Capacitación en gestión financiera y ahorro.",
        startDate: new Date("2025-07-12"),
        endDate: new Date("2025-07-12"),
        categoryId: 4,
        state: true,
        maxCapacity: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "CAMPAÑA DE RECICLAJE",
        description: "Recolección de residuos para promover la sostenibilidad.",
        startDate: new Date("2025-04-18"),
        endDate: new Date("2025-04-30"),
        categoryId: 5,
        state: true,
        maxCapacity: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "TALLER DE HUERTA URBANA",
        description: "Capacitación en técnicas de cultivo urbano y agricultura sostenible.",
        startDate: new Date("2025-05-03"),
        endDate: new Date("2025-05-03"),
        categoryId: 5,
        state: true,
        maxCapacity: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "FERIA DE INNOVACIÓN",
        description: "Exposición de proyectos de ciencia y tecnología desarrollados por aprendices.",
        startDate: new Date("2025-08-20"),
        endDate: new Date("2025-08-22"),
        categoryId: 6,
        state: true,
        maxCapacity: 250,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "HACKATHON REGIONAL",
        description: "Competencia de programación e innovación tecnológica.",
        startDate: new Date("2025-09-10"),
        endDate: new Date("2025-09-12"),
        categoryId: 6,
        state: true,
        maxCapacity: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "ENCUENTRO DE CONVIVENCIA",
        description: "Actividad grupal para fortalecer el respeto y la integración.",
        startDate: new Date("2025-04-07"),
        endDate: new Date("2025-04-07"),
        categoryId: 7,
        state: true,
        maxCapacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "TORNEO DE AJEDREZ",
        description: "Competencia de ajedrez para fomentar la sana convivencia.",
        startDate: new Date("2025-06-14"),
        endDate: new Date("2025-06-14"),
        categoryId: 7,
        state: false,
        maxCapacity: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "FERIA DE EMPRENDIMIENTO",
        description: "Espacio para mostrar proyectos de negocio de aprendices.",
        startDate: new Date("2025-07-05"),
        endDate: new Date("2025-07-06"),
        categoryId: 8,
        state: true,
        maxCapacity: 220,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "TALLER DE PLAN DE NEGOCIOS",
        description: "Capacitación para estructurar ideas de negocio innovadoras.",
        startDate: new Date("2025-07-15"),
        endDate: new Date("2025-07-16"),
        categoryId: 8,
        state: true,
        maxCapacity: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "ESCUELA DE LIDERAZGO",
        description: "Formación en habilidades de liderazgo y trabajo en equipo.",
        startDate: new Date("2025-05-20"),
        endDate: new Date("2025-05-22"),
        categoryId: 9,
        state: true,
        maxCapacity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "ASAMBLEA DE REPRESENTANTES",
        description: "Espacio de participación para líderes de los programas de formación.",
        startDate: new Date("2025-06-02"),
        endDate: new Date("2025-06-02"),
        categoryId: 9,
        state: false,
        maxCapacity: 70,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "BRIGADA DE LIMPIEZA",
        description: "Jornada de voluntariado para limpiar espacios comunitarios.",
        startDate: new Date("2025-04-12"),
        endDate: new Date("2025-04-12"),
        categoryId: 10,
        state: true,
        maxCapacity: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "CAMPAÑA DE DONACIÓN DE SANGRE",
        description: "Jornada social de donación en alianza con hospitales locales.",
        startDate: new Date("2025-05-25"),
        endDate: new Date("2025-05-25"),
        categoryId: 10,
        state: true,
        maxCapacity: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "COPA DE BALONCESTO",
        description: "Competencia deportiva intercentros.",
        startDate: new Date("2025-06-10"),
        endDate: new Date("2025-06-12"),
        categoryId: 1,
        state: true,
        maxCapacity: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "TALLER DE TEATRO",
        description: "Expresión escénica y desarrollo de habilidades artísticas.",
        startDate: new Date("2025-09-05"),
        endDate: new Date("2025-09-07"),
        categoryId: 2,
        state: true,
        maxCapacity: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "JORNADA DE SALUD VISUAL",
        description: "Exámenes de optometría gratuitos para aprendices.",
        startDate: new Date("2025-06-22"),
        endDate: new Date("2025-06-22"),
        categoryId: 3,
        state: true,
        maxCapacity: 250,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "CURSO DE EXCEL AVANZADO",
        description: "Capacitación complementaria en herramientas ofimáticas.",
        startDate: new Date("2025-08-01"),
        endDate: new Date("2025-08-05"),
        categoryId: 4,
        state: true,
        maxCapacity: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SEMBRATÓN",
        description: "Jornada de siembra de árboles en zonas rurales.",
        startDate: new Date("2025-09-15"),
        endDate: new Date("2025-09-15"),
        categoryId: 5,
        state: true,
        maxCapacity: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "EXPO TECNOLÓGICA",
        description: "Evento para mostrar avances tecnológicos de aprendices e instructores.",
        startDate: new Date("2025-11-02"),
        endDate: new Date("2025-11-03"),
        categoryId: 6,
        state: true,
        maxCapacity: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "CINE FORO DE CONVIVENCIA",
        description: "Proyección de películas y análisis de valores sociales.",
        startDate: new Date("2025-07-25"),
        endDate: new Date("2025-07-25"),
        categoryId: 7,
        state: true,
        maxCapacity: 90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "RUEDA DE NEGOCIOS",
        description: "Espacio para conectar emprendedores con aliados estratégicos.",
        startDate: new Date("2025-10-18"),
        endDate: new Date("2025-10-18"),
        categoryId: 8,
        state: true,
        maxCapacity: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "ENCUENTRO DE LÍDERES",
        description: "Reunión de líderes de formación para compartir experiencias.",
        startDate: new Date("2025-08-28"),
        endDate: new Date("2025-08-28"),
        categoryId: 9,
        state: true,
        maxCapacity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "BRIGADA DE APOYO SOCIAL",
        description: "Actividad de voluntariado para comunidades vulnerables.",
        startDate: new Date("2025-12-12"),
        endDate: new Date("2025-12-12"),
        categoryId: 10,
        state: true,
        maxCapacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {})
  }
};
