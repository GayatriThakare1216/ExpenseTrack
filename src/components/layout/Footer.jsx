import { motion } from "framer-motion";

import {
FaGithub,
FaLinkedin,
FaTwitter
} from "react-icons/fa";

import {
Heart,
Sparkles
} from "lucide-react";



const links = {

Product:[
"Dashboard",
"Transactions",
"Budget",
"Reports"
],


Support:[
"Help Center",
"Contact Us",
"Privacy Policy",
"Terms"
]

};





function Footer(){


return(


<motion.footer


initial={{
opacity:0,
y:40
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:.6
}}


className="

relative

overflow-hidden

mt-12


bg-white/80

dark:bg-slate-950/80


backdrop-blur-xl


border-t

border-slate-200

dark:border-slate-800


"

>


{/* Animated Glow */}


<div

className="

absolute

-top-20

right-20

h-72

w-72


rounded-full


bg-indigo-500/20


blur-3xl


"

/>


<div

className="

absolute

bottom-0

left-10

h-52

w-52


rounded-full


bg-purple-500/20


blur-3xl


"

/>





<div

className="

relative

max-w-7xl

mx-auto


px-6

py-12

"


>



<div

className="

grid

grid-cols-1

sm:grid-cols-2

lg:grid-cols-4

gap-10

"


>



{/* BRAND */}



<motion.div

whileHover={{
y:-5
}}

>


<div

className="

flex

items-center

gap-2

"


>


<div

className="

h-12

w-12


rounded-2xl


bg-gradient-to-br

from-indigo-500

to-purple-600


flex

items-center

justify-center


text-white


shadow-lg

"


>

<Sparkles size={22}/>

</div>




<h2

className="

text-2xl

font-extrabold


bg-gradient-to-r

from-indigo-500

via-purple-500

to-pink-500


bg-clip-text

text-transparent

"

>

ExpenseTrack

</h2>


</div>





<p

className="

mt-5

text-sm

leading-7


text-slate-600

dark:text-slate-400

"

>

A smart finance management platform
to track expenses, manage budgets
and achieve financial goals.

</p>



</motion.div>







{/* LINKS */}



{

Object.entries(links)
.map(([title,items])=>(


<div key={title}>


<h3

className="

font-bold

text-lg

dark:text-white

mb-5

"

>

{title}

</h3>



<ul

className="

space-y-3

"

>


{

items.map(item=>(


<li

key={item}

className="

text-sm

text-slate-500

dark:text-slate-400


cursor-pointer


hover:text-indigo-600

dark:hover:text-indigo-400


transition


hover:translate-x-1


"

>

{item}

</li>


))

}


</ul>


</div>


))

}








{/* SOCIAL */}


<div>


<h3

className="

font-bold

text-lg

dark:text-white

mb-5

"

>

Connect

</h3>





<div

className="

flex

gap-4

"

>



{

[
{
icon:<FaGithub/>,
link:"Github"
},

{
icon:<FaLinkedin/>,
link:"Linkedin"
},

{
icon:<FaTwitter/>,
link:"Twitter"
}

]

.map((item,index)=>(



<motion.a


key={index}


whileHover={{
y:-6,
scale:1.1
}}


className="

h-12

w-12


rounded-2xl


flex

items-center

justify-center



bg-slate-100

dark:bg-slate-800


text-slate-700

dark:text-slate-200


hover:bg-gradient-to-br


hover:from-indigo-500


hover:to-purple-600


hover:text-white


shadow-md


transition


cursor-pointer


"


>


{item.icon}


</motion.a>


))


}



</div>




<p

className="

mt-6

text-sm

text-slate-500

dark:text-slate-400

"

>

Building better money habits 🚀

</p>



</div>





</div>








{/* Bottom */}



<div


className="


mt-12


pt-6


border-t


border-slate-200

dark:border-slate-800


flex


flex-col


md:flex-row


justify-between


items-center


gap-4



"


>



<p

className="

text-sm

text-slate-500

dark:text-slate-400

"

>

© 2026 ExpenseTrack. All rights reserved.

</p>





<p

className="

flex

items-center

gap-2


text-sm


text-slate-500

dark:text-slate-400

"

>

Made with


<Heart

size={16}

className="

text-red-500

fill-red-500

"

/>


using React + Tailwind


</p>



</div>





</div>



</motion.footer>


)

}



export default Footer;