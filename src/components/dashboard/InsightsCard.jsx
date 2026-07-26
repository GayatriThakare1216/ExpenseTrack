import { motion } from "framer-motion";

import {
  TrendingUp,
  Wallet,
  Receipt,
  Lightbulb,
  Sparkles
} from "lucide-react";



function InsightsCard({

transactions,
income,
expense,
balance

}){



const expenseTransactions =
transactions.filter(
(item)=>item.type==="expense"
);





const categoryMap =
expenseTransactions.reduce(
(acc,item)=>{

acc[item.category] =
(acc[item.category] || 0)
+
item.amount;


return acc;

},{});






const highestCategory =
Object.entries(categoryMap)
.sort(
(a,b)=>b[1]-a[1]
)[0];







const savingsRate =
income>0
?
Math.round(
(balance/income)*100
)
:
0;







return(


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

right-0

top-0

h-60

w-60


rounded-full


bg-yellow-400/20


blur-3xl

"

/>





<div className="relative">





{/* Header */}



<div className="
flex
items-center
gap-4
mb-7
">


<div

className="

h-14

w-14


rounded-2xl


bg-gradient-to-br

from-yellow-400

to-orange-500


flex

items-center

justify-center


text-white


shadow-lg

"

>

<Lightbulb size={28}/>

</div>






<div>


<h2

className="

text-2xl

font-bold

dark:text-white

"

>

Financial Insights ✨

</h2>



<p

className="

text-sm

text-slate-500

"

>

Smart analysis of your money habits

</p>



</div>



</div>










{/* Insight Grid */}



<div

className="

grid

grid-cols-1

md:grid-cols-3

gap-6

"

>








{/* Highest Spending */}



<motion.div


whileHover={{
y:-6,
scale:1.02
}}



className="

rounded-3xl

p-5


bg-gradient-to-br

from-red-50

to-white


dark:from-red-500/10

dark:to-slate-900


border

border-red-100

dark:border-red-500/20

"

>


<div

className="

h-11

w-11

rounded-xl

bg-red-500

text-white

flex

items-center

justify-center

mb-4

"

>

<TrendingUp size={22}/>

</div>



<p

className="

text-sm

text-slate-500

"

>

Highest Spending

</p>




<h3

className="

text-xl

font-bold

dark:text-white

mt-2

"

>

{

highestCategory

?

highestCategory[0]

:

"No Data"

}


</h3>




<p

className="

text-red-500

font-semibold

mt-2

"

>

₹{

highestCategory

?

highestCategory[1].toLocaleString("en-IN")

:

0

}

</p>



</motion.div>












{/* Savings Rate */}



<motion.div


whileHover={{
y:-6,
scale:1.02
}}


className="

rounded-3xl

p-5


bg-gradient-to-br

from-emerald-50

to-white


dark:from-emerald-500/10

dark:to-slate-900


border

border-emerald-100

dark:border-emerald-500/20

"

>



<div

className="

h-11

w-11

rounded-xl

bg-emerald-500

text-white

flex

items-center

justify-center

mb-4

"

>

<Wallet size={22}/>

</div>






<p

className="

text-sm

text-slate-500

"

>

Savings Rate

</p>




<h3

className="

text-4xl

font-bold

dark:text-white

mt-2

"

>

{savingsRate}%

</h3>



<p

className="

text-emerald-500

text-sm

font-semibold

mt-2

"

>

Money saved successfully 🚀

</p>



</motion.div>













{/* Transactions */}



<motion.div


whileHover={{
y:-6,
scale:1.02
}}



className="

rounded-3xl

p-5


bg-gradient-to-br

from-indigo-50

to-white


dark:from-indigo-500/10

dark:to-slate-900


border

border-indigo-100

dark:border-indigo-500/20

"

>


<div

className="

h-11

w-11

rounded-xl

bg-indigo-500

text-white

flex

items-center

justify-center

mb-4

"

>

<Receipt size={22}/>

</div>





<p

className="

text-sm

text-slate-500

"

>

Transactions

</p>



<h3

className="

text-4xl

font-bold

dark:text-white

mt-2

"

>

{transactions.length}

</h3>




<p

className="

text-indigo-500

text-sm

font-semibold

mt-2

"

>

Total activity tracked

</p>



</motion.div>








</div>







{/* Bottom AI message */}



<div

className="

mt-7

flex

items-center

gap-3


rounded-2xl


p-4


bg-gradient-to-r

from-indigo-500

to-purple-600


text-white

shadow-lg

"

>


<Sparkles/>


<p

className="

font-medium

"

>

Your financial health score is improving. Keep tracking your expenses!

</p>


</div>





</div>



</motion.div>



)

}


export default InsightsCard;