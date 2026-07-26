import {useState} from "react";

import {
Eye,
EyeOff,
Mail,
Lock,
Loader2
} from "lucide-react";


import {
useForm
}
from "react-hook-form";


import {
zodResolver
}
from "@hookform/resolvers/zod";


import {
useNavigate
}
from "react-router-dom";


import notify from "../../utils/notifications";


import {
loginSchema
}
from "../../validation/authSchema";


import useAuthStore from "../../store/authStore";



function LoginForm(){


const navigate = useNavigate();


const [showPassword,setShowPassword]=useState(false);


const [loading,setLoading]=useState(false);


const [remember,setRemember]=useState(false);



const {

register,

handleSubmit,

formState:{errors}

}=useForm({

resolver:zodResolver(loginSchema)

});





const {
login
}=useAuthStore();





const onSubmit=async(data)=>{


setLoading(true);



setTimeout(()=>{


const success =
login(
data.email,
data.password
);



if(success){


if(remember){

localStorage.setItem(
"remember",
"true"
);

}



notify.success(
"Welcome back 🚀"
);



navigate("/dashboard");


}

else{


notify.error(
"Invalid credentials"
);


}



setLoading(false);


},1000)



};






return(


<form

onSubmit={
handleSubmit(onSubmit)
}

className="
space-y-5
"


>





{/* Demo */}

<div

className="

bg-indigo-50

dark:bg-indigo-900/30

p-4

rounded-2xl

text-sm

"

>


<p className="
font-semibold
dark:text-white
">

Demo Account

</p>


<p className="
text-slate-500
mt-1
">

Email: demo@test.com

</p>


<p className="
text-slate-500
">

Password: 123456

</p>


</div>







{/* Email */}


<div>


<div className="
relative
">


<Mail

size={18}

className="
absolute
left-3
top-3.5
text-slate-400
"

/>



<input


type="email"


placeholder="Email address"


{...register("email")}



className="

w-full

pl-10

p-3

rounded-xl


border


dark:border-slate-700


bg-white


dark:bg-slate-800


dark:text-white


outline-none


focus:ring-2

focus:ring-indigo-500


"




/>


</div>




{
errors.email &&

<p className="
text-red-500
text-sm
mt-1
">

{errors.email.message}

</p>

}



</div>









{/* Password */}



<div>



<div className="
relative
">


<Lock

size={18}

className="
absolute
left-3
top-3.5
text-slate-400
"

/>




<input


type={
showPassword
?
"text"
:
"password"
}


placeholder="Password"



{...register("password")}



className="

w-full

pl-10

pr-10

p-3


rounded-xl


border


dark:border-slate-700


bg-white


dark:bg-slate-800


dark:text-white


outline-none


focus:ring-2

focus:ring-indigo-500


"



/>





<button

type="button"

onClick={()=>setShowPassword(!showPassword)}


className="

absolute

right-3

top-3

text-slate-400

"


>


{

showPassword

?

<EyeOff size={18}/>

:

<Eye size={18}/>

}


</button>



</div>





{
errors.password &&

<p className="
text-red-500
text-sm
mt-1
">

{errors.password.message}

</p>

}



</div>









{/* Remember */}



<div className="
flex
justify-between
items-center
text-sm
">


<label className="
flex
gap-2
items-center
text-slate-500
">


<input

type="checkbox"

checked={remember}

onChange={(e)=>
setRemember(e.target.checked)
}


/>


Remember me


</label>



<button

type="button"

className="
text-indigo-600
font-medium
"

>

Forgot password?


</button>


</div>









<button


disabled={loading}



className="


w-full


bg-gradient-to-r

from-indigo-600

to-purple-600


hover:opacity-90


text-white


py-3


rounded-xl


font-semibold


flex

items-center

justify-center

gap-2


transition


disabled:opacity-60


"

>


{

loading

?

<>

<Loader2 className="animate-spin"/>

Logging in...

</>

:

"Login"


}



</button>






</form>


)

}


export default LoginForm;