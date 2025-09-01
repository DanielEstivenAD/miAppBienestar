const express = require('express');
const app = express();
const db = require('./models');
const cors = require("cors");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Configuración de CORS por ambiente
let corsOptions;

if (process.env.NODE_ENV === 'production') {
    // En producción, solo dominios específicos
    corsOptions = {
        origin: [
            'https://tudominio.com',           // Cambia por tu dominio real
            'https://www.tudominio.com',       // Cambia por tu dominio real
            // Agrega aquí otros dominios de producción si los tienes
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
        credentials: true
    };
} else {
    // En desarrollo, permitir cualquier localhost con cualquier puerto
    corsOptions = {
        origin: function (origin, callback) {
            // Permitir peticiones sin origin (aplicaciones móviles, Postman, etc.)
            if (!origin) return callback(null, true);
            
            // Permitir cualquier localhost con cualquier puerto
            if (origin.match(/^http:\/\/localhost:\d+$/) || 
                origin.match(/^http:\/\/127\.0\.0\.1:\d+$/)) {
                return callback(null, true);
            }
            
            // Si no coincide con localhost, rechazar
            return callback(new Error('Not allowed by CORS'));
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
        credentials: true
    };
}

// Aplicar configuración CORS ANTES de las rutas
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({ message: "API Activa" });
});

// Routes
app.use('/api/v1/categories', require('./api/v1/routes/categories.routes'));
app.use('/api/v1/events', require('./api/v1/routes/events.routes'));
app.use('/api/v1/users', require('./api/v1/routes/user.routes'));
app.use('/api/v1/rols', require('./api/v1/routes/rols.routes'));

app.set('PORT', process.env.PORT || 4000);
app.listen(app.get('PORT'), () => {
    console.log(`Server running on PORT ${app.get('PORT')}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});