import React, { useRef } from "react";
import CarouselWork from "./CarouselWork";
import MyTitle from "./MyTitle";
import MyParagraph from "./MyParagraph";
import { motion, useInView } from "framer-motion";
import { slideUp } from "@/anim/anim";
import MySubTitle from "./MySubTitle";

type Props = {
  work: {
    webname: string;
    desc: string;
    fe_stack: string[];
    be_stack: string[];
    img_id: number;
    img_qty: number;
  };
};

const WorkPage: React.FC<Props> = ({ work }) => {
  const txtRef1 = useRef<HTMLParagraphElement>(null);
  const isView1 = useInView(txtRef1, { once: true });
  const txtRef2 = useRef<HTMLParagraphElement>(null);
  const isView2 = useInView(txtRef2, { once: true });

  const txtRef3 = useRef<HTMLParagraphElement>(null);
  const isView3 = useInView(txtRef3, { once: true });
  return (
    <div className="col-span-12">
      <CarouselWork work={work.img_id} qty={work.img_qty} />

      <MyTitle className="mt-5" name={work.webname} />
      <MyParagraph ref={txtRef1} className="mt-4">
        {work.desc.split(" ").map((word, index) => (
          <span className="relative inline-flex overflow-hidden" key={index}>
            <motion.span
              variants={slideUp}
              custom={index}
              initial="initial"
              animate={isView1 ? "open" : "closed"}
              className="mr-[3px]"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </MyParagraph>

      <MyTitle name="Tech Stack" className="mt-5" />
      <MySubTitle name="Front End" className="mt-2" />
      <MyParagraph ref={txtRef2}>
        {work.fe_stack.map((word, index) => (
          <>
            <span className="relative inline-flex overflow-hidden" key={index}>
              <motion.span
                variants={slideUp}
                custom={index}
                initial="initial"
                animate={isView2 ? "open" : "closed"}
                className="mr-[3px]"
              >
                - {word}
              </motion.span>
            </span>
            <br />
          </>
        ))}
      </MyParagraph>
      <MySubTitle name="Back End" className="mt-2" />
      <MyParagraph ref={txtRef3}>
        {work.be_stack.map((word, index) => (
          <>
            <span className="relative inline-flex overflow-hidden" key={index}>
              <motion.span
                variants={slideUp}
                custom={index}
                initial="initial"
                animate={isView3 ? "open" : "closed"}
                className="mr-[3px]"
              >
                - {word}
              </motion.span>
            </span>
            <br />
          </>
        ))}
      </MyParagraph>
    </div>
  );
};

export default WorkPage;
