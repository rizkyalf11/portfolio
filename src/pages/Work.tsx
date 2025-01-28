import CardProject from "@/components/ui/CardProject";
import MyContainer from "@/components/ui/MyContainer";
import MyTitle from "@/components/ui/MyTitle";
import { useMyStore } from "@/store/mystore";
import SatuWork from "./works/Satu";
import React from "react";
import DuaWork from "./works/Dua";

export type projectType = {
  name: string;
  desc: string;
  cover: string;
  page: React.ReactNode;
  cb: () => void;
};

const myWork: projectType[] = [
  {
    name: "MySMK",
    desc: "Mysmk is a platform used to help students in completing their assignments.",
    cover: "/p1/1.png",
    page: <SatuWork />,
    cb: () => {},
  },
  {
    name: "Library Management",
    desc: "Website used to manage libraries such as borrowing and returning books.",
    cover: "/p2/1.png",
    page: <DuaWork />,
    cb: () => {},
  },
];

export default function Work() {
  const { setPage, setWork } = useMyStore((state) => state);

  return (
    <MyContainer title="Work">
      <div className="grid h-full w-full grid-cols-12 gap-7">
        <MyTitle className="col-span-12" name="Work" />

        {myWork.map((item) => {
          return (
            <CardProject
              name={item.name}
              desc={item.desc}
              cover={item.cover}
              page={item.page}
              cb={() => {
                setPage('work-detail');
                setWork(item.page)
              }}
            />
          );
        })}
      </div>
    </MyContainer>
  );
}
