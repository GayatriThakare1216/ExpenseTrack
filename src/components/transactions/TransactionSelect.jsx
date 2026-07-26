function TransactionSelect({
  label,
  children,
  ...props
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>

      <select
className="
w-full
rounded-xl
border
border-slate-300
dark:border-slate-700
bg-white
dark:bg-slate-900
px-4
py-3
outline-none
focus:ring-2
focus:ring-indigo-500
focus:shadow-lg
hover:border-indigo-400
dark:text-white
transition-all
duration-300
cursor-pointer
        "
        {...props}
      >
        {children}
      </select>
    </div>
  );
}

export default TransactionSelect;

