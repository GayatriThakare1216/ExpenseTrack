import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid
}
from "recharts";


import { motion } from "framer-motion";



function MonthlyExpenseChart({data}){


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
duration:0.6
}}



whileHover={{
y:-5
}}



className="


bg-white

dark:bg-slate-900



border

border-slate-200

dark:border-slate-800



rounded-3xl


p-6


shadow-sm

hover:shadow-xl


transition

"


>



<h2

className="

text-xl

font-bold

dark:text-white

mb-1

"

>

Monthly Expense Trend

</h2>


<p className="
text-sm
text-slate-500
mb-6
">

Track your monthly spending

</p>





<div className="
h-[320px]
">


<ResponsiveContainer>


<BarChart

data={data}

>


<CartesianGrid

strokeDasharray="3 3"

strokeOpacity={0.15}

/>




<XAxis


dataKey="month"


stroke="#94a3b8"

/>



<YAxis


stroke="#94a3b8"

/>






<Tooltip



contentStyle={{

background:"#0f172a",

border:"none",

borderRadius:"16px",

color:"white"

}}



formatter={(value)=>`₹${value.toLocaleString()}`}


/>







<Bar


dataKey="amount"


radius={[12,12,0,0]}


fill="url(#colorExpense)"


animationDuration={1500}


/>






<defs>

<linearGradient

id="colorExpense"

x1="0"

y1="0"

x2="0"

y2="1"

>


<stop

offset="0%"

stopColor="#8b5cf6"

/>


<stop

offset="100%"

stopColor="#ec4899"

/>


</linearGradient>

</defs>





</BarChart>


</ResponsiveContainer>


</div>





</motion.div>


)

}


export default MonthlyExpenseChart;