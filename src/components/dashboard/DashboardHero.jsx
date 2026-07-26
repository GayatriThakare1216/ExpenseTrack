import { motion } from "framer-motion";

import {
Sparkles,
CalendarDays,
CircleDollarSign,
Target,
TrendingUp,
ArrowUpRight,
WalletCards
} from "lucide-react";


function DashboardHero({

user,

balance,

income,

onAddTransaction,

onBudget

}){


const today =
new Date().toLocaleDateString(
"en-IN",
{
weekday:"short",
day:"numeric",
month:"short",
year:"numeric"
}
);



return(


<motion.section


initial={{
opacity:0,
y:-40
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:.7,
ease:"easeOut"
}}



className="

relative

overflow-hidden

rounded-[40px]

bg-gradient-to-br

from-indigo-600

via-purple-600

to-fuchsia-600


p-6

md:p-10


text-white


shadow-[0_30px_100px_rgba(124,58,237,0.35)]

"


>


{/* Animated Background */}

<motion.div

animate={{

scale:[1,1.2,1],

rotate:[0,90,0]

}}

transition={{

duration:10,

repeat:Infinity

}}


className="

absolute

-right-24

-top-24

h-80

w-80

rounded-full

bg-white/20

blur-3xl

"

/>




<motion.div

animate={{

y:[0,40,0]

}}

transition={{

duration:8,

repeat:Infinity

}}


className="

absolute

-left-20

-bottom-20

h-64

w-64

rounded-full

bg-pink-300/20

blur-3xl

"

/>





<div className="

relative

z-10

grid

lg:grid-cols-2

gap-10

items-center

">





{/* LEFT SIDE */}



<div>



<div className="

flex

items-center

gap-4

">


<div

className="

h-16

w-16

rounded-3xl

bg-white/20

backdrop-blur-xl

border

border-white/30


flex

items-center

justify-center


shadow-xl

"

>

<Sparkles size={32}/>

</div>



<div>

<p className="

text-indigo-100

text-sm

font-medium

">

Financial Overview

</p>


<h1 className="

text-3xl

md:text-5xl

font-black

mt-1

">

Hello

{user?.name && ` ${user.name}`}

👋

</h1>


</div>



</div>






<p className="

mt-6

text-indigo-100

max-w-lg

leading-relaxed

">

Manage your money smarter.
Track expenses, grow savings and achieve your financial goals.

</p>








{/* Buttons */}


<div className="

flex

flex-wrap

gap-4

mt-8

">


<motion.button


whileHover={{
scale:1.05
}}


whileTap={{
scale:.95
}}


onClick={onAddTransaction}


className="

flex

items-center

gap-2


bg-white

text-indigo-600


px-6

py-3


rounded-2xl


font-bold


shadow-xl

"

>

<WalletCards size={20}/>

Add Transaction

</motion.button>





<motion.button


whileHover={{
scale:1.05
}}


onClick={onBudget}


className="

flex

items-center

gap-2


bg-white/20

backdrop-blur-xl


border

border-white/30


px-6

py-3


rounded-2xl


font-semibold


"

>

<Target size={20}/>

Create Budget

</motion.button>



</div>





{/* Mini Stats */}



<div className="

grid

grid-cols-2

gap-4

mt-10

max-w-md

">


<div className="

rounded-3xl

bg-white/10

border

border-white/20

backdrop-blur-xl

p-4

">


<p className="

text-xs

text-indigo-100

">

Income

</p>


<h3 className="

text-2xl

font-bold

mt-2

">

₹{income.toLocaleString("en-IN")}

</h3>


<div className="

flex

items-center

gap-1

text-green-200

text-xs

mt-2

">

<TrendingUp size={14}/>

Growing

</div>


</div>





<div className="

rounded-3xl

bg-white/10

border

border-white/20

backdrop-blur-xl

p-4

">


<p className="

text-xs

text-indigo-100

">

Balance

</p>


<h3 className="

text-2xl

font-bold

mt-2

">

₹{balance.toLocaleString("en-IN")}

</h3>


<div className="

flex

items-center

gap-1

text-indigo-100

text-xs

mt-2

">

<ArrowUpRight size={14}/>

Healthy

</div>


</div>



</div>



</div>









{/* RIGHT CARD */}



<div className="

flex

justify-center

lg:justify-end

">



<motion.div


animate={{

y:[0,-12,0]

}}


transition={{

duration:5,

repeat:Infinity

}}



whileHover={{

scale:1.03

}}



className="

w-full

max-w-sm


rounded-[35px]


bg-white/15


backdrop-blur-2xl


border

border-white/20


p-6


shadow-2xl

"

>




{/* Profile */}



<div className="

flex

items-center

gap-4

">


<div

className="

h-20

w-20

rounded-full


bg-gradient-to-br

from-white

to-indigo-100


p-1

"

>

<div className="

h-full

w-full

rounded-full

bg-indigo-600

flex

items-center

justify-center


text-3xl

font-black

"

>

{user?.name?.charAt(0)}

</div>


</div>




<div>

<h3 className="

text-xl

font-bold

">

{user?.name || "User"}

</h3>


<p className="

text-indigo-100

text-sm

">

Premium Member ✨

</p>

</div>



</div>








{/* Date */}



<div className="

mt-7

rounded-3xl

bg-white/10

p-4

flex

gap-3

items-center

">


<div className="

h-12

w-12

rounded-2xl

bg-white/20

flex

items-center

justify-center

">

<CalendarDays/>

</div>


<div>


<p className="

text-xs

text-indigo-100

">

Today

</p>


<p className="font-semibold">

{today}

</p>


</div>



</div>







{/* Balance */}



<div className="

mt-5

rounded-3xl

bg-gradient-to-br

from-white/20

to-white/5

p-5

border

border-white/20

">


<div className="

flex

justify-between

items-center

">


<div>


<p className="

text-sm

text-indigo-100

">

Current Balance

</p>


<h2 className="

text-4xl

font-black

mt-2

">

₹{balance.toLocaleString("en-IN")}

</h2>


</div>



<CircleDollarSign

size={45}

/>


</div>


</div>





</motion.div>


</div>




</div>



</motion.section>


)

}


export default DashboardHero;