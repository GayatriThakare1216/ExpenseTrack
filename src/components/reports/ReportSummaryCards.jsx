import { motion } from "framer-motion";

import {
  Wallet,
  TrendingDown,
  PiggyBank,
  Percent
} from "lucide-react";


function ReportSummaryCards({
income,
expense,
balance
}){


const savingsRate =
income > 0
?
Math.round((balance/income)*100)
:
0;



const cards=[

{
title:"Total Income",
value:income,
icon:Wallet,
gradient:"from-emerald-500 to-green-600",
bg:"bg-emerald-50 dark:bg-emerald-900/20",
text:"text-emerald-600",
desc:"Money received"
},


{
title:"Total Expense",
value:expense,
icon:TrendingDown,
gradient:"from-rose-500 to-red-600",
bg:"bg-rose-50 dark:bg-rose-900/20",
text:"text-rose-600",
desc:"Money spent"
},


{
title:"Savings",
value:balance,
icon:PiggyBank,
gradient:"from-indigo-500 to-purple-600",
bg:"bg-indigo-50 dark:bg-indigo-900/20",
text:"text-indigo-600",
desc:"Money saved"
},


{
title:"Saving Rate",
value:savingsRate,
suffix:"%",
icon:Percent,
gradient:"from-amber-500 to-orange-600",
bg:"bg-amber-50 dark:bg-amber-900/20",
text:"text-amber-600",
desc:"Financial efficiency"
}


];





return(

<div

className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-6
"

>


{

cards.map((card,index)=>{


const Icon=card.icon;


return(


<motion.div


key={card.title}


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}


transition={{
delay:index*0.1
}}


whileHover={{
y:-8,
scale:1.03
}}



className="

relative
overflow-hidden

bg-white
dark:bg-slate-900


border
border-slate-200
dark:border-slate-800


rounded-3xl


p-6


shadow-sm

hover:shadow-2xl


transition-all

"



>



{/* Glow */}


<div

className={`

absolute

right-0

top-0


h-32

w-32


rounded-full


blur-3xl


opacity-40


bg-gradient-to-br

${card.gradient}

`}

/>





<div className="relative">



<div className="flex justify-between items-start">


<div

className={`

h-14

w-14


rounded-2xl


${card.bg}


flex

items-center

justify-center

`}

>


<Icon

size={26}

className={card.text}

/>


</div>




<div

className="

px-3

py-1

rounded-full


text-xs

font-semibold


bg-green-100

dark:bg-green-900/30


text-green-600

"

>

+12%

</div>



</div>







<p

className="

mt-6

text-sm

text-slate-500

dark:text-slate-400

"

>

{card.title}

</p>





<h2

className="

text-3xl

font-bold

mt-2

dark:text-white

"

>


{

card.suffix

?

`${card.value}${card.suffix}`

:

`₹${card.value.toLocaleString("en-IN")}`

}



</h2>





<p

className="

mt-3

text-xs

text-slate-400

"

>

{card.desc}

</p>






</div>



</motion.div>


)


})


}



</div>

)


}


export default ReportSummaryCards;