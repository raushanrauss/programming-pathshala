import Container from "react-bootstrap/Container";


import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

const Hero = () => {
   
    return (
        <Container className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5 my-5 bg-silver">
            <div className="font-inter" data-aos="fade-right">
                <h1 className=" text-gray-900 fw-semibold">
                    Lessons and insights&nbsp; <br />
                    <span className="text-green-500">from 8 years</span>
                </h1>
                <p className="text-gray-400 fw-light fs-6">
                    Where to grow your business as a photographer: site or social media?
                </p>
                <Button className=" bg-green-500 text-white mt-4" size="lg">
                    Register
                </Button>
            </div>
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <Image
                src="/Illustration.png"
                alt="Hero"
                height={200}
                width={200}
                className=" h-auto w-auto mb-2 px-2"
                priority={true}
                data-aos="fade-left"
            />
        </Container>
    );
};

export default Hero;
