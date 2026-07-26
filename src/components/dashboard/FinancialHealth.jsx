import { motion } from "framer-motion";
import {
  HeartPulse,
  TrendingUp,
  ShieldCheck,
  AlertTriangle
} from "lucide-react";


function FinancialHealth({
income,
expense,
balance
}){


const total =
income + expense;



const savingsRate = income
?
Math.round(
(balance / income) * 100
)
:
0;



const expenseRate = income
?
Math.round(
(expense / income) * 100
)
:
0;



let status="Excellent";
let color="text-green-500";
let icon=ShieldCheck;



if(savingsRate < 20){

status="Needs Improvement";
color="text-orange-500";
icon=AlertTriangle;

}


if(savingsRate < 0){

status="Critical";
color="text-red-500";

}




const Icon=icon;



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

dark:border-slate-800

rounded-3xl

p-7

shadow-sm

hover:shadow-xl

transition

"


>


{/* Glow */}


<div

className="
absolute
right-0
top-0

w-40
h-40

rounded-full

bg-green-400/10

blur-3xl

"

/>





<div className="
relative
">


<div className="
flex
items-center
gap-3
">


<div className="
w-12
h-12

rounded-2xl

bg-green-100

dark:bg-green-900/30

flex
items-center
justify-center

text-green-600
">


<HeartPulse size={26}/>


</div>



<div>


<h2 className="
text-2xl
font-bold
dark:text-white
">

Financial Health

</h2>


<p className="
text-sm
text-slate-500
">

Your money wellness score

</p>


</div>


</div>







<div className="
mt-6
flex
items-center
gap-3
">


<Icon
className={color}
size={30}
/>


<div>


<h3 className={`
text-xl
font-bold
${color}
`}>

{status}

</h3>


<p className="
text-sm
text-slate-500
">

Based on your current spending

</p>


</div>


</div>








<div className="
grid
md:grid-cols-3
gap-5

mt-7
">



<div className="
bg-slate-50
dark:bg-slate-800

rounded-2xl

p-4
">


<TrendingUp
className="
text-indigo-500
"
/>


<p className="
text-sm
text-slate-500
mt-2
">

Savings Rate

</p>


<h3 className="
text-2xl
font-bold
dark:text-white
">

{savingsRate}%

</h3>


</div>







<div className="
bg-slate-50
dark:bg-slate-800

rounded-2xl

p-4
">


<p className="
text-sm
text-slate-500
">

Expense Ratio

</p>


<h3 className="
text-2xl
font-bold
dark:text-white
">

{expenseRate}%

</h3>


</div>







<div className="
bg-slate-50
dark:bg-slate-800

rounded-2xl

p-4
">


<p className="
text-sm
text-slate-500
">

Current Balance

</p>


<h3 className="
text-2xl
font-bold
dark:text-white
">

₹{balance.toLocaleString()}

</h3>


</div>



</div>







<div className="
mt-6

p-4

rounded-2xl

bg-indigo-50

dark:bg-indigo-900/20

text-indigo-600

dark:text-indigo-300

">


💡

{
savingsRate >=30

?

"Excellent! You are maintaining healthy saving habits."

:

"Try reducing unnecessary expenses to improve savings."

}


</div>




</div>


</motion.div>


)

}


export default FinancialHealth;