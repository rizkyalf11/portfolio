import React, { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
  enableDark?: boolean;
};

const MyParagraph = forwardRef<HTMLParagraphElement, Props>(({ children, enableDark = true, ...props }, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      className={`text-sm font-medium leading-snug tracking-tight xs:text-base ${enableDark ? "dark:text-darkText" : ""} ${props.className || ""}`}
    >
      {children}
    </p>
  );
});

export default MyParagraph;
