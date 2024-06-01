const mongoose = require('mongoose')


const headerNavSchema = new mongoose.Schema(
    { href : String , title : String },
    { collection : 'headerNav' }
)
const HeaderNav = mongoose.model( 'HeaderNav' , headerNavSchema)

const aboutSchema = new mongoose.Schema(
    { hrefYo : String , altYo : String , h2 : String , pA : String , pB : String , pC : String  },
    { collection : 'about' }
)
const About = mongoose.model(  'About' , aboutSchema )


// const inicioSchema = new mongoose.Schema(
//     { aaaa : String , bbbb : String },
//     { collection : '' }
// )
// const Inicio = mongoose.model( 'Inicio' , inicioSchema)


// const footerSchema = new mongoose.Schema(
//     { aaaa : String , bbbb : String },
//     { collection : '' }
// )
// const Footer = mongoose.model( 'Footer' , footerSchema)

module.exports = {
    HeaderNav,
    About
}