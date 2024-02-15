const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pets = require('./routes/pet.route')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const PORT = process.env.PORT | 5000;
app.use(express.json())
// app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb+srv://pet_store:ahQ3EqTB0djEl7m0@cluster0.ypmkoae.mongodb.net/pet_store').then(() => {
    console.log('Database Connected')
})

const options = {
    definition: {
        openApi: '3.0.0',
        info: {
            title: 'Pet Store APIs with MongoDB',
            version: '1.0.0'
        },
        servers: [{
            url: 'https://pet-store.cyclic.app/'
        }]
    },
    apis: ['./routes/pet.route.js']
}
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.use('/pets', pets)

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})
app.listen(PORT, () => {
    console.log('server is listening')
})