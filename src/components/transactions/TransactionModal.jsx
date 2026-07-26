import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import useModalStore from "../../store/modalStore";


function TransactionModal({children}){


const {
transactionModal,
closeAddTransaction

}=useModalStore();



return(

<AnimatePresence>


{
transactionModal && (

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

className="
fixed
inset-0
z-50

flex
items-center
justify-center

bg-black/50

backdrop-blur-md

px-4
"

>


<motion.div


initial={{
scale:0.8,
opacity:0,
y:50
}}


animate={{
scale:1,
opacity:1,
y:0
}}


exit={{
scale:0.8,
opacity:0,
y:50
}}


transition={{
duration:0.3,
ease:"easeOut"
}}



className="

relative

w-full

max-w-xl


max-h-[90vh]


overflow-y-auto



bg-white

dark:bg-slate-900



rounded-3xl


p-6


shadow-2xl


border

border-slate-200

dark:border-slate-800

"


>





<button


onClick={closeAddTransaction}


className="

absolute

right-5

top-5


p-2


rounded-xl


bg-slate-100

dark:bg-slate-800


text-slate-600

dark:text-white


hover:scale-110


transition

"

>


<X size={20}/>


</button>





{children}



</motion.div>



</motion.div>

)

}



</AnimatePresence>


)

}


export default TransactionModal;