import { motion } from "framer-motion";

import {
  Home,
  ArrowLeft,
  Search,
  Sparkles
} from "lucide-react";

import {
useNavigate
}
from "react-router-dom";



function NotFound(){


const navigate = useNavigate();



return(


<div
className="
relative
min-h-screen
flex
items-center
justify-center
bg-slate-100
dark:bg-slate-950
px-6
overflow-hidden
"
>


{/* Background Glow */}


<div

className="

absolute

w-96

h-96

bg-indigo-500/20

rounded-full

blur-3xl

"

/>



<motion.div


initial={{
opacity:0,
y:40
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:.6
}}



className="

relative

text-center

max-w-xl

"

>




{/* Icon */}


<motion.div


animate={{

rotate:[0,10,-10,0]

}}


transition={{

duration:3,

repeat:Infinity

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


<Sparkles size={45}/>


</motion.div>








<motion.h1

animate={{
y:[0,-15,0]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="
mt-8
text-8xl
font-black
bg-gradient-to-r
from-indigo-600
via-purple-600
to-pink-600
bg-clip-text
text-transparent
"

>
404
</motion.h1>





<h2

className="

mt-4

text-3xl

font-bold

dark:text-white

"


>

Oops! Page Not Found 😅

</h2>





<p

className="

mt-4

text-slate-500

dark:text-slate-400

text-lg

"

>

Looks like this page went missing.

Don't worry, your finances are still safe 🚀

</p>








<div

className="

flex

flex-wrap

justify-center

gap-4

mt-8

"


>


<button


onClick={()=>{
navigate(-1)
}}


className="

flex

items-center

gap-2


px-6

py-3


rounded-2xl


bg-white

dark:bg-slate-900


border

dark:border-slate-800


font-semibold


dark:text-white


hover:scale-105


transition

"


>


<ArrowLeft size={18}/>


Go Back


</button>







<button


onClick={()=>navigate("/dashboard")}



className="

flex

items-center

gap-2


px-6

py-3


rounded-2xl


bg-indigo-600


text-white


font-semibold


hover:bg-indigo-700


hover:scale-105


transition

"

>


<Home size={18}/>


Dashboard


</button>




</div>







<motion.div


initial={{
opacity:0
}}


animate={{
opacity:1
}}


transition={{
delay:.8
}}



className="

mt-10

flex

justify-center

items-center

gap-2


text-indigo-500

"


>


<Sparkles size={18}/>


Smart Finance Experience


</motion.div>





</motion.div>




</div>


)

}


export default NotFound;