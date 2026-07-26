import { motion } from "framer-motion";

function SplashScreen() {
  return (
    <div
      className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-white
      dark:bg-slate-950
      "
    >
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="
          w-20
          h-20
          rounded-full
          border-4
          border-indigo-600
          border-t-transparent
          mx-auto
          "
        />

        <h2
          className="
          mt-8
          text-3xl
          font-bold
          dark:text-white
          "
        >
          ExpenseTrack
        </h2>

        <p className="text-slate-500 mt-2">
          Loading your workspace...
        </p>
      </motion.div>
    </div>
  );
}

export default SplashScreen;