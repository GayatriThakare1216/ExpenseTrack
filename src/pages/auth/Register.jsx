import RegisterForm from "../../components/auth/RegisterForm";


function Register(){

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


<div

className="
w-full

max-w-md

bg-white

dark:bg-slate-900

rounded-3xl

shadow-xl

p-8
"

>


<h1

className="
text-3xl

font-bold

text-center

dark:text-white

mb-2
"

>

Create Account

</h1>


<p

className="
text-center

text-slate-500

mb-8
"

>

Join ExpenseTrack today 🚀

</p>



<RegisterForm/>


</div>


</div>


)

}


export default Register;