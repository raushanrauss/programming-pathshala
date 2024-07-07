import Container from "react-bootstrap/Container";

import Image from "next/image";
import { Button } from "@/components/ui/button";


const Design = () => {
    return (
        <Container className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5 my-5  dark:bg-slate-800 column-gap-3">
            <Image
                src="/pana.png"
                width={300}
                height={300}
                alt="use-Img"
                className="w-auto h-auto"
                data-aos="fade-right"
            />
            <div className="sub-section font-inter" data-aos="fade-left">
                <h1 className="text-gray-900 fw-semibold lh-base  dark:text-white">
                    How to design your site footer like&nbsp;
                    <span className="text-primary">we did ?</span>
                </h1>
                <p className="text-gray-500 fw-light fs-6  dark:text-slate-400">
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
                    augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
                    elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
                    habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
                    facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
                    urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
                    quis massa. Praesent felis est, finibus et nisi ac, hendrerit
                    venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <Button className="bg-green-500 text-white mt-4" size="lg">
                    Learn More
                </Button>
            </div>
        </Container>
    );
};

export default Design;
