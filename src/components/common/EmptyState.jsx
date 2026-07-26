import { FileText } from "lucide-react";

function EmptyState({
  title,
  description,
  buttonText,
  onClick
}) {

  return (

    <div
      className="
      flex
      flex-col
      items-center
      justify-center

      text-center

      py-16

      bg-white
      dark:bg-slate-900

      rounded-3xl

      border
      border-dashed
      border-slate-300
      dark:border-slate-700
      "
    >

      <div
        className="
        w-16
        h-16

        rounded-full

        bg-indigo-100
        dark:bg-indigo-900/30

        flex
        items-center
        justify-center

        mb-5
        "
      >

        <FileText
          className="text-indigo-600"
          size={30}
        />

      </div>

      <h2
        className="
        text-2xl
        font-bold
        dark:text-white
        "
      >
        {title}
      </h2>

      <p
        className="
        text-slate-500
        mt-3
        max-w-sm
        "
      >
        {description}
      </p>

      {
        buttonText && (

          <button
            onClick={onClick}
            className="
            mt-6

            bg-indigo-600
            hover:bg-indigo-700

            text-white

            px-6
            py-3

            rounded-xl

            transition
            "
          >
            {buttonText}
          </button>

        )
      }

    </div>

  );

}

export default EmptyState;