import { motion } from "framer-motion";
import { Wallet, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import LoginForm from "../../components/auth/LoginForm";

function Login(){


return(

<div

className="
min-h-screen
relative
overflow-hidden

flex
items-center
justify-center

bg-slate-100
dark:bg-slate-950

px-4
"

>


<div

className="
absolute
top-0
left-0

w-80
h-80

bg-indigo-500/20

blur-3xl

rounded-full

"

/>



<div

className="
absolute
bottom-0
right-0

w-80
h-80

bg-purple-500/20

blur-3xl

rounded-full

"

/>





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
w-full
max-w-md
"

>


<div

className="

bg-white/90

dark:bg-slate-900/90

backdrop-blur-xl


border

dark:border-slate-800


rounded-3xl


p-8


shadow-2xl

"

>



<div className="
text-center
mb-8
">


<div

className="
mx-auto

w-16

h-16

rounded-2xl


bg-gradient-to-br

from-indigo-500

to-purple-600


flex

items-center

justify-center


text-white

"

>

<Wallet size={32}/>

</div>




<h1 className="
mt-5
text-3xl
font-bold
dark:text-white
">

ExpenseTrack

</h1>



<p className="
flex
items-center
justify-center
gap-2

text-sm
text-slate-500
mt-2
">


<Sparkles size={15}/>

Smart Finance Platform


</p>


</div>




<h2 className="
text-xl
font-bold
dark:text-white
">

Welcome Back 👋

</h2>


<p className="
text-slate-500
mt-2
mb-6
">

Login to manage your expenses.

</p>




<LoginForm/>





<div className="
text-center
mt-6
text-sm
text-slate-500
">


Don't have an account?


<Link

to="/register"

className="
text-indigo-600
font-semibold
ml-1
hover:underline
"

>

Register

</Link>


</div>



</div>


</motion.div>


</div>


)

}


export default Login;