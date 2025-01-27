import { Button } from "@/components/ui/button";
import MyContainer from "@/components/ui/MyContainer";
import MyParagraph from "@/components/ui/MyParagraph";
import MySubTitle from "@/components/ui/MySubTitle";
import MyTitle from "@/components/ui/MyTitle";

export default function Work() {
  return (
    <MyContainer title="Work">
      <div className="grid h-full w-full grid-cols-12 gap-7">
        <MyTitle className="col-span-12" name="Work" />
        <div className="col-span-12 grid grid-cols-12 rounded-base border-2 border-border bg-[#DAF5F0] shadow-light dark:border-darkBorder dark:shadow-dark md:col-span-6">
          <div className="col-span-12 flex gap-1 border-b-2 border-border px-2 py-2 dark:border-darkBorder">
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FF6060] dark:border-darkBorder"></div>
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FFF159] dark:border-darkBorder"></div>
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#85FF43] dark:border-darkBorder"></div>
          </div>
          <div className="col-span-12 h-[200px]">
            <img
              src="/me2.webp"
              alt="ini saya"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-12 p-4">
            <MySubTitle name="Project 1" />
            <MyParagraph className="mt-2 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              culpa reiciendis? Vero odio sed labore consequatur. Error quas
              quia temporibus.
            </MyParagraph>
            <Button className="mt-4">See Detail</Button>
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-12 rounded-base border-2 border-border bg-[#DAF5F0] shadow-light dark:border-darkBorder dark:shadow-dark md:col-span-6">
          <div className="col-span-12 flex gap-1 border-b-2 border-border px-2 py-2 dark:border-darkBorder">
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FF6060] dark:border-darkBorder"></div>
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FFF159] dark:border-darkBorder"></div>
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#85FF43] dark:border-darkBorder"></div>
          </div>
          <div className="col-span-12 h-[200px]">
            <img
              src="/me2.webp"
              alt="ini saya"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-12 p-4">
            <MySubTitle name="Project 1" />
            <MyParagraph className="mt-2 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              culpa reiciendis? Vero odio sed labore consequatur. Error quas
              quia temporibus.
            </MyParagraph>
            <Button className="mt-4">See Detail</Button>
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-12 rounded-base border-2 border-border bg-[#DAF5F0] shadow-light dark:border-darkBorder dark:shadow-dark md:col-span-6">
          <div className="col-span-12 flex gap-1 border-b-2 border-border px-2 py-2 dark:border-darkBorder">
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FF6060] dark:border-darkBorder"></div>
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#FFF159] dark:border-darkBorder"></div>
            <div className="aspect-square h-[15px] rounded-full border border-border bg-[#85FF43] dark:border-darkBorder"></div>
          </div>
          <div className="col-span-12 h-[200px]">
            <img
              src="/me2.webp"
              alt="ini saya"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-12 p-4">
            <MySubTitle name="Project 1" />
            <MyParagraph className="mt-2 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              culpa reiciendis? Vero odio sed labore consequatur. Error quas
              quia temporibus.
            </MyParagraph>
            <Button className="mt-4">See Detail</Button>
          </div>
        </div>
      </div>
    </MyContainer>
  );
}
