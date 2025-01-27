import MyContainer from "@/components/ui/MyContainer";

export default function Work() {
  return (
    <MyContainer title="Work">
      <div className="grid h-full w-full grid-cols-12 gap-7">
        <div className="col-span-6 grid grid-cols-12 rounded-base border-2 border-border bg-[#DAF5F0] shadow-light dark:border-darkBorder dark:shadow-dark">
          <div className="col-span-12 flex gap-1 border-b-2 border-border px-2 py-2 dark:border-darkBorder">
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FF6060] dark:border-darkBorder"></div>
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FFF159] dark:border-darkBorder"></div>
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#85FF43] dark:border-darkBorder"></div>
          </div>
          <div className="col-span-12 h-[200px]"></div>
        </div>
        <div className="col-span-6 grid grid-cols-12 rounded-base border-2 border-border bg-[#DAF5F0] shadow-light dark:border-darkBorder dark:shadow-dark">
          <div className="col-span-12 flex gap-1 border-b-2 border-border px-2 py-2 dark:border-darkBorder">
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FF6060] dark:border-darkBorder"></div>
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FFF159] dark:border-darkBorder"></div>
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#85FF43] dark:border-darkBorder"></div>
          </div>
          <div className="col-span-12 h-[200px]"></div>
        </div>
      </div>
    </MyContainer>
  );
}
