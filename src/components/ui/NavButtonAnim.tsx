import clsx from "clsx";
import { motion, Variants } from "framer-motion";

type Props = {
  custom: number;
  variant: Variants;
  isOpen: boolean;
  title: string;
  page: string;
  handleClick: () => void;
};

export default function NavButtonAnim({
  custom,
  isOpen,
  page,
  title,
  variant,
  handleClick,
}: Props) {
  return (
    <motion.div
      custom={custom}
      variants={variant}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="group flex flex-col overflow-hidden"
    >
      <button
        onClick={handleClick}
        className="text-lg font-medium capitalize text-text dark:text-darkText"
      >
        {title}
      </button>

      <div
        className={clsx(
          `h-[2px] w-full rounded-sm bg-black transition-all duration-150 group-hover:translate-x-0 dark:bg-white`,
          {
            "translate-x-[-110%]": page != title,
          },
        )}
      ></div>
    </motion.div>
  );
}
