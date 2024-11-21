import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "./button";
import { motion } from "framer-motion";
import NavButton from "./NavButton";
import NavButtonAnim from "./NavButtonAnim";
import { menu, perspective } from "@/anim/anim";
import { useMyStore } from "@/store/mystore";

type Props = {
  handleClick: (pageName: string) => void;
  page: string;
};

const menuList: string[] = ["home", "about", "work"];

export default function Navbar({ handleClick, page }: Props) {
  const { isDarkMode, setIsDarkMode } = useMyStore((state) => state);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode();
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <>
      <div className="absolute bottom-10 right-1/2 z-50 hidden translate-x-1/2 items-center gap-10 md:flex">
        <h1
          onClick={() => handleClick("home")}
          className="cursor-pointer select-none text-xl font-black tracking-tight text-text dark:text-darkText"
        >
          RizkyAlfi.
        </h1>

        {menuList.map((_, i) => (
          <NavButton
            key={i}
            name={_}
            page={page}
            handleClick={() => handleClick(_)}
          />
        ))}

        <button
          onClick={toggleTheme}
          className="mb-[4px] text-xl text-text dark:text-darkText"
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed bottom-0 left-0 right-0 top-0 z-40 md:hidden"
        ></div>
      )}
      <div className="fixed right-8 top-8 z-50 md:hidden">
        <motion.div
          variants={menu}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          className="relative h-[400px] w-[200px] rounded-base border-2 border-border bg-bg dark:bg-darkBg"
        >
          <div className="flex h-full w-full flex-col items-start gap-4 px-4 pt-16">
            {menuList.map((_, i) => {
              return (
                <NavButtonAnim
                  key={_}
                  custom={i}
                  handleClick={() => {
                    handleClick(_);
                    setIsOpen(false);
                  }}
                  isOpen={isOpen}
                  page={page}
                  title={_}
                  variant={perspective}
                />
              );
            })}
            <motion.button
              custom={3}
              variants={perspective}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              onClick={toggleTheme}
              className="text-2xl text-text dark:text-darkText"
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </motion.button>
          </div>
        </motion.div>

        <Button
          variant="reverse"
          className="absolute right-0 top-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </Button>
      </div>
    </>
  );
}
