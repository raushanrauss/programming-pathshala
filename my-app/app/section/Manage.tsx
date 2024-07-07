import Container from "react-bootstrap/Container";
import ManageCard from "../Component/ManageCard";


const ManageContent = [
    {
        id: 1,
        title: "Membership Organisations",
        imgUrl: "/ManageLogo2.png",
    },
    {
        id: 2,
        title: "National Associations",
        imgUrl: "/ManageLog.png",
    },
    {
        id: 3,
        title: "Clubs And Similar Groups",
        imgUrl: "/statslogo3.png",
    },
];

const Manage = () => {
    return (
        <Container className="text-center font-inter   dark:bg-slate-800 py-5">
            <div data-aos="fade-down">
                <h1 className="fs-1 lh-base text-gray-900 fw-bold  dark:text-white">
                    Manage your entire community <br /> in a single system
                </h1>
                <p className="text-gray-600 fw-light fs-6  dark:text-white">
                    Who is Nextcent suitable for?
                </p>
            </div>
            <div className="mt-4 d-flex flex-lg-row flex-column justify-content-between align-items-center">
                {ManageContent.map((card) => (
                    <ManageCard key={card.id} {...card} />
                ))}
            </div>
        </Container>
    );
};

export default Manage;
