import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Hero from "./Hero ";


export function CarouselDemo() {
   
    return (
        <div className="w-screen overflow-hidden  dark:bg-slate-800">
            <Carousel>
                <CarouselContent className="flex">
                    <CarouselItem className="w-full">
                        <Hero />
                    </CarouselItem>
                    <CarouselItem className="w-full">
                        <Hero />
                    </CarouselItem>
                    <CarouselItem className="w-full">
                        <Hero />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-800 cursor-pointer  dark:text-white" />
                <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-800 cursor-pointer  dark:text-white" />
            </Carousel>
        </div>
    );
}
