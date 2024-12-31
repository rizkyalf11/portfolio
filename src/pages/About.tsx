import { motion, useInView } from "framer-motion";
import MyContainer from "@/components/ui/MyContainer";
import MyParagraph from "@/components/ui/MyParagraph";
import { slideUp } from "@/anim/anim";
import MyTitle from "@/components/ui/MyTitle";
import { useRef } from "react";
import MySubTitle from "@/components/ui/MySubTitle";
import FeSkill from "@/components/ui/FESkill";
import BeSkill from "@/components/ui/BESkill";

export default function About() {
  const text1 =
    "I am 17 years old. My interest in web development began in the 9th grade of junior high school, when I first started learning to code. Since then, I have continuously honed my skills in both front-end and back-end development.";
  const text1REF = useRef<HTMLParagraphElement>(null);
  const ViewT1 = useInView(text1REF, { once: true });

  const text2 =
    "I am skilled in creating functional and visually appealing websites, with a strong understanding of how to integrate both aspects to deliver efficient and user-friendly solutions. I believe that technology is a powerful tool for solving problems, and I am always eager to keep learning and growing in this field.";
  const text2REF = useRef<HTMLParagraphElement>(null);
  const ViewT2 = useInView(text2REF, { once: true });

  const text3 = "I am just a student :)";
  const text3REF = useRef<HTMLParagraphElement>(null);
  const ViewT3 = useInView(text3REF, { once: true });

  return (
    <MyContainer title="About">
      <div className="grid h-full w-full grid-cols-12 gap-7">
        <div className="col-span-12 h-[350px] overflow-hidden rounded-br-[50px] rounded-tl-[50px] bg-gray-400 outline md:col-span-5">
          <img
            src="/me2.webp"
            alt="ini saya"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="col-span-12 md:col-span-7">
          <MyTitle name="Get To Know Me" />
          <MyParagraph ref={text1REF} className="mt-4">
            {text1.split(" ").map((word, index) => (
              <span
                className="relative inline-flex overflow-hidden"
                key={index}
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  initial="initial"
                  animate={ViewT1 ? "open" : "closed"}
                  className="mr-[3px]"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </MyParagraph>
          <MyParagraph ref={text2REF} className="mt-3">
            {text2.split(" ").map((word, index) => (
              <span
                className="relative inline-flex overflow-hidden"
                key={index}
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  initial="initial"
                  animate={ViewT2 ? "open" : "closed"}
                  className="mr-[3px]"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </MyParagraph>
        </div>

        <div className="col-span-12">
          <MyTitle name="Skill" />
          <MySubTitle className="mt-1" name="Front End" />
          <FeSkill className="mt-1" />
          <MySubTitle className="mt-2" name="Back End" />
          <BeSkill className="mt-1" />
        </div>

        <div className="col-span-12">
          <MyTitle name="Experience" />
          <MyParagraph ref={text3REF} className="mt-1">
            {text3.split(" ").map((word, index) => (
              <span
                className="relative inline-flex overflow-hidden"
                key={index}
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  initial="initial"
                  animate={ViewT3 ? "open" : "closed"}
                  className="mr-[3px]"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </MyParagraph>
        </div>
      </div>
    </MyContainer>
  );
}
