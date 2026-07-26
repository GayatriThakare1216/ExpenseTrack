import { Navigate, useLocation } from "react-router-dom";

import { motion } from "framer-motion";

import useAuthStore from "../../store/authStore";



function ProtectedRoute({ children }) {



const location = useLocation();



const {
user
}=useAuthStore();




// optional loading check
// agar future me backend auth add kiya toh kaam aayega



if(!user){


return (

<Navigate

to="/login"

replace

state={{

from:location.pathname

}}

/>

)


}





return (


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

duration:.4

}}



>


{children}


</motion.div>


)



}


export default ProtectedRoute;