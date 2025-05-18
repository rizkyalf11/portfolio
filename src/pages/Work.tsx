import CardProject from "@/components/ui/CardProject";
import MyContainer from "@/components/ui/MyContainer";
import MyTitle from "@/components/ui/MyTitle";
import { useMyStore } from "@/store/mystore";
import allworks from "@/works/allworks.json";

export type projectType = {
  name: string;
  desc: string;
  cover: string;
  cb: () => void;
};

export default function Work() {
  const { setPage, setWork } = useMyStore((state) => state);

  return (
    <MyContainer title="Work">
      <div className="grid h-full w-full grid-cols-12 gap-7">
        <MyTitle className="col-span-12" name="Work" />

        {allworks.data.map((item) => {
          return (
            <CardProject
              name={item.webname}
              desc={item.desc}
              cover={item.img_id.toString()}
              cb={() => {
                setPage("work-detail");
                setWork(item.webname);
              }}
            />
          );
        })}
      </div>
    </MyContainer>
  );
}
