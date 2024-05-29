// const mongoose = require('mongoose')

// const {HeaderNav} = require("../schema/schema")


// const getHome = async (req , res , next) => {

//     try{

//         const headerNav = await HeaderNav.find()
//         const inicio    = await Inicio.findOne()

//         const datos = { headerNav  }
        
//         res.status(200).json(datos)

//     } catch(error) {
//         next(error)
//     }
// }

// const getProjects = async (req , res , next) => {

//     try{

//         const projects = await Projects.find()
        

//         const datos = { projects }
        
//         res.status(200).json(datos)

//     } catch(error) {
//         next(error)
//     }
// }

// const getAbout = async (req , res , next) => {

//     try{

//         const aboutImg  = await AboutImg.find()
//         const aboutText = await AboutText.find()
        
//         const datos = { aboutImg , aboutText }
        
//         res.status(200).json(datos)

//     } catch(error) {
//         next(error)
//     }
// }

// module.exports = {
//     getHome
// }