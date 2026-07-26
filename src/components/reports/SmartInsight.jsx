import { motion } from "framer-motion";

import {
  Sparkles,
  AlertTriangle,
  TrendingUp,
  PiggyBank,
  Lightbulb
} from "lucide-react";



function SmartInsight({
transactions,
income,
expense,
balance
}){



// No Transactions

if(!transactions || transactions.length===0){

return(

<div

className="
bg-white
dark:bg-slate-900

border
border-slate-200
dark:border-slate-800

rounded-3xl

p-6

"

>

<p className="
text-slate-500
">

Add transactions to get smart insights.

</p>


</div>

)

}






// Expense Category Analysis


const expenseData =

transactions

.filter(
(item)=>item.type==="expense"
)

.reduce(
(acc,item)=>{


acc[item.category] =

(acc[item.category] || 0)

+

item.amount;


return acc;


},{});





const highest =

Object.entries(expenseData)

.sort(
(a,b)=>b[1]-a[1]
)[0];






// Savings


const savingsRate =

income > 0

?

Math.round(
(balance/income)*100
)

:

0;





let insights=[];





// High Expense

if(highest){

insights.push({

icon:AlertTriangle,

title:"Highest Spending",

text:

`Your maximum spending is on ${highest[0]} (₹${highest[1].toLocaleString()}). Consider reducing this category.`,

color:"red"


});

}






// Savings


if(savingsRate>=30){

insights.push({

icon:PiggyBank,

title:"Great Saving Habit",

text:

`You are saving ${savingsRate}% of your income. Keep maintaining this habit.`,

color:"green"

});


}

else{


insights.push({

icon:TrendingUp,

title:"Improve Savings",

text:

`Try saving at least 20% of your income to improve financial stability.`,

color:"indigo"


});


}








// Balance


if(balance>0){

insights.push({

icon:Lightbulb,

title:"Financial Tip",

text:

`You currently have ₹${balance.toLocaleString()} available balance. Plan your next expenses wisely.`,

color:"yellow"


});


}








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


transition={{
duration:.5
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


shadow-lg

"

>





{/* Glow */}


<div

className="

absolute

right-0

top-0


h-44

w-44


bg-purple-500/10


blur-3xl


rounded-full

"

/>







<div className="relative">





{/* Header */}


<div className="flex items-center gap-3 mb-6">


<div

className="

h-12

w-12


rounded-2xl


bg-purple-100


dark:bg-purple-900/30


flex

items-center

justify-center


text-purple-600

"

>

<Sparkles size={26}/>

</div>



<div>


<h2

className="

text-xl

font-bold

dark:text-white

"

>

Smart Insights

</h2>


<p

className="

text-sm

text-slate-500

"

>

Personalized financial recommendations

</p>


</div>


</div>







{/* Insight Cards */}


<div

className="

grid

grid-cols-1

md:grid-cols-3

gap-5

"

>


{


insights.map((item,index)=>{


const Icon=item.icon;



return(


<motion.div


key={index}


whileHover={{
scale:1.03
}}


className="

p-5

rounded-2xl


bg-slate-50

dark:bg-slate-800


"

>


<Icon

size={24}

className={

item.color==="red"

?

"text-red-500"

:

item.color==="green"

?

"text-green-500"

:

item.color==="yellow"

?

"text-yellow-500"

:

"text-indigo-500"

}

/>



<h3

className="

font-bold

dark:text-white

mt-3

"

>

{item.title}

</h3>



<p

className="

text-sm

text-slate-500

mt-2

leading-6

"

>

{item.text}

</p>



</motion.div>


)


})


}


</div>







</div>





</motion.div>


)

}



export default SmartInsight;