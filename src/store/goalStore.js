import {create} from "zustand";





const getStoredGoals = ()=>{


try{


const saved =
localStorage.getItem("goals");


return saved
?
JSON.parse(saved)
:
[];


}

catch(error){


console.log(
"Goal storage error",
error
);


return [];


}


};








const saveGoals=(goals)=>{


localStorage.setItem(
"goals",
JSON.stringify(goals)
);


};










const useGoalStore = create((set)=>({



goals:getStoredGoals(),







// CREATE GOAL


addGoal:(goal)=>{


set((state)=>{





const exists =
state.goals.some(

(item)=>

item.title.toLowerCase()

===

goal.title.toLowerCase()

);



if(exists){


return state;


}






const newGoal={


...goal,


id:Date.now(),


saved:0,


createdAt:
new Date().toISOString(),



};





const updated=[

...state.goals,

newGoal

];





saveGoals(updated);






return{

goals:updated

};



});


},










// ADD MONEY


addMoneyToGoal:(id,amount)=>{


set((state)=>{



const updated =

state.goals.map((goal)=>{





if(goal.id===id){



const newSaved =

Number(goal.saved || 0)

+

Number(amount);





return{


...goal,


saved:newSaved,


completed:

newSaved >= Number(goal.amount)


};



}





return goal;



});






saveGoals(updated);





return{

goals:updated

};



});

},










// UPDATE GOAL


updateGoal:(id,data)=>{


set((state)=>{



const updated =

state.goals.map((goal)=>{


if(goal.id===id){


return{

...goal,

...data

};


}



return goal;



});






saveGoals(updated);





return{

goals:updated

};



});


},










// DELETE GOAL


deleteGoal:(id)=>{


set((state)=>{


const updated =

state.goals.filter(

(goal)=>

goal.id!==id

);



saveGoals(updated);




return{

goals:updated

};


});


},










// RESET ALL GOALS


clearGoals:()=>{


localStorage.removeItem(
"goals"
);


set({

goals:[]

});


}






}));





export default useGoalStore;