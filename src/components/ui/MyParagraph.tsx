import React, { forwardRef } from "react";

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};

const MyParagraph = forwardRef<HTMLParagraphElement, Props>(({ children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      className={`text-sm font-medium leading-snug tracking-tight dark:text-darkText xs:text-base ${props.className || ""}`}
    >
      {children}
    </p>
  );
});

export default MyParagraph;
