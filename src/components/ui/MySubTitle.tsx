import { slideUp } from "@/anim/anim";
import { motion, useInView } from "framer-motion";
import React, { HTMLAttributes, useRef } from "react";

type Props = {
  name: string;
};

const MySubTitle: React.FC<Props & HTMLAttributes<HTMLHeadingElement>> = ({
  name,
  ...props
}) => {
  const ref = useRef(null);
  const isInViewNameRef = useInView(ref, { once: true });

  return (
    <h2
      {...props}
      ref={ref}
      className={`text-lg font-semibold dark:text-darkText xs:text-xl ${props.className || ""}`}
    >
      {name.split(" ").map((word, index) => (
        <span className="relative inline-flex overflow-hidden">
          <motion.span
            variants={slideUp}
            custom={index}
            initial={{ y: "100%" }}
            animate={isInViewNameRef ? "open" : "closed"}
            key={index}
            className="mr-1"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
};

export default MySubTitle;
