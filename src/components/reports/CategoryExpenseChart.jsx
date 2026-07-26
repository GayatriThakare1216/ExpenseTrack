import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend
} from "recharts";

import { motion } from "framer-motion";


function CategoryExpenseChart({data}){


const COLORS = [

"#6366f1",
"#ec4899",
"#14b8a6",
"#f59e0b",
"#8b5cf6",
"#ef4444"

];


const total = data.reduce(
(sum,item)=>sum+item.value,
0
);



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

Expense By Category

</h2>


<p className="
text-sm
text-slate-500
mb-5
">

Your spending distribution

</p>






<div className="
h-[330px]
relative
">


<ResponsiveContainer>


<PieChart>


<Pie


data={data}


dataKey="value"


nameKey="name"



innerRadius={75}


outerRadius={115}



paddingAngle={6}



animationBegin={300}


animationDuration={1500}


>


{

data.map(
(item,index)=>(


<Cell

key={index}

fill={
COLORS[index % COLORS.length]
}


/>


)

)

}


</Pie>






<Tooltip


contentStyle={{

background:"#0f172a",

border:"none",

borderRadius:"16px",

color:"white"

}}



formatter={(value)=>`₹${value.toLocaleString()}`}


/>



<Legend/>




</PieChart>


</ResponsiveContainer>








{/* Center */}


<div

className="

absolute

inset-0

flex

flex-col

items-center

justify-center


pointer-events-none

"

>


<p

className="
text-sm
text-slate-500
"

>

Total

</p>



<h3

className="
text-3xl
font-bold
dark:text-white
"

>

₹{total.toLocaleString()}

</h3>



</div>




</div>




</motion.div>


)

}


export default CategoryExpenseChart;