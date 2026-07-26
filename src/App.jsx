import { useState, useEffect } from "react";

import { Toaster } from "react-hot-toast";

import Layout from "./components/layout/Layout";

import AppRoutes from "./routes/AppRoutes";

import SplashScreen from "./components/common/SplashScreen";


function App(){


const [loading,setLoading] = useState(true);



useEffect(()=>{


const timer = setTimeout(()=>{


setLoading(false);


},1800);



return ()=>clearTimeout(timer);


},[]);





if(loading){

return <SplashScreen/>

}




return(

<>

<Toaster

position="top-right"

reverseOrder={false}

toastOptions={{

duration:3000,

style:{

background:"#0f172a",

color:"#fff",

borderRadius:"16px",

padding:"14px",

fontSize:"14px"

},


success:{

iconTheme:{

primary:"#22c55e",

secondary:"#fff"

}

},


error:{

iconTheme:{

primary:"#ef4444",

secondary:"#fff"

}

}

}}

/>


<Layout>

<AppRoutes/>

</Layout>


</>

)

}


export default App;