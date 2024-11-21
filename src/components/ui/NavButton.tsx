import clsx from "clsx";

type Props = {
  handleClick: () => void;
  name: string;
  page: string;
};

export default function NavButton({ handleClick, name, page }: Props) {
  return (
    <div className="group flex flex-col overflow-hidden">
      <button
        onClick={handleClick}
        className="text-lg font-medium capitalize text-text dark:text-darkText"
      >
        {name}
      </button>

      <div
        className={clsx(
          `h-[2px] w-full rounded-sm bg-black transition-all duration-150 group-hover:translate-x-0 dark:bg-white`,
          {
            "translate-x-[-110%]": page != name,
          },
        )}
      ></div>
    </div>
  );
}
