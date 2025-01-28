import CardProject from "@/components/ui/CardProject";
import MyContainer from "@/components/ui/MyContainer";
import MyTitle from "@/components/ui/MyTitle";

export type projectType = {
  name: string;
  desc: string;
  cover: string;
};

const myWork: projectType[] = [
  {
    name: "MySMK",
    desc: "Mysmk is a platform used to help students in completing their assignments.",
    cover: "/p1/1.png"
  },
  {
    name: "Library Management",
    desc: "Website used to manage libraries such as borrowing and returning books.",
    cover: "/p2/1.png"
  },
];

export default function Work() {
  return (
    <MyContainer title="Work">
      <div className="grid h-full w-full grid-cols-12 gap-7">
        <MyTitle className="col-span-12" name="Work" />

        {myWork.map((item) => {
          return <CardProject name={item.name} desc={item.desc} cover={item.cover} />;
        })}
      </div>
    </MyContainer>
  );
}
