import { motion } from "framer-motion";
import {
Plus,
Wallet,
Target,
BarChart3,
Settings,
ArrowUpRight
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function QuickActions(){

const navigate=useNavigate();

const actions=[

{
title:"Transaction",
icon:Plus,
color:"from-indigo-500 to-violet-600",
action:()=>navigate("/transactions")
},

{
title:"Budget",
icon:Wallet,
color:"from-emerald-500 to-green-600",
action:()=>navigate("/budget")
},

{
title:"Goals",
icon:Target,
color:"from-pink-500 to-rose-600",
action:()=>navigate("/goals")
},

{
title:"Reports",
icon:BarChart3,
color:"from-orange-500 to-red-500",
action:()=>navigate("/reports")
},

{
title:"Settings",
icon:Settings,
color:"from-slate-500 to-slate-700",
action:()=>navigate("/settings")
}

];

return(

<section>

<div className="flex items-center justify-between mb-6">

<div>

<h2 className="text-2xl font-bold dark:text-white">
Quick Actions
</h2>

<p className="text-slate-500 mt-1">
One click shortcuts
</p>

</div>

</div>

<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">

{

actions.map((item,index)=>{

const Icon=item.icon;

return(

<motion.button

key={item.title}

type="button"

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:index*.08
}}

whileHover={{
y:-6,
scale:1.03
}}

whileTap={{
scale:.96
}}

onClick={item.action}

className="

group

relative

overflow-hidden

rounded-2xl

border

border-slate-200

dark:border-slate-800

bg-white/70

dark:bg-slate-900/70

backdrop-blur-xl

p-5

transition-all

hover:border-indigo-500/30

hover:shadow-xl

"

>

<div

className={`

absolute

-right-8

-top-6

h-24

w-24

rounded-full

bg-gradient-to-br

${item.color}

opacity-10

blur-3xl

group-hover:opacity-20

transition

`}

/>

<div className="relative flex items-center justify-between">

<div>

<div

className={`

h-12

w-12

rounded-2xl

bg-gradient-to-br

${item.color}

flex

items-center

justify-center

text-white

shadow-lg

group-hover:rotate-6

transition

`}

>

<Icon size={22}/>

</div>

<h3 className="mt-4 font-semibold dark:text-white">
{item.title}
</h3>

</div>

<ArrowUpRight

size={18}

className="

text-slate-400

group-hover:text-indigo-500

group-hover:translate-x-1

group-hover:-translate-y-1

transition

"

/>

</div>

</motion.button>

)

})

}

</div>

</section>

)

}

export default QuickActions;