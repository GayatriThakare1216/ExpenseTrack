import { motion } from "framer-motion";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";


import RegisterForm from "../../components/auth/RegisterForm";



function Register(){

const result = registerUser(user);

if (!result.success) {
  toast.error(result.message);
  return;
}

toast.success(result.message);
navigate("/login");

return(

<div

className="

min-h-screen

flex

items-center

justify-center


bg-slate-100

dark:bg-slate-950


px-4

"

>


<motion.div


initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

className="
w-full
max-w-md
"

>


<div

className="

bg-white

dark:bg-slate-900


rounded-3xl


p-8


shadow-2xl


border

dark:border-slate-800

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


bg-indigo-600


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

Create Account

</h1>


<p className="
text-slate-500
mt-2
">

Start your finance journey 🚀

</p>



</div>






<RegisterForm/>






<div className="
text-center
mt-6
text-sm
text-slate-500
">


Already have account?


<Link

to="/login"

className="
text-indigo-600

font-semibold

ml-1

hover:underline

"

>

Login

</Link>


</div>



</div>


</motion.div>


</div>


)

}


export default Register;