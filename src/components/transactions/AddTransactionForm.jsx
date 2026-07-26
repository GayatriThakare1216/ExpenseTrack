import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import notify from "../../utils/notifications";
import { motion } from "framer-motion";

import {
  Receipt,
  IndianRupee,
  Calendar,
  FolderOpen,
  Type,
} from "lucide-react";

import { transactionSchema } from "../../validation/transactionSchema";

import TransactionInput from "./TransactionInput";
import TransactionSelect from "./TransactionSelect";

import useTransactionStore from "../../store/transactionStore";
import useModalStore from "../../store/modalStore";
import useBudgetStore from "../../store/budgetStore";

function AddTransactionForm() {

  const { addTransaction } = useTransactionStore();

  const { updateBudgetSpent } = useBudgetStore();

  const { closeAddTransaction } = useModalStore();

  const [transactionType, setTransactionType] =
    useState("expense");

  const incomeCategories = [
    "Salary",
    "Freelance",
    "Business",
    "Investment",
    "Bonus",
    "Gift",
    "Other",
  ];

  const expenseCategories = [
    "Food",
    "Shopping",
    "Travel",
    "Bills",
    "Entertainment",
    "Health",
    "Education",
    "Fuel",
    "Other",
  ];

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(transactionSchema),

    defaultValues: {
      type: "expense",
      date: new Date().toISOString().split("T")[0],
    },
  });

  const selectedType = watch("type");

  const categories =
    selectedType === "income"
      ? incomeCategories
      : expenseCategories;

  const onSubmit = (data) => {

    const newTransaction = {

      id: Date.now(),

      ...data,

      amount: Number(data.amount),

    };

    addTransaction(newTransaction);

    if (data.type === "expense") {

      updateBudgetSpent(
        data.category,
        Number(data.amount)
      );

    }

    notify.success("Transaction Added Successfully 🎉");

    reset({
      type: "expense",
      date: new Date().toISOString().split("T")[0],
    });

    setTransactionType("expense");

    closeAddTransaction();
  };

  const handleCancel = () => {

    reset();

    closeAddTransaction();

  };

  return (

    <motion.form

      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.4,
      }}

      onSubmit={handleSubmit(onSubmit)}

      className="space-y-6"

    >

      {/* Header */}

      <div>

        <h2 className="text-3xl font-bold dark:text-white">

          Add Transaction

        </h2>

        <p className="text-slate-500 mt-1">

          Track your income and expenses.

        </p>

      </div>

      {/* Income Expense Toggle */}

      <div>

        <label className="text-sm font-medium dark:text-slate-300">

          Transaction Type

        </label>

        <div className="grid grid-cols-2 gap-3 mt-3">

          <button

            type="button"

            onClick={() => {

              setTransactionType("income");

              setValue("type", "income");

              setValue("category", "");

            }}

            className={`
            rounded-2xl
            py-3
            font-semibold
            transition-all

            ${
              selectedType === "income"

                ? "bg-emerald-500 text-white shadow-lg"

                : "bg-slate-100 dark:bg-slate-800 dark:text-white"
            }
            `}
          >

            💰 Income

          </button>

          <button

            type="button"

            onClick={() => {

              setTransactionType("expense");

              setValue("type", "expense");

              setValue("category", "");

            }}

            className={`
            rounded-2xl
            py-3
            font-semibold
            transition-all

            ${
              selectedType === "expense"

                ? "bg-rose-500 text-white shadow-lg"

                : "bg-slate-100 dark:bg-slate-800 dark:text-white"
            }
            `}
          >

            💸 Expense

          </button>

        </div>

      </div>

      <input

        type="hidden"

        {...register("type")}

      />

      {/* Title */}

      <div>

        <div className="flex items-center gap-2 mb-2">

          <Type size={18} />

          <span className="font-medium dark:text-white">

            Title

          </span>

        </div>

        <TransactionInput

          placeholder="Shopping, Salary..."

          {...register("title")}

        />

        {errors.title && (

          <p className="text-red-500 text-sm mt-1">

            {errors.title.message}

          </p>

        )}

      </div>

      {/* Amount */}

      <div>

        <div className="flex items-center gap-2 mb-2">

          <IndianRupee size={18} />

          <span className="font-medium dark:text-white">

            Amount

          </span>

        </div>

        <TransactionInput

          type="number"

          placeholder="Enter Amount"

          {...register("amount", {
            valueAsNumber: true,
          })}

        />

        {errors.amount && (

          <p className="text-red-500 text-sm mt-1">

            {errors.amount.message}

          </p>

        )}

      </div>
            {/* Category */}

      <div>

        <div className="flex items-center gap-2 mb-2">

          <FolderOpen size={18} />

          <span className="font-medium dark:text-white">

            Category

          </span>

        </div>

        <TransactionSelect

          {...register("category")}

        >

          <option value="">

            Select Category

          </option>

          {categories.map((category) => (

            <option
              key={category}
              value={category}
            >
              {category}
            </option>

          ))}

        </TransactionSelect>

        {errors.category && (

          <p className="text-red-500 text-sm mt-1">

            {errors.category.message}

          </p>

        )}

      </div>





      {/* Date */}

      <div>

        <div className="flex items-center gap-2 mb-2">

          <Calendar size={18} />

          <span className="font-medium dark:text-white">

            Date

          </span>

        </div>

        <TransactionInput

          type="date"

          {...register("date")}

        />

        {errors.date && (

          <p className="text-red-500 text-sm mt-1">

            {errors.date.message}

          </p>

        )}

      </div>





      {/* Buttons */}

      <div

        className="

        flex

        justify-end

        gap-3

        pt-4

        "

      >

        <button

          type="button"

          onClick={handleCancel}

          className="

          px-6

          py-3

          rounded-2xl

          border

          border-slate-300

          dark:border-slate-700

          dark:text-white

          hover:bg-slate-100

          dark:hover:bg-slate-800

          transition-all

          "

        >

          Cancel

        </button>





        <button

          type="submit"

          className="

          px-6

          py-3

          rounded-2xl

          bg-gradient-to-r

          from-indigo-600

          via-violet-600

          to-purple-600

          hover:scale-105

          hover:shadow-xl

          text-white

          font-semibold

          transition-all

          duration-300

          "

        >

          + Add Transaction

        </button>

      </div>

    </motion.form>

  );

}

export default AddTransactionForm;
