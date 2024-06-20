const express = require('express')

const {getHome , getProjects , getAbout } = require('./controllers/controllers')

const router = express.Router()

router.route('/')
    .get(getHome)

router.route('/projects')
    .get(getProjects)

router.route('/about')
    .get(getAbout)

module.exports = { router }

