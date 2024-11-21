import React, { useEffect } from "react";

export default function MyContainer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  useEffect(() => {
    document.title = `RzkyAlfi - ${title}`;
  }, [title]);

  return (
    <div className="mycontainer pb-10 relative mx-auto min-h-full bg-bg px-4 pt-[60px] md:pt-[100px] dark:bg-darkBg">
      {children}
    </div>
  );
}
