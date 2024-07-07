import Container from "react-bootstrap/Container";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const Pixelgrade = () => {
    return (
        <Container className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-center align-items-center px-5 my-5  dark:bg-slate-800">
            <Image
                src="/Frame 35.png"
                width={300}
                height={300}
                alt="pixelgrade"
                className="w-auto h-auto"
                data-aos="fade-right"
            />
            <div className="sub-section font-inter" data-aos="fade-left">
                <h1 className="text-gray-900 fw-semibold lh-base  dark:text-white">
                    The unseen of spending three&nbsp; <br />
                    years at <span className="text-primary text-green-400">Pixelgrade</span>
                </h1>
                <p className="text-gray-600 fw-light fs-6  dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
                    justo ipsum. Sed accumsan quam vitae est varius fringilla.
                    Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                    tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                    Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
                    elementum pulvinar odio.
                </p>
                <Button className="bg-green-500 text-white mt-4" size="lg">
                    Learn More
                </Button>
            </div>
        </Container>
    );
};

export default Pixelgrade;
