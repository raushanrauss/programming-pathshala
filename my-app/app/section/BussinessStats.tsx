import Container from "react-bootstrap/Container";
import StatCard from "../Component/StatCard";


const StatContent = [
    {
        title: "Members",
        value: 2245341,
        imgUrl: "/statsLogo2.png",
    },
    {
        title: "Clubs",
        value: 46328,
        imgUrl: "/statsLogo3.png",
    },
    {
        title: "Event Bookings",
        value: 828267,
        imgUrl: "/Icon (1).png",
    },
    {
        title: "Payments",
        value: 1926436,
        imgUrl: "/Vector.png",
    },
];

const BusinessStats = () => {
    return (
        <Container className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-start align-items-lg-center px-5 py-5 bg-silver">
            <div className="font-inter" data-aos="fade-right">
                <h1 className="text-gray-900 fw-semibold">
                    Helping a local&nbsp; <br />
                    <span className="text-primary">business reinvent itself</span>
                </h1>
                <p className="navtext fw-normal">
                    We reached here with our hardwork and dedication.
                </p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {StatContent.map((card) => (
                    <StatCard key={card.title} {...card} />
                ))}
            </div>
        </Container>
    );
};

export default BusinessStats;
