import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle
} from "lucide-react";


import useTransactionStore 
from "../store/transactionStore";


import {
calculateSummary
}
from "../utils/transactionCalculations";


import ReportSummaryCards
from "../components/reports/ReportSummaryCards";


import {
getCategoryExpenses
}
from "../utils/reportCalculations";


import CategoryExpenseChart
from "../components/reports/CategoryExpenseChart";


import {
getMonthlyExpenses
}
from "../utils/monthlyCalculations";


import MonthlyExpenseChart
from "../components/reports/MonthlyExpenseChart";


import ExportButton 
from "../components/reports/ExportButton";

import FinancialHealth
from "../components/reports/FinancialHealth";


import SmartInsight
from "../components/reports/SmartInsight";


import SpendingPattern
from "../components/reports/SpendingPattern";



function Reports(){



const {
transactions
}=useTransactionStore();




const {
income,
expense,
balance

}=calculateSummary(
transactions
);





const categoryData =
getCategoryExpenses(
transactions
);





const monthlyData =
getMonthlyExpenses(
transactions
);






return(


<motion.div


initial={{
opacity:0
}}


animate={{
opacity:1
}}


transition={{
duration:0.5
}}



className="space-y-8"

>





{/* HERO */}



<motion.div


initial={{
opacity:0,
y:-30
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:0.6
}}



className="

relative

overflow-hidden


rounded-3xl


bg-gradient-to-br

from-indigo-600

via-purple-600

to-pink-600


p-8


text-white


shadow-2xl

"



>





{/* Glow Circles */}



<div

className="

absolute

-right-16

-top-16


h-48

w-48


rounded-full


bg-white/20


blur-3xl

"

/>





<div

className="

absolute

-left-20

-bottom-10


h-40

w-40


rounded-full


bg-pink-300/20


blur-3xl

"

/>








<div className="relative">


<div

className="

flex

items-center

gap-4

"


>



<div

className="

h-14

w-14


rounded-2xl


bg-white/20


backdrop-blur-md


flex

items-center

justify-center

"

>

<BarChart3 size={30}/>

</div>






<div>


<p className="text-indigo-100">

Financial Analytics

</p>



<h1

className="

text-4xl

font-bold

"

>

Reports & Insights

</h1>


</div>




</div>







<p

className="

mt-5

max-w-2xl

text-indigo-100

leading-relaxed

"

>

Analyze your spending patterns, track your
financial growth and understand where your money
is going.

</p>






</div>




</motion.div>









{/* EXPORT BUTTON */}



<motion.div


initial={{
opacity:0,
x:30
}}


animate={{
opacity:1,
x:0
}}



className="flex justify-end"

>


<ExportButton

transactions={transactions}

/>


</motion.div>









{/* SUMMARY */}



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
delay:0.2
}}

>


<ReportSummaryCards

income={income}

expense={expense}

balance={balance}

/>


</motion.div>









{/* CHARTS */}



<div

className="

grid

grid-cols-1

xl:grid-cols-2


gap-8

"

>






<motion.div


whileHover={{
y:-5
}}


initial={{
opacity:0,
x:-40
}}


animate={{
opacity:1,
x:0
}}


transition={{
delay:0.3
}}


className="

rounded-3xl

"

>

<CategoryExpenseChart

data={categoryData}

/>


</motion.div>








<motion.div


whileHover={{
y:-5
}}


initial={{
opacity:0,
x:40
}}


animate={{
opacity:1,
x:0
}}


transition={{
delay:0.4
}}


>


<MonthlyExpenseChart

data={monthlyData}

/>


</motion.div>




</div>









{/* FINANCIAL HEALTH */}





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
delay:0.5
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


p-7


shadow-lg

"


>



<div

className="

absolute

right-0

top-0


h-40

w-40


bg-green-400/10


blur-3xl

rounded-full

"

/>








<div className="relative">



<div

className="

flex

items-center

gap-3

"

>


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

<TrendingUp/>

</div>






<div>


<h2

className="

text-2xl

font-bold

dark:text-white

"

>

Financial Overview

</h2>

{/* Advanced Insights */}

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">


<FinancialHealth

income={income}

expense={expense}

balance={balance}

/>


<SpendingPattern

data={categoryData}

/>


<SmartInsight

income={income}

expense={expense}

transactions={transactions}

/>


</div>

<p

className="

text-sm

text-slate-500

"

>

Your current financial health

</p>


</div>



</div>










<div

className="

grid

grid-cols-1

md:grid-cols-3


gap-5


mt-7

"

>





<OverviewBox

icon={ArrowUpCircle}

title="Income"

value={income}

color="green"

/>





<OverviewBox

icon={ArrowDownCircle}

title="Expense"

value={expense}

color="red"

/>





<OverviewBox

icon={Wallet}

title="Balance"

value={balance}

color="indigo"

/>





</div>



</div>





</motion.div>






</motion.div>


)

}







function OverviewBox({

icon:Icon,

title,

value,

color

}){


return(


<motion.div


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

className={

color==="green"

?

"text-green-500"

:

color==="red"

?

"text-red-500"

:

"text-indigo-500"

}

/>



<p

className="

text-sm

text-slate-500

mt-3

"

>

{title}

</p>



<h3

className="

text-2xl

font-bold

dark:text-white

"

>

₹{value.toLocaleString()}

</h3>



</motion.div>


)

}





export default Reports;