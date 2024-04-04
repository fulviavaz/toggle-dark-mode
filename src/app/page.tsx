

export default function Home() {

  if (typeof window !== "undefined") {
    window.onload = () => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      const checkbox = document.querySelector('input[type="checkbox"]');

      checkbox?.addEventListener("change", function (event: Event) {
        if (event.target instanceof HTMLInputElement) {
          if (event.target.checked) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
          }
        }
      });
    };
  }
  
  return (
    <main className="w-screen h-screen flex items-center justify-center bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
      <label className="cursor-pointer">
        <input type="checkbox" className="sr-only peer"/>
        <div className="peer after:left-0 peer-checked:after:left-12 w-24 h-12 bg-zinc-300 dark:bg-zinc-700 
        rounded-full px-1 flex items-center
        after:rounded-full after:content=[''] after:flex after:relative after:w-10 after:h-10 after:bg-zinc-100
        dark:after:bg-zinc-900"></div>
      </label>
  </main>
  );
}
