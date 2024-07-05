import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Hero from "./Hero ";


export function CarouselDemo({ dark }) {
   
    return (
        <div className="w-screen overflow-hidden">
            <Carousel>
                <CarouselContent className="flex">
                    <CarouselItem className="w-full">
                        <Hero dark={dark} />
                    </CarouselItem>
                    <CarouselItem className="w-full">
                        <Hero dark={dark} />
                    </CarouselItem>
                    <CarouselItem className="w-full">
                        <Hero dark={dark} />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-800 cursor-pointer" />
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-800 cursor-pointer" />
            </Carousel>
        </div>
    );
}
