const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Creation BY Munna Kumar',
            version: '1.0.0',
            description: 'API documentation BY Munna Kumar',
        },
        servers: [
            {
                url: 'http://3.27.148.62:5000',
                description: 'Live Server'
            },
            {
                url: 'http://localhost:5000',
                description: 'Local Server'
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
