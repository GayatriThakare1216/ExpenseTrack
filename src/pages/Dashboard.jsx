import { motion } from "framer-motion";

import {
Wallet,
ArrowDownCircle,
ArrowUpCircle,
PiggyBank,
Sparkles,
} from "lucide-react";


import StatsCard from "../components/dashboard/StatsCard";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import ExpensePieChart from "../components/dashboard/ExpensePieChart";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import BudgetOverview from "../components/dashboard/BudgetOverview";
import QuickActions from "../components/dashboard/QuickActions";
import FinancialHealth from "../components/dashboard/FinancialHealth";
import InsightsCard from "../components/dashboard/InsightsCard";


import TransactionModal from "../components/transactions/TransactionModal";
import AddTransactionForm from "../components/transactions/AddTransactionForm";

import BudgetModal from "../components/budget/BudgetModal";
import AddBudgetForm from "../components/budget/AddBudgetForm";


import useTransactionStore from "../store/transactionStore";
import useBudgetStore from "../store/budgetStore";
import useAuthStore from "../store/authStore";
import useModalStore from "../store/modalStore";

import DashboardHero from "../components/dashboard/DashboardHero";

import {
calculateSummary
}
from "../utils/transactionCalculations";


import {
getExpenseByCategory
}
from "../utils/chartCalculations";





function Dashboard(){



const {
transactions
}=useTransactionStore();



const {
budgets
}=useBudgetStore();



const {
user
}=useAuthStore();



const {
openAddTransaction,
openBudgetModal
}=useModalStore();





const {
income,
expense,
balance

}=calculateSummary(
transactions
);



const expenseData =
getExpenseByCategory(
transactions
);





const hour =
new Date().getHours();



let greeting="Good Evening 🌙";


if(hour<12)
greeting="Good Morning ☀️";

else if(hour<18)
greeting="Good Afternoon 🌤️";






return(


<motion.div


initial={{
opacity:0
}}


animate={{
opacity:1
}}


transition={{
duration:.5
}}


className="
space-y-10
"


>






{/* HERO */}



<DashboardHero
  user={user}
  balance={balance}
  income={income}
  onAddTransaction={openAddTransaction}
  onBudget={openBudgetModal}
/>









{/* STATS */}



<section>


<div className="
flex
items-center
justify-between
mb-5
">


<h2 className="
text-2xl
font-bold
dark:text-white
">

Financial Summary

</h2>


</div>




<div className="

grid

grid-cols-1

sm:grid-cols-2

xl:grid-cols-4

gap-6

">


<StatsCard
title="Total Balance"
amount={balance}
icon={Wallet}
color="from-indigo-500 to-purple-600"
growth="+15%"
/>



<StatsCard
title="Income"
amount={income}
icon={ArrowUpCircle}
color="from-emerald-500 to-green-600"
growth="+20%"
/>



<StatsCard
title="Expense"
amount={expense}
icon={ArrowDownCircle}
color="from-red-500 to-rose-600"
growth="-8%"
/>



<StatsCard
title="Savings"
amount={balance}
icon={PiggyBank}
color="from-orange-500 to-yellow-500"
growth="+18%"
/>



</div>

</section>









{/* QUICK ACTION */}



<section>

<QuickActions/>

</section>









{/* ANALYTICS */}



<section>


<h2 className="
text-2xl
font-bold
dark:text-white
mb-5
">

Analytics Overview

</h2>



<div className="
grid
grid-cols-1
xl:grid-cols-2
gap-6
">


<ExpenseChart/>


<ExpensePieChart
data={expenseData}
/>


</div>



</section>








{/* HEALTH */}



<FinancialHealth

income={income}

expense={expense}

balance={balance}

/>









{/* TRANSACTIONS */}



<RecentTransactions

transactions={transactions}

/>









{/* BUDGET */}



<BudgetOverview

budgets={budgets}

/>









{/* INSIGHTS */}



<InsightsCard

transactions={transactions}

income={income}

expense={expense}

balance={balance}

/>








<TransactionModal>

<AddTransactionForm/>

</TransactionModal>





<BudgetModal>

<AddBudgetForm/>

</BudgetModal>







</motion.div>


)

}



export default Dashboard;