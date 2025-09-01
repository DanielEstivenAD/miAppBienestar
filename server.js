const express = require('express');
const app = express();
const db = require('./models');
const cors = require("cors");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Configurar CORS ANTES de las rutas
app.use(cors({
    origin: [
        'http://localhost:57689',
        'http://localhost:51853',
        'http://localhost:3000',
        'http://127.0.0.1:57689',
        'http://127.0.0.1:51853',
        'http://127.0.0.1:3000'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true
}));

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
});