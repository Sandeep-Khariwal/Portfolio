import React from 'react'
import {motion} from "framer-motion"
// import { Padding } from '@mui/icons-material'

const Item = ({icon,name}) => {
  return (
    <motion.div className='item'
    whileHover={{
        backgroundColor:'rgba(255,255,255,0.3)',
        backdropFilter:"blur(3.5px)",
        WebkitBackdropFilter:"blur(3.5px)",
        border: "1px solid rgba(255,255,255,0.3) ",
        cursor: "pointer",
        // Padding:"0.4rem"
       }}

       transition={{
        type:"none",
        duration:0.1

       }}
    >
      <motion.div className='icon' >
       {icon}
      </motion.div>
      <h5>{name}</h5>
    </motion.div>
  )
}

export default Item
