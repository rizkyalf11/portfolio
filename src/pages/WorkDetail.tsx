import MyContainer from "@/components/ui/MyContainer";
import MyTitle from "@/components/ui/MyTitle";
import { useMyStore } from "@/store/mystore";
import { FiArrowLeft } from "react-icons/fi";

export default function WorkDetail() {
  const { setPage, work } = useMyStore((state) => state);
  
  return (
    <MyContainer title="Work Detail">
      <div className="grid h-full overflow-hidden w-full grid-cols-12 gap-7">
        <div className="col-span-12 flex gap-2 items-center">
          <FiArrowLeft
            onClick={() => setPage("work")}
            size={25}
            className="col-span-12 dark:text-white"
          />

          <MyTitle className="col-span-12" name="Work Detail" />
        </div>

        {work}
      </div>
    </MyContainer>
  );
}
