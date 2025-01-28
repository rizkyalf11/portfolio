import { Button } from "@/components/ui/button";
import CardProject from "@/components/ui/CardProject";
import MyContainer from "@/components/ui/MyContainer";
import MyParagraph from "@/components/ui/MyParagraph";
import MySubTitle from "@/components/ui/MySubTitle";
import MyTitle from "@/components/ui/MyTitle";

export type projectType = {
  name: string;
  desc: string;
};

const myWork: projectType[] = [
  {
    name: "MySMK",
    desc: "Mysmk is a platform used to help students in completing their assignments.",
  },
  {
    name: "Library Management",
    desc: "Website used to manage libraries such as borrowing and returning books.",
  },
  {
    name: "Library Management",
    desc: "Website used to manage libraries such as borrowing and returning books.",
  },
  {
    name: "Library Management",
    desc: "Website used to manage libraries such as borrowing and returning books.",
  },
  {
    name: "Library Management",
    desc: "Website used to manage libraries such as borrowing and returning books.",
  },
];

export default function Work() {
  return (
    <MyContainer title="Work">
      <div className="grid h-full w-full grid-cols-12 gap-7">
        <MyTitle className="col-span-12" name="Work" />

        {myWork.map((item) => {
          return <CardProject name={item.name} desc={item.desc} />;
        })}
      </div>
    </MyContainer>
  );
}
