import { slideUp } from "@/anim/anim";
import CarouselWork from "@/components/ui/CarouselWork";
import MyParagraph from "@/components/ui/MyParagraph";
import MySubTitle from "@/components/ui/MySubTitle";
import MyTitle from "@/components/ui/MyTitle";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const SatuWork: React.FC = () => {
  const txtRef1 = useRef<HTMLParagraphElement>(null);
  const isView1 = useInView(txtRef1, { once: true });
  const desc =
    "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ";

    const txtRef2 = useRef<HTMLParagraphElement>(null);
  const isView2 = useInView(txtRef2, { once: true });
    
  const txtRef3 = useRef<HTMLParagraphElement>(null);
  const isView3 = useInView(txtRef3, { once: true });
  return (
    <div className="col-span-12">
      <CarouselWork work={1} qty={4} />

      <MyTitle className="mt-5" name="MySMK" />
      <MyParagraph ref={txtRef1} className="mt-4">
        {desc.split(" ").map((word, index) => (
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
        {"ReactJS,Framer Motion,TailwindCSS".split(",").map((word, index) => (
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
      <MyParagraph ref={txtRef2}>
        {"NodeJS,ExpressJS,MySQL".split(",").map((word, index) => (
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

export default SatuWork;
