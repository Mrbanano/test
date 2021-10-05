module.exports = swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Dev.F atencion al cliente',
      version: '1.0.0',
      description:
        'DEV.F busca crear un TODO APP interna donde el departamento de atencion a cliente pueda estar guardando los casos que va recibiendo de los alumnos.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};
