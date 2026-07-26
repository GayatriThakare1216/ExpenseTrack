import useAuthStore from "../store/authStore";


function Profile(){


const {user}=useAuthStore();



return(

<div>


<h1 className="
text-3xl
font-bold
dark:text-white
">

Profile 👤

</h1>



<div

className="

mt-8

bg-white

dark:bg-slate-900

rounded-2xl

border

dark:border-slate-800

p-6

"


>


<div className="

w-16

h-16

rounded-full

bg-indigo-600

text-white

flex

items-center

justify-center

text-2xl

font-bold

"

>

{

user?.name?.charAt(0)

}


</div>



<h2 className="
mt-5
text-xl
font-semibold
dark:text-white
">

{

user?.name || "User"

}

</h2>



<p className="
text-slate-500
mt-2
">

{

user?.email

}

</p>



</div>


</div>

)

}


export default Profile;