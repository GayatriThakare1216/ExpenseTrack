import { 
NavLink, 
useNavigate 
} from "react-router-dom";

import toast from "react-hot-toast";

import {motion} from "framer-motion";

import {
LayoutDashboard,
Receipt,
Wallet,
BarChart3,
Target,
CalendarDays,
Settings,
LogOut,
X,
Sparkles
} from "lucide-react";


import useSidebarStore from "../../store/sidebarStore";
import useAuthStore from "../../store/authStore";





const menuItems=[

{
name:"Dashboard",
icon:LayoutDashboard,
path:"/"
},

{
name:"Transactions",
icon:Receipt,
path:"/transactions"
},

{
name:"Budget",
icon:Wallet,
path:"/budget"
},

{
name:"Reports",
icon:BarChart3,
path:"/reports"
},

{
name:"Goals",
icon:Target,
path:"/goals"
},

{
name:"Calendar",
icon:CalendarDays,
path:"/calendar"
},

{
name:"Settings",
icon:Settings,
path:"/settings"
}

];







function Sidebar(){


const navigate=useNavigate();


const {
user,
logout
}=useAuthStore();



const {
isOpen,
closeSidebar
}=useSidebarStore();




return(

<>



{
isOpen &&

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

onClick={closeSidebar}

className="
fixed
inset-0
bg-black/50
backdrop-blur-sm
z-40
md:hidden
"

/>

}





<motion.aside


initial={{
x:-100,
opacity:0
}}


animate={{
x:0,
opacity:1
}}


transition={{
duration:.4
}}



className={`


fixed

top-0

left-0


h-screen


w-72


z-50



flex

flex-col



p-6



bg-white/90


dark:bg-slate-950/90



backdrop-blur-xl



border-r


border-slate-200

dark:border-slate-800



shadow-2xl



transition-transform

duration-300



${

isOpen

?

"translate-x-0"

:

"-translate-x-full"

}


md:translate-x-0


`}



>







{/* CLOSE MOBILE */}



<button

onClick={closeSidebar}

className="

absolute

right-5

top-5

md:hidden

p-2

rounded-xl

bg-slate-100

dark:bg-slate-800

dark:text-white

"

>

<X size={20}/>

</button>








{/* LOGO */}



<div

className="

flex

items-center

gap-3

mb-10

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

<Sparkles size={25}/>

</div>



<div>


<h1

className="

text-2xl

font-bold


bg-gradient-to-r

from-indigo-600

via-purple-600

to-pink-600


bg-clip-text

text-transparent

"

>

ExpenseTrack

</h1>



<p

className="

text-xs

text-slate-500

"

>

Smart Finance Manager

</p>



</div>



</div>









{/* MENU */}



<nav

className="

flex-1

space-y-2

"

>


{

menuItems.map((item)=>{


const Icon=item.icon;


return(


<NavLink

key={item.name}

to={item.path}

onClick={closeSidebar}



className={({isActive})=>`

group

relative


flex

items-center

gap-4


px-4

py-3.5


rounded-2xl


font-medium


transition-all

duration-300



${


isActive

?


"bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30"


:


"text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"


}


`}



>


{({isActive})=>(

<>


<motion.div

whileHover={{
scale:1.15
}}

>

<Icon

size={21}

/>

</motion.div>



<span>

{item.name}

</span>




{

isActive &&

<motion.div

layoutId="active"

className="

absolute

right-3

h-2

w-2

rounded-full

bg-white

"

/>

}



</>


)}


</NavLink>


)


})


}


</nav>









{/* USER CARD */}



<div


className="

mt-5

p-4


rounded-3xl


bg-slate-100

dark:bg-slate-900


border

border-slate-200

dark:border-slate-800

"

>


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


bg-gradient-to-br

from-indigo-500

to-purple-600


flex

items-center

justify-center


text-white


font-bold

text-lg

"

>

{

user?.name?.charAt(0)

}


</div>





<div

className="

overflow-hidden

"

>

<h3

className="

font-semibold

dark:text-white

truncate

"

>

{user?.name || "User"}

</h3>


<p

className="

text-xs

text-slate-500

truncate

"

>

{user?.email}

</p>


</div>



</div>








<button


onClick={()=>{


logout();


toast.success(
"Logged out successfully"
);


navigate("/login");


}}



className="


mt-5


w-full


flex

items-center

justify-center

gap-3


py-3


rounded-2xl



bg-red-50


dark:bg-red-500/10



text-red-500



font-semibold



hover:bg-red-100


dark:hover:bg-red-500/20



transition


"


>


<LogOut size={20}/>


Logout


</button>



</div>






</motion.aside>





</>


)

}



export default Sidebar;