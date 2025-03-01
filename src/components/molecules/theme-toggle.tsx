import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // Importa los iconos
import { Button } from "@/components/ui/button";

export const ThemeToggle = ({ iconClassName }: { iconClassName?: string }) => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  // Lógica para obtener el tema predeterminado del sistema
  useEffect(() => {
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedMode = localStorage.getItem("theme");

    // Si ya hay un tema guardado, usarlo, de lo contrario usar el tema del sistema
    if (savedMode) {
      setDarkMode(savedMode === "dark");
    } else {
      setDarkMode(systemTheme);
    }
  }, []);

  // Cambiar tema y guardar en localStorage
  useEffect(() => {
    if (darkMode !== null) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode]);

  // Mostrar el botón con el icono correspondiente
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setDarkMode((prev) => !prev)}
      style={{ width: "20px", height: "20px" }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
