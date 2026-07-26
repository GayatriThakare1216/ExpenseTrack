import { motion } from "framer-motion";
import {
TrendingUp
} from "lucide-react";


function StatsCard({

title,
amount,
icon:Icon,
color="from-indigo-500 to-purple-600",
growth="0%"

}){


return(


<motion.div


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}


whileHover={{
y:-10,
scale:1.03
}}


transition={{
duration:.4
}}



className="

relative

overflow-hidden

rounded-[32px]


bg-white/70

dark:bg-slate-900/70


backdrop-blur-xl


border

border-slate-200

dark:border-slate-800


p-6


shadow-lg


hover:shadow-2xl


transition-all

duration-500

"


>


{/* Glow */}


<div

className={`

absolute

- right-16

- top-16


w-40

h-40


rounded-full


bg-gradient-to-br

${color}


opacity-20


blur-3xl

`}

/>





<div className="relative z-10">





{/* Top */}


<div

className="

flex

justify-between

items-start

"

>


<div>


<p

className="

text-sm

font-medium

text-slate-500

dark:text-slate-400

"

>

{title}

</p>



<h2

className="

text-4xl

font-extrabold

mt-3

tracking-tight

dark:text-white

"

>

₹{Number(amount || 0).toLocaleString("en-IN")}


</h2>


</div>





<div

className={`

w-16

h-16


rounded-3xl


bg-gradient-to-br

${color}


flex

items-center

justify-center


text-white


shadow-xl


ring-4

ring-white/20


`}

>

{

Icon && <Icon size={30}/>

}

</div>




</div>









{/* Growth */}



<div

className="

mt-7

flex

items-center

justify-between

"

>


<div

className="

flex

items-center

gap-2


px-4

py-2


rounded-full


bg-emerald-100

dark:bg-emerald-500/10


text-emerald-600

dark:text-emerald-400


font-semibold

text-sm

"

>


<TrendingUp size={16}/>


{growth}



</div>




<span

className="

text-xs

text-slate-400

"

>

vs last month

</span>



</div>









{/* Bottom Line */}



<div

className="

mt-6

h-2

rounded-full

bg-slate-200

dark:bg-slate-800

overflow-hidden

"

>


<motion.div


initial={{
width:0
}}


animate={{
width:"75%"
}}


transition={{
duration:1
}}



className={`

h-full

rounded-full

bg-gradient-to-r

${color}

`}


/>


</div>





</div>





</motion.div>


)

}



export default StatsCard;