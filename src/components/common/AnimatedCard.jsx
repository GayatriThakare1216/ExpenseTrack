import { motion } from "framer-motion";


function AnimatedCard({children}){


return(

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.4
}}

whileHover={{
y:-5,
scale:1.02
}}

>

{children}

</motion.div>

)

}


export default AnimatedCard;