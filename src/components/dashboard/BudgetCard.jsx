import { motion } from "framer-motion";
import {
Wallet,
TrendingDown,
Sparkles
} from "lucide-react";


function BudgetCard(){


const budget = 50000;

const spent = 32500;


const percentage = Math.round(
(spent / budget) * 100
);


const remaining = budget - spent;



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
y:-8,
scale:1.02
}}

transition={{
duration:.5
}}

className="
relative
overflow-hidden

mt-8

rounded-[32px]

p-7

bg-white/80

dark:bg-slate-900/80

backdrop-blur-xl

border

border-slate-200

dark:border-slate-800

shadow-xl

"

>



{/* Glow */}

<div

className="
absolute
-right-20
-top-20

w-60
h-60

rounded-full

bg-indigo-500/20

blur-3xl
"

/>





<div className="relative">



<div className="
flex
items-center
gap-3
mb-6
">


<div

className="
h-14
w-14

rounded-2xl

bg-gradient-to-br

from-indigo-500

to-purple-600

text-white

flex

items-center

justify-center

shadow-lg

"

>

<Wallet size={28}/>

</div>



<div>

<h2

className="
text-xl

font-bold

dark:text-white

"

>

Budget Overview

</h2>


<p

className="
text-sm

text-slate-500

"

>

Monthly spending limit

</p>


</div>



</div>









<div className="
flex
justify-between
items-center
"

>


<div>

<p

className="
text-sm
text-slate-500
"

>

Monthly Budget

</p>


<h3

className="
text-4xl

font-bold

mt-2

dark:text-white

"

>

₹{budget.toLocaleString("en-IN")}

</h3>


</div>







<div

className="
text-right

"

>


<p

className="
text-sm

text-slate-500

"

>

Remaining

</p>


<h3

className="
text-xl

font-bold

mt-2

text-emerald-500

"

>

₹{remaining.toLocaleString("en-IN")}

</h3>



</div>



</div>








{/* Progress */}

<div className="
mt-8
">


<div className="
flex
justify-between
mb-3
"


>

<span className="
text-sm
text-slate-500
">

Spent

</span>


<span className="
font-bold
dark:text-white
">

{percentage}%

</span>


</div>






<div

className="
h-4

rounded-full

bg-slate-200

dark:bg-slate-700

overflow-hidden

"

>


<motion.div

initial={{
width:0
}}

animate={{
width:`${percentage}%`
}}

transition={{
duration:1.2
}}

className="
h-full

rounded-full

bg-gradient-to-r

from-indigo-500

via-purple-500

to-pink-500

"

/>


</div>


</div>








{/* Insight */}

<div

className="
mt-6

flex

items-center

gap-3

p-4

rounded-2xl

bg-indigo-50

dark:bg-indigo-500/10

"

>


<Sparkles

className="
text-indigo-500
"

/>


<p

className="
text-sm

font-medium

dark:text-white

"

>

You have used {percentage}% of your monthly budget

</p>


</div>





</div>





</motion.div>


)

}


export default BudgetCard;