import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import useModalStore from "../../store/modalStore";



function BudgetModal({children}){


const {
budgetModal,
closeBudgetModal

}=useModalStore();





const handleOutsideClick=(e)=>{


if(
e.target.id==="budget-overlay"
){

closeBudgetModal();

}


};





return(


<AnimatePresence>


{

budgetModal && (


<motion.div


id="budget-overlay"


onClick={handleOutsideClick}


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


px-4


bg-black/50


backdrop-blur-md

"

>



<motion.div



initial={{

scale:.8,

opacity:0,

y:40

}}



animate={{

scale:1,

opacity:1,

y:0

}}



exit={{

scale:.8,

opacity:0,

y:40

}}



transition={{

duration:.3,

ease:"easeOut"

}}



className="

relative


w-full


max-w-lg


max-h-[90vh]


overflow-y-auto



bg-white

dark:bg-slate-900



rounded-3xl



p-6

md:p-8



shadow-2xl



border

border-slate-200

dark:border-slate-800

"

>



{/* Top Glow */}


<div

className="

absolute

-right-10

-top-10


h-32

w-32


rounded-full


bg-indigo-500/20


blur-3xl

"

/>





{/* Close Button */}


<button


onClick={closeBudgetModal}



className="

absolute

right-5

top-5


h-10

w-10


rounded-xl


flex

items-center

justify-center



bg-slate-100

dark:bg-slate-800



text-slate-600

dark:text-slate-300



hover:bg-red-500

hover:text-white



transition

duration-300

"


>


<X size={20}/>


</button>







{/* Content */}


<div className="relative z-10">


{children}


</div>






</motion.div>





</motion.div>



)


}


</AnimatePresence>


)

}



export default BudgetModal;