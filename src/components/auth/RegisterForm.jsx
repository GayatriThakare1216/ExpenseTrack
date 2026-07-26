import {useState} from "react";


import {
Eye,
EyeOff,
User,
Mail,
Lock,
Loader2
}
from "lucide-react";


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


import AuthInput from "./AuthInput";

import PasswordStrength from "./PasswordStrength";


import {
registerSchema
}
from "../../validation/authSchema";


import useAuthStore from "../../store/authStore";




function RegisterForm(){



const navigate=useNavigate();


const [password,setPassword]=useState("");


const [showPass,setShowPass]=useState(false);


const [showConfirm,setShowConfirm]=useState(false);


const [loading,setLoading]=useState(false);





const {

register,

handleSubmit,

reset,

formState:{errors}

}=useForm({

resolver:zodResolver(registerSchema)

});




const {
registerUser
}=useAuthStore();





const submit=(data)=>{


setLoading(true);



setTimeout(()=>{


const user={

id:Date.now(),

name:data.name,

email:data.email,

password:data.password

};



registerUser(user);



notify.success(
"Account created 🎉"
);



reset();



navigate("/login");



setLoading(false);


},1000)



};






return(


<form

onSubmit={
handleSubmit(submit)
}

className="
space-y-5
"

>





{/* Name */}

<AuthInput

icon={User}

placeholder="Full name"

{...register("name")}

/>



{
errors.name &&
<p className="
text-red-500
text-sm
">

{errors.name.message}

</p>
}







{/* Email */}


<AuthInput

icon={Mail}

type="email"

placeholder="Email"

{...register("email")}

/>


{
errors.email &&
<p className="
text-red-500
text-sm
">

{errors.email.message}

</p>
}







{/* Password */}



<AuthInput


icon={Lock}


type={
showPass
?
"text"
:
"password"
}


placeholder="Password"


toggle={()=>setShowPass(!showPass)}


eye={
showPass
?
EyeOff
:
Eye
}


{...register(
"password",
{
onChange:(e)=>
setPassword(e.target.value)
}
)}

/>



<PasswordStrength

password={password}

/>





{/* Confirm */}



<AuthInput


icon={Lock}


type={
showConfirm
?
"text"
:
"password"
}


placeholder="Confirm password"


toggle={()=>setShowConfirm(!showConfirm)}


eye={
showConfirm
?
EyeOff
:
Eye
}



{...register("confirmPassword")}

/>






<button

disabled={loading}


className="

w-full

py-3

rounded-xl


bg-gradient-to-r

from-indigo-600

to-purple-600


text-white


font-semibold


flex

justify-center

items-center

gap-2


"


>


{

loading

?

<>

<Loader2 className="animate-spin"/>

Creating...

</>

:

"Create Account"


}


</button>




</form>


)

}



export default RegisterForm;