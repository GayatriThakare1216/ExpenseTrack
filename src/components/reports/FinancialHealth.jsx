import { motion } from "framer-motion";
import {
  HeartPulse,
  TrendingUp,
  ShieldCheck
} from "lucide-react";


function FinancialHealth({
income,
expense,
balance
}){


// Savings Percentage

const savingsRate =
income > 0
?
Math.round(
(balance / income) * 100
)
:
0;



// Expense Ratio

const expenseRatio =
income > 0
?
Math.round(
(expense / income) * 100
)
:
0;




// Health Score

let score = 50;


if(savingsRate > 30)
{
score += 25;
}
else if(savingsRate > 10)
{
score += 15;
}



if(expenseRatio < 50)
{
score += 20;
}
else if(expenseRatio < 80)
{
score += 10;
}


score = Math.min(score,100);





let status="Needs Improvement";

if(score>=80)
{
status="Excellent";
}
else if(score>=60)
{
status="Good";
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


whileHover={{
y:-5
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


h-40

w-40


bg-green-400/20


blur-3xl


rounded-full

"

/>







<div className="relative">



{/* Header */}


<div className="flex items-center gap-3">


<div

className="

h-12

w-12


rounded-2xl


bg-green-100

dark:bg-green-900/30


flex

items-center

justify-center


text-green-600

"

>

<HeartPulse size={26}/>

</div>




<div>


<h2

className="

text-xl

font-bold

dark:text-white

"

>

Financial Health

</h2>


<p

className="

text-sm

text-slate-500

"

>

Money management score

</p>


</div>


</div>









{/* Score Circle */}


<div

className="

flex

justify-center

my-8

"

>


<div

className="

relative

h-40

w-40


rounded-full


flex

items-center

justify-center


bg-gradient-to-br

from-green-400

to-emerald-600


shadow-xl

"

>


<div

className="

h-32

w-32


rounded-full


bg-white

dark:bg-slate-900


flex

flex-col

items-center

justify-center

"

>


<h1

className="

text-4xl

font-bold

dark:text-white

"

>

{score}

</h1>


<p

className="

text-xs

text-slate-500

"

>

/100

</p>


</div>


</div>



</div>










{/* Status */}


<div

className="

flex

items-center

justify-center

gap-2


mb-6

"

>


<ShieldCheck

className="text-green-500"

/>


<p

className="

font-semibold

text-green-600

"

>

{status}

</p>


</div>









{/* Stats */}


<div

className="

grid

grid-cols-2

gap-4

"

>


<div

className="

p-4

rounded-2xl

bg-slate-50

dark:bg-slate-800

"

>


<TrendingUp

size={20}

className="text-indigo-500"

/>


<p

className="

text-sm

text-slate-500

mt-2

"

>

Savings

</p>


<h3

className="

text-xl

font-bold

dark:text-white

"

>

{savingsRate}%

</h3>


</div>







<div

className="

p-4

rounded-2xl

bg-slate-50

dark:bg-slate-800

"

>


<p

className="

text-sm

text-slate-500

"

>

Expense Ratio

</p>


<h3

className="

text-xl

font-bold

dark:text-white

mt-2

"

>

{expenseRatio}%

</h3>


</div>




</div>







</div>





</motion.div>


)

}


export default FinancialHealth;