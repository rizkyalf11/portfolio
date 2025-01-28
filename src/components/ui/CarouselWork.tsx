import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselWork({ work, qty }: { work: number, qty: number }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "center",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: qty }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <img
              className="border-2 border-border dark:border-darkBorder"
              src={`/p${work}/${index + 1}.png`}
              alt=""
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
