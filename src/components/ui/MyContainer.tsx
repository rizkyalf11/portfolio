import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const MyContainer: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  title,
  ...props
}) => {
  useEffect(() => {
    document.title = `RzkyAlfi - ${title}`;
  }, [title]);

  return (
    <div
      {...props}
      className="mycontainer relative mx-auto min-h-full bg-bg px-4 pb-10 md:pb-20 pt-[60px] dark:bg-darkBg md:pt-[100px]"
    >
      {children}
    </div>
  );
};

export default MyContainer;
