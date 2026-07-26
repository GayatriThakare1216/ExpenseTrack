import { forwardRef } from "react";

function AuthInputComponent(
  {
    label,
    type = "text",
    placeholder,
    error,
    icon: Icon,
    eye: EyeIcon,
    toggle,
    className = "",
    ...props
  },
  ref
) {
  return (
    <div className="space-y-2">

      {label && (
        <label
          className="
          text-sm
          font-medium
          text-slate-600
          dark:text-slate-300
          "
        >
          {label}
        </label>
      )}

      <div className="relative">

        {Icon && (
          <Icon
            size={18}
            className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-slate-400
            "
          />
        )}

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`
            w-full
            p-3
            rounded-xl

            border
            border-slate-200
            dark:border-slate-700

            bg-white
            dark:bg-slate-800

            dark:text-white

            outline-none
            transition

            focus:ring-2
            focus:ring-indigo-500
            focus:border-transparent

            ${Icon ? "pl-10" : ""}
            ${EyeIcon ? "pr-10" : ""}

            ${className}
          `}
          {...props}
        />

        {EyeIcon && (
          <button
            type="button"
            onClick={toggle}
            className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2

            text-slate-400
            hover:text-indigo-500

            transition
            "
          >
            <EyeIcon size={18} />
          </button>
        )}

      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}

    </div>
  );
}

const AuthInput = forwardRef(AuthInputComponent);

export default AuthInput;