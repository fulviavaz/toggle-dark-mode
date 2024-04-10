"use client"
import { useState } from "react";

export default function Home() { 
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);  
  }

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <main
        className=" w-screen h-screen flex items-center justify-center bg-zinc-100
        dark:bg-zinc-900 transition-colors duration-300"
      >
        <label className="cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onClick={toggleDarkMode}
          />
          <div
            className="peer after:transition-all after:duration-500 after:left-0 peer-checked:after:left-12 w-24 h-12
        bg-zinc-300 dark:bg-zinc-700 rounded-full px-1 flex items-center after:bg-[url('/sun.svg')] 
        peer-checked:after:bg-[url('/moon.svg')] after:bg-[length:24px_24px] after:bg-no-repeat after:bg-center
        after:rounded-full after:content=[''] after:flex after:relative after:w-10 after:h-10
        after:bg-zinc-100 dark:after:bg-zinc-900 shadow-inner after:animate-moon after:peer-checked:animate-sun after:rotate-0 after:peer-checked:rotate-180"
          ></div>
        </label>
      </main>
    </div>
  );
}
