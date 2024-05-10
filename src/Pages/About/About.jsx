import React from 'react'
import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Card  title="Ahmad" age="80" img="Ahmad_uchu_rasm" wh='300px' border={"5px solid black"} color='yellow'/>
    </div>
  )
}

export default About