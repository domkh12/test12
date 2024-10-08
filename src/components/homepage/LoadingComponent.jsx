import React from 'react'
import { motion } from "framer-motion";

function LoadingComponent() {
  return (
    <motion.div
    className="flex flex-col justify-center items-center h-full mt-60"
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    >
      <motion.img src="./public/logohomepage.png" alt="" 
      className="box sm:w-96 sm:h-96 w-32 h-32"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
      />
      <h1 className='text-5xl font-bold text-primary mt-16 text-center sm:text-start'>Welcome to ShowCase</h1>
    </motion.div>
  )
}

export default LoadingComponent
