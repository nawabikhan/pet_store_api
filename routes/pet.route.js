const express = require('express');
const router = express.Router();
const Pet = require('../Models/pets.model');

/**
 * @swagger
 * /pets:
 *  get:
 *      summary: Get all the pets
 *      description: use to request all pets
 *      responses:
 *          200:
 *              description:A successful response
 */
router.get('/', async(req, res, next) => {
    const results = await Pet.find();
    res.send(results)
})

/**
 * @swagger
 * /pets:
 *  post:
 *      summary: Create New pet
 *      description: use to request all pets
 *      responses:
 *          200:
 *              description:A successful response
 */
router.post('/', (req, res, next) => {
    const pet = new Pet({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        isVaccinated: req.body.isVaccinated,
        color:req.body.color
    })
        pet.save().then(result => {
            console.log(result)
            res.send(result)
        }).catch(err => {
        console.log(err)
    })
})
/**
 * @swagger
 * /pets/:id:
 *  get:
 *      summary: Get single pet
 *      description: use to request all pets
 *      responses:
 *          200:
 *              description:A successful response
 */
router.get('/:id', (req, res, next) => {
    res.send('getting a single pet')
})
/**
 * @swagger
 * /pets/:id:
 *  patch:
 *      summary: Updating a pet
 *      description: use to request all pets
 *      responses:
 *          200:
 *              description:A successful response
 */
router.patch('/:id', (req, res, next) => {
    res.send('updating a single pet')
})
/**
 * @swagger
 * /pets/:id:
 *  delete:
 *      summary: Delete a pet
 *      description: use to request all pets
 *      responses:
 *          200:
 *              description:A successful response
 */
router.delete('/:id', (req, res, next) => {
    res.send('deleting a single pet')
})

module.exports = router