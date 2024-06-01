const mongoose = require('mongoose')

const {HeaderNav , About} = require("../schema/schema")


const getHome = async (req , res , next) => {

    try{

        const headerNav = await HeaderNav.find()

        const datos = { headerNav }
        
        res.status(200).json(datos)

    } catch(error) {
        next(error)
    }
}

const getProjects = async (req , res , next) => {

    try{

        const projects = await Projects.find()
        
        const datos = { projects }
        
        res.status(200).json(datos)

    } catch(error) {
        next(error)
    }
}

const getAbout = async (req , res , next) => {

    try{

        const about = await About.findOne()
        
        const datos = { about }
        
        res.status(200).json(datos)

    } catch(error) {
        next(error)
    }
}

module.exports = {
    getHome,
    getAbout,
    getProjects
}