import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {motion} from "framer-motion";
import {useMemo,useState} from "react";

import {
Wallet,
ArrowUpCircle,
ArrowDownCircle,
ShoppingBag,
Utensils,
Car,
Briefcase,
Coffee,
CalendarDays
} from "lucide-react";


import useTransactionStore from "../../store/transactionStore";

import CalendarHeatmap from "./CalendarHeatmap";
import MonthComparison from "./MonthComparison";
import BudgetProgress from "./BudgetProgress";
import FinancialInsights from "./FinancialInsights";
import useBudgetStore from "../../store/budgetStore";





function FinanceCalendar(){



const [date,setDate]=useState(new Date());



const {
transactions=[]
}=useTransactionStore();



const {
budgets=[]
}=useBudgetStore();





const selectedTransactions = useMemo(()=>{


return transactions.filter(item=>

new Date(item.date)
.toDateString()
===
date.toDateString()

);


},[
transactions,
date
]);








const monthlyTransactions = useMemo(()=>{


return transactions.filter(item=>{


const d=new Date(item.date);



return(

d.getMonth()
===
date.getMonth()

&&


d.getFullYear()
===
date.getFullYear()


)


})


},[
transactions,
date
]);








const income = useMemo(()=>{


return monthlyTransactions

.filter(item=>

item.type==="income"

)

.reduce(

(sum,item)=>

sum+Number(item.amount),

0

);


},[
monthlyTransactions
]);







const expense = useMemo(()=>{


return monthlyTransactions

.filter(item=>

item.type==="expense"

)

.reduce(

(sum,item)=>

sum+Number(item.amount),

0

);


},[
monthlyTransactions
]);







const balance =
income-expense;








const tileContent=({date})=>{


const data =
transactions.filter(item=>

new Date(item.date)
.toDateString()
===
date.toDateString()

);



if(!data.length)
return null;



const hasIncome =
data.some(item=>

item.type==="income"

);



const hasExpense =
data.some(item=>

item.type==="expense"

);





return(

<div

className="
flex
justify-center
gap-1
mt-2
"

>


{
hasIncome &&

<span

className="
w-2
h-2
rounded-full
bg-emerald-400
shadow-[0_0_12px_#34d399]
"

/>

}




{
hasExpense &&

<span

className="
w-2
h-2
rounded-full
bg-rose-500
shadow-[0_0_12px_#fb7185]
"

/>

}



</div>

)


};









return(


<motion.div

initial={{
opacity:0,
y:25
}}

animate={{
opacity:1,
y:0
}}

className="
space-y-8
"

>





{/* SUMMARY */}



<div

className="
grid

grid-cols-1

md:grid-cols-3

gap-6

"

>


<SummaryCard

title="Monthly Balance"

value={balance}

icon={Wallet}

gradient="
from-indigo-500
to-purple-600
"

/>



<SummaryCard

title="Income"

value={income}

icon={ArrowUpCircle}

gradient="
from-emerald-400
to-green-600
"

/>




<SummaryCard

title="Expense"

value={expense}

icon={ArrowDownCircle}

gradient="
from-rose-400
to-red-600
"

/>



</div>





{/* MAIN GRID */}


<div

className="
grid

xl:grid-cols-[1.5fr_0.9fr]

gap-8

items-start

"

>


{/* CALENDAR CARD */}


<motion.div

whileHover={{
y:-5
}}

className="
relative

overflow-hidden

rounded-[36px]

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


<div

className="
absolute

right-0

top-0

w-72

h-72

rounded-full

bg-indigo-500/20

blur-3xl

"

/>



<div

className="
relative

flex

justify-between

items-center

mb-6

"

>


<div>


<h2

className="
text-2xl
font-bold
dark:text-white
"

>

Finance Calendar 📅

</h2>



<p

className="
text-sm
text-slate-500
"

>

Track your daily money flow

</p>



</div>





<div

className="
px-4
py-2

rounded-2xl

bg-indigo-100

dark:bg-indigo-500/20

text-indigo-600

dark:text-indigo-300

font-semibold

"

>


{selectedTransactions.length}

</div>



</div>



<Calendar

value={date}

onChange={setDate}

tileContent={tileContent}

/>



<DailySummary

transactions={selectedTransactions}

/>



</motion.div>
{/* RIGHT TRANSACTION PANEL */}



<motion.div


initial={{
opacity:0,
x:40
}}


animate={{
opacity:1,
x:0
}}


transition={{
duration:.5
}}


className="

rounded-[36px]

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



<div

className="
flex

justify-between

items-center

mb-6

"

>


<div>


<h2

className="
text-2xl
font-bold
dark:text-white
"

>

Transactions

</h2>



<p

className="
text-sm
text-slate-500
mt-1
"

>

{date.toDateString()}

</p>


</div>




<div

className="
px-4

py-2

rounded-full

bg-gradient-to-r

from-indigo-500

to-purple-500

text-white

text-sm

font-bold

shadow-lg

"

>


{selectedTransactions.length}

</div>



</div>







<div className="
space-y-4
"

>


{

selectedTransactions.length===0

?

<EmptyState/>


:


selectedTransactions.map(item=>(


<TransactionCard

key={item.id}

item={item}

/>


))


}



</div>



</motion.div>



</div>







{/* ANALYTICS SECTION */}



<div

className="
grid

grid-cols-1

lg:grid-cols-2

gap-8

"

>



<CalendarHeatmap

transactions={transactions}

currentDate={date}

/>




<MonthComparison

transactions={transactions}

date={date}

/>



</div>








{/* BOTTOM ANALYTICS */}



<div

className="
grid

grid-cols-1

lg:grid-cols-2

gap-8

"

>


<BudgetProgress

budgets={budgets}

/>




<FinancialInsights

transactions={transactions}

/>



</div>




</motion.div>


)

}













function SummaryCard({

title,

value,

icon:Icon,

gradient

}){


return(


<motion.div


whileHover={{

y:-8,

scale:1.03

}}



transition={{

duration:.3

}}



className={`

relative

overflow-hidden

rounded-[32px]

p-7

text-white

bg-gradient-to-br

${gradient}

shadow-[0_25px_70px_rgba(99,102,241,.25)]

`}

>


<div

className="
absolute

right-0

top-0

w-32

h-32

rounded-full

bg-white/20

blur-3xl

"

/>




<div

className="
relative

"

>


<div

className="
w-14

h-14

rounded-2xl

bg-white/20

backdrop-blur-xl

flex

items-center

justify-center

"

>

<Icon size={30}/>


</div>



<p

className="
mt-6

text-white/80

"

>

{title}

</p>



<h2

className="
text-3xl

font-black

mt-2

"

>

₹{value.toLocaleString()}

</h2>



</div>



</motion.div>



)

}








function EmptyState(){



return(


<div

className="
h-[350px]

flex

flex-col

items-center

justify-center

text-center

"

>


<div

className="
w-20

h-20

rounded-3xl

bg-gradient-to-br

from-indigo-500

to-purple-600

flex

items-center

justify-center

shadow-xl

"

>


<Wallet

size={38}

className="text-white"

/>


</div>



<h3

className="
mt-5

text-lg

font-bold

dark:text-white

"

>

No Transactions

</h3>



<p

className="
text-sm

text-slate-500

mt-2

max-w-xs

"

>

No money activity recorded for this day.

</p>



</div>



)

}
function TransactionCard({item}){


const isIncome =
item.type==="income";



const categoryIcons={

Food:Utensils,

Shopping:ShoppingBag,

Travel:Car,

Work:Briefcase,

Coffee:Coffee

};



const Icon =
categoryIcons[item.category]
||
Wallet;




return(


<motion.div


initial={{

opacity:0,

x:30

}}



animate={{

opacity:1,

x:0

}}



whileHover={{

scale:1.02,

x:6

}}



className="

flex

items-center

justify-between

p-4

rounded-3xl

bg-slate-100

dark:bg-slate-800

border

border-transparent

hover:border-indigo-400/40

transition-all

"

>



<div

className="
flex

items-center

gap-4

"

>



<div


className={`

w-12

h-12

rounded-2xl

flex

items-center

justify-center

${

isIncome

?

"bg-emerald-100 text-emerald-600"

:

"bg-rose-100 text-rose-600"

}

`}

>


<Icon size={22}/>


</div>






<div>


<h3

className="
font-bold

dark:text-white

"

>

{item.title}

</h3>



<span

className="
inline-block

mt-1

text-xs

px-3

py-1

rounded-full

bg-white

dark:bg-slate-700

text-slate-600

dark:text-slate-300

"

>


{item.category}


</span>



</div>



</div>







<div

className="
text-right

"

>


<h3

className={`

font-black

text-lg


${

isIncome

?

"text-emerald-500"

:

"text-rose-500"

}

`}

>


{

isIncome

?

"+"

:

"-"

}


₹{Number(item.amount).toLocaleString()}



</h3>




<p

className="
text-xs

text-slate-400

mt-1

"

>


{new Date(item.date).toLocaleDateString()}


</p>



</div>





</motion.div>



)

}









function DailySummary({

transactions

}){


const income =

transactions

.filter(item=>

item.type==="income"

)

.reduce(

(sum,item)=>

sum+Number(item.amount),

0

);





const expense =

transactions

.filter(item=>

item.type==="expense"

)

.reduce(

(sum,item)=>

sum+Number(item.amount),

0

);





const balance = income-expense;







const data=[


{

title:"Income",

value:income,

icon:ArrowUpCircle,

style:
"emerald"

},


{

title:"Expense",

value:expense,

icon:ArrowDownCircle,

style:
"rose"

},


{

title:"Balance",

value:balance,

icon:Wallet,

style:
"indigo"

}


];








return(


<motion.div


initial={{

opacity:0,

y:20

}}


animate={{

opacity:1,

y:0

}}


className="

mt-7

grid

grid-cols-1

sm:grid-cols-3

gap-4

"

>



{

data.map((item,index)=>{


const Icon=item.icon;



return(


<div


key={index}


className={`

rounded-3xl

p-5

border

bg-${item.style}-50

dark:bg-${item.style}-500/10

border-${item.style}-200

dark:border-${item.style}-500/20

`}


>


<div

className={`

flex

items-center

gap-2

text-${item.style}-600

font-semibold

`

}

>


<Icon size={18}/>


{item.title}


</div>




<h3

className="
text-xl

font-black

mt-3

dark:text-white

"

>


₹{item.value.toLocaleString()}



</h3>



</div>



)


})


}



</motion.div>



)

}







export default FinanceCalendar;