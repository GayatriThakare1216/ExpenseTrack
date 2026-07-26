import { motion } from "framer-motion";

import {
WalletCards,
Sparkles
} from "lucide-react";


function SplashScreen(){


return(


<div

className="

min-h-screen

flex

items-center

justify-center


bg-slate-950

overflow-hidden

"


>


{/* Background Glow */}


<div className="

absolute

w-96

h-96

rounded-full

bg-indigo-600/30

blur-3xl

"

/>



<div className="

relative

text-center

"


>


<motion.div


initial={{
scale:0,
rotate:-180
}}


animate={{
scale:1,
rotate:0
}}


transition={{
duration:.8,
ease:"backOut"
}}



className="

mx-auto

w-24

h-24

rounded-3xl

bg-gradient-to-br

from-indigo-500

to-purple-600


flex

items-center

justify-center


text-white


shadow-2xl

"


>


<WalletCards size={45}/>


</motion.div>





<motion.h1


initial={{
opacity:0,
y:20
}}


animate={{
opacity:1,
y:0
}}


transition={{
delay:.4
}}


className="

mt-6

text-4xl

font-black

text-white

"


>

ExpenseTrack

</motion.h1>





<motion.div


initial={{
opacity:0
}}


animate={{
opacity:1
}}


transition={{
delay:.7
}}


className="

flex

items-center

justify-center

gap-2

mt-4

text-indigo-300

"


>


<Sparkles size={18}/>


<p>

Smart Finance Management

</p>


</motion.div>





<motion.div


animate={{

width:["0%","100%","0%"]

}}


transition={{

duration:2,

repeat:Infinity

}}



className="

mt-8

h-1

rounded-full

bg-indigo-500

mx-auto

"


style={{

maxWidth:"220px"

}}

/>





</div>



</div>


)

}


export default SplashScreen;