const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// 🔥 Configuración MEJORADA de CORS
const corsOptions = {
  origin: function (origin, callback) {
    // Lista de dominios permitidos
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:8080',
      'http://localhost:64520',      // Puerto de Flutter web
      'http://127.0.0.1:3000',
      'http://127.0.0.1:8080',
      'http://127.0.0.1:64520',      // Puerto de Flutter web
      'https://your-flutter-web-domain.com',
      'http://localhost',            // Para requests sin puerto
      'http://127.0.0.1'             // Para requests sin puerto
    ];
    console.log('🌐 Origin de la petición:', origin); // Para debugging
    
    // Permitir requests sin origen (como apps móviles, Postman, etc.)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('❌ Origen no permitido:', origin);
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'X-Requested-With',
    'Accept',
    'Origin',
    'User-Agent'  // Agregado para Flutter
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

// Usar configuración de CORS mejorada
app.use(cors(corsOptions));

// Middleware para preflight requests
app.options('*', cors(corsOptions));

// Middleware para parsear JSON y URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({ message: "API Activa" });
});

// Rutas
app.use('/api/v1/categories', require('./api/v1/routes/categories.routes'));
app.use('/api/v1/events', require('./api/v1/routes/events.routes'));
app.use('/api/v1/users', require('./api/v1/routes/user.routes'));
app.use('/api/v1/rols', require('./api/v1/routes/rols.routes'));

app.set('PORT', process.env.PORT || 4000);

app.listen(app.get('PORT'), () => {
    console.log(`🚀 Servidor corriendo en el PUERTO: ${app.get('PORT')}`);
    console.log(`🌐 URL de acceso: http://localhost:${app.get('PORT')}`);
    console.log('🔧 CORS configurado para desarrollo');
});