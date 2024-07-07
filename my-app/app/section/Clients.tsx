import Container from "react-bootstrap/Container";
import Image from "next/image";

const Clients = () => {
    return (
        <Container className="text-center py-5   dark:bg-slate-800 ">
            <div className="font-inter " data-aos="fade-down">
                <h1 className="text-gray-900 fs-1 fw-bold  dark:text-white">Our Clients</h1>
                <p className="text-gray-500 fw-light fs-6  dark:text-white">
                    We have been working with some Fortune 500+ clients
                </p>
            </div>
            <div className="d-flex align-items-center w-100 justify-content-between flex-wrap mt-5" data-aos="zoom-in">
                {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                    <Image
                        src={`/client/${value}.png`}
                        width={48}
                        height={48}
                        alt={`client-${value}`}
                        key={value}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Clients;
