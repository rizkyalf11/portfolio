import React, { useRef } from "react";
import MySubTitle from "./MySubTitle";
import MyParagraph from "./MyParagraph";
import { Button } from "./button";
import { projectType } from "@/pages/Work";
import { motion, useInView } from "framer-motion";
import { slideUp } from "@/anim/anim";

const CardProject: React.FC<
  projectType & React.HTMLAttributes<HTMLDivElement>
> = ({ name, desc, ...props }) => {

  const txtRef = useRef<HTMLParagraphElement>(null);
  const isView = useInView(txtRef, { once: true });

  return (
    <div
      {...props}
      className="col-span-12 grid grid-cols-12 rounded-base border-2 border-border bg-[#DAF5F0] shadow-light dark:border-darkBorder dark:shadow-dark md:col-span-6"
    >
      <div className="col-span-12 flex gap-1 border-b-2 border-border px-2 py-2 dark:border-darkBorder">
        <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FF6060] dark:border-darkBorder"></div>
        <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FFF159] dark:border-darkBorder"></div>
        <div className="aspect-square h-[15px] rounded-full border border-border bg-[#85FF43] dark:border-darkBorder"></div>
      </div>
      <div className="col-span-12 h-[200px] border-b-2 border-border bg-gray-400 dark:border-darkBorder">
        <img
          src="/me2.webp"
          alt="ini saya"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="col-span-12 p-4">
        <MySubTitle name={name} className="dark:text-black" />
        <MyParagraph ref={txtRef} className="mt-2 line-clamp-2 dark:text-black">
          {desc.split(" ").map((word, index) => (
            <span className="relative inline-flex overflow-hidden" key={index}>
              <motion.span
                variants={slideUp}
                custom={index}
                initial="initial"
                animate={isView ? "open" : "closed"}
                className="mr-[3px]"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </MyParagraph>
        <Button className="mt-4">See Detail</Button>
      </div>
    </div>
  );
};

export default CardProject;
