const express = require('express');
const app = express();
const db = require('./models');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res) =>{
    res.send({message:"API Activa"});
})

//routes
app.use('/api/v1/categories', require('./api/v1/routes/categories.routes'));
app.use('/api/v1/events', require('./api/v1/routes/events.routes')); // Descomentar esta línea

app.set('PORT', process.env.PORT || 4000);
app.listen(app.get('PORT'), ()=>{
    console.log(`Server running on PORT ${app.get('PORT')}`)
})
