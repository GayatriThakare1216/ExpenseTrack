import { 
Moon, 
Sun, 
Menu,
Sparkles
} from "lucide-react";

import {motion} from "framer-motion";

import useThemeStore from "../../store/themeStore";
import useSidebarStore from "../../store/sidebarStore";



function Navbar(){


const {
theme,
toggleTheme

}=useThemeStore();



const {
toggleSidebar

}=useSidebarStore();




const hour = new Date().getHours();


let greeting="Good Morning";


if(hour>=12 && hour<18){

greeting="Good Afternoon";

}
else if(hour>=18){

greeting="Good Evening";

}




return(


<motion.header


initial={{
y:-80,
opacity:0
}}


animate={{
y:0,
opacity:1
}}


transition={{
duration:.5
}}



className="

sticky

top-0

z-50


h-20


flex

items-center

justify-between


px-5

md:px-8


bg-white/80

dark:bg-slate-950/80


backdrop-blur-xl


border-b

border-slate-200

dark:border-slate-800


shadow-sm

dark:shadow-black/20


"

>






{/* LEFT SECTION */}


<div className="flex items-center gap-4">



{/* MOBILE MENU */}


<motion.button


whileHover={{
scale:1.08
}}


whileTap={{
scale:.95
}}


onClick={toggleSidebar}



className="

md:hidden

p-3

rounded-2xl


bg-slate-100

dark:bg-slate-800


dark:text-white


shadow

"

>


<Menu size={22}/>


</motion.button>







<div>


<div className="flex items-center gap-2">


<h2

className="

text-xl

md:text-2xl

font-bold


bg-gradient-to-r

from-indigo-600

via-purple-600

to-pink-600


bg-clip-text

text-transparent

"

>

Dashboard

</h2>


<Sparkles

size={20}

className="

text-purple-500

animate-pulse

"

/>


</div>




<p

className="

text-xs

md:text-sm

text-slate-500

dark:text-slate-400

"

>

{greeting}, manage your finances 🚀

</p>



</div>



</div>









{/* RIGHT SECTION */}



<div className="flex items-center gap-4">






{/* DATE CHIP */}


<div

className="

hidden

sm:flex


items-center

px-4

py-2


rounded-2xl


bg-indigo-50

dark:bg-indigo-500/10


border

border-indigo-200

dark:border-indigo-500/20


text-sm

font-medium


text-indigo-600

dark:text-indigo-300


"

>


{new Date().toLocaleDateString(
"en-IN",
{
day:"numeric",
month:"short",
year:"numeric"
}
)}


</div>








{/* THEME BUTTON */}



<motion.button


whileHover={{
rotate:10,
scale:1.1
}}


whileTap={{
scale:.9
}}



onClick={toggleTheme}



className="


relative


p-3


rounded-2xl


bg-slate-100


dark:bg-slate-800


text-slate-700


dark:text-yellow-300


shadow-md


border


border-slate-200


dark:border-slate-700


overflow-hidden


"

>





<motion.div

key={theme}


initial={{
rotate:-180,
opacity:0,
scale:.5
}}


animate={{
rotate:0,
opacity:1,
scale:1
}}


transition={{
duration:.3
}}

>


{

theme==="light"

?

<Sun size={22}/>

:

<Moon size={22}/>

}



</motion.div>



</motion.button>




</div>





</motion.header>


)

}



export default Navbar;