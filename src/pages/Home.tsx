import MyContainer from "@/components/ui/MyContainer";
import IG from "@/assets/icons/ig.svg";
import YT from "@/assets/icons/yt.svg";
import LK from "@/assets/icons/lk.svg";
import L_IG from "@/assets/icons/L_IG.svg";
import L_YT from "@/assets/icons/L_YT.svg";
import L_LK from "@/assets/icons/L_LK.svg";
import { Button } from "@/components/ui/button";
import { useMyStore } from "@/store/mystore";
import { motion, useInView } from "framer-motion";
import { opacity, slideUp } from "@/anim/anim";
import { useRef } from "react";
import MyParagraph from "@/components/ui/MyParagraph";

const sosmed: { path: string; l: string; ref: string }[] = [
  { path: IG, l: L_IG, ref: "https://www.instagram.com/yourapoc4lypse" },
  { path: YT, l: L_YT, ref: "https://www.youtube.com/@Rizky-Alfiansyah" },
  {
    path: LK,
    l: L_LK,
    ref: "https://www.linkedin.com/in/rizky-alfiansyah-99973b317/",
  },
];

export default function Home() {
  const { isDarkMode } = useMyStore((state) => state);

  const name = "Rizky Alfiansyah.";
  const nameRef = useRef(null);
  const isInViewNameRef = useInView(nameRef);

  const title = "Fullstack Developer";
  const paragraph =
    "Proficient in front-end and back-end development, with a deep understanding of modern web technologies. I focus on creating user-centered designs that are not only visually appealing but also highly performant and scalable.";

  return (
    <MyContainer title="Home">
      <div className="grid h-full w-full grid-cols-12 gap-7">
        <div className="col-span-12 h-[350px] overflow-hidden rounded-bl-[50px] rounded-tr-[50px] bg-gray-400 outline md:col-span-5">
          <img
            src="/me1.jpg"
            alt="ini saya"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="col-span-12 md:col-span-7">
          <h2
            ref={nameRef}
            className="text-3xl font-bold dark:text-darkText xs:text-4xl"
          >
            {name.split(" ").map((word, index) => (
              <span className="relative inline-flex overflow-hidden">
                <motion.span
                  variants={slideUp}
                  custom={index}
                  initial={{ y: "100%" }}
                  animate={isInViewNameRef ? "open" : "closed"}
                  key={index}
                  className="mr-3"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h2>
          <p className="text-base font-medium dark:text-darkText xs:text-lg">
            {title.split(" ").map((word, index) => (
              <span
                className="relative inline-flex overflow-hidden"
                key={index}
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  initial="initial"
                  animate={isInViewNameRef ? "open" : "closed"}
                  className="mr-1"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>

          <MyParagraph className="mt-6">
            {paragraph.split(" ").map((word, index) => (
              <span
                className="relative inline-flex overflow-hidden"
                key={index}
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  initial="initial"
                  animate={isInViewNameRef ? "open" : "closed"}
                  className="mr-[3px]"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </MyParagraph>

          <div className="mt-5 flex items-center gap-4 xs:mt-7">
            {sosmed.map((item, i) => (
              <motion.a
                variants={opacity}
                initial="initial"
                animate="open"
                target="_blank"
                href={item.ref}
                custom={i}
                key={i}
              >
                <img
                  className="size-6 fill-red-700"
                  src={isDarkMode ? item.l : item.path}
                  alt="SOCIAL MEDIA"
                />
              </motion.a>
            ))}
          </div>

          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/cv_rizkyalfiansyah.pdf";
              link.download = "cv_rizkyalfiansyah.pdf";
              link.click();
            }}
            className="mt-5 xs:mt-7"
          >
            Download CV
          </Button>
        </div>
      </div>
    </MyContainer>
  );
}
