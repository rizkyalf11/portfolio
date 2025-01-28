import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SatuWork: React.FC = () => {
  return (
    <div className="col-span-12">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index} className="basis-1 md:basis-1/2">
              <img
                className="border-2 border-border dark:border-darkBorder"
                src={`/p1/${index + 1}.png`}
                alt=""
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SatuWork;
