import { motion } from "framer-motion";

import {
  CalendarDays,
  Sparkles,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

import FinanceCalendar from "../components/calendar/FinanceCalendar";



function Calendar(){


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
space-y-8
"

>



{/* HERO SECTION */}


<section

className="
relative

overflow-hidden

rounded-[36px]

p-10

bg-gradient-to-br

from-indigo-600

via-purple-600

to-fuchsia-600

text-white

shadow-[0_30px_80px_rgba(99,102,241,.35)]

"

>



{/* Glow Effects */}


<div

className="
absolute

-top-24

-right-24

w-96

h-96

rounded-full

bg-white/20

blur-[100px]

"

/>



<div

className="
absolute

-bottom-20

-left-20

w-72

h-72

rounded-full

bg-pink-400/20

blur-[90px]

"

/>




<div

className="
relative

flex

justify-between

items-center

gap-8

flex-wrap

"

>



<div>



<div

className="
flex

items-center

gap-4

"

>


<div

className="
w-16

h-16

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

<CalendarDays size={34}/>


</div>



<div>


<p

className="
text-indigo-100

font-medium

"

>

Expense Calendar

</p>



<h1

className="
text-4xl

md:text-5xl

font-black

tracking-tight

"

>

Financial Calendar

</h1>



</div>



</div>





<p

className="
mt-6

max-w-2xl

text-indigo-100

leading-7

text-base

"

>

Track every income and expense with an interactive
financial calendar. Visualize cash flow, analyze
spending habits and understand your money movement
day by day.

</p>





{/* FEATURES */}


<div

className="
flex

flex-wrap

gap-3

mt-7

"

>



<div

className="
flex

items-center

gap-2

px-4

py-2

rounded-full

bg-white/15

backdrop-blur-xl

border

border-white/20

text-sm

"

>

<TrendingUp size={16}/>

Smart Analytics

</div>





<div

className="
flex

items-center

gap-2

px-4

py-2

rounded-full

bg-white/15

backdrop-blur-xl

border

border-white/20

text-sm

"

>

<ShieldCheck size={16}/>

Secure Tracking

</div>




<div

className="
flex

items-center

gap-2

px-4

py-2

rounded-full

bg-white/15

backdrop-blur-xl

border

border-white/20

text-sm

"

>

<Sparkles size={16}/>

AI Insights

</div>




</div>



</div>






{/* FLOATING ICON */}


<motion.div


animate={{

y:[0,-15,0]

}}


transition={{

duration:4,

repeat:Infinity

}}


className="
hidden

lg:flex

w-32

h-32

rounded-[35px]

bg-white/20

backdrop-blur-xl

border

border-white/30

items-center

justify-center

shadow-2xl

"

>


<Sparkles size={55}/>


</motion.div>



</div>



</section>







{/* MAIN DASHBOARD */}



<FinanceCalendar />





</motion.div>


)

}



export default Calendar;