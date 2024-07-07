import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";

const SocialIcon = ({ imgUrl }: { imgUrl: string }) => {
    console.log(imgUrl);
    return (
        <div className="bg-gray-900 border border-white px-2 py-2 rounded-full">
            <Image src={imgUrl} width={24} height={24} alt="social-media" />
        </div>
    );
};

const socialMediaContent = [
    "/Social Icons.png",
    "/Path.png",
    "/twitter.png",
    "/youTube.png",
];

export const footerLinks = [
    {
        title: "Company",
        links: ["About Us", "Blog", "Contact us", "Pricing", "Testimonials"],
    },
    {
        title: "Support",
        links: [
            "Help center",
            "Terms of service",
            "Legal",
            "Privacy policy",
            "Status",
        ],
    },
];

const FooterComponent = () => {
    return (
        <Container className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-5 py-5 bg-slate-600 lg:w-auto"
            data-aos="fade-up">
            <div className="text-white w-full lg:w-auto">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/LogoIcon.png" width={35} height={24} alt="logo" />
                    <span className="my-auto text-2xl font-bold">Nexcent</span>
                </Link>
                <div className="mt-4 text-silver text-sm">
                    <p>Copyright © 2020 Nexcent ltd.</p>
                    <p className="mt-1">All rights reserved</p>
                </div>
                <div className="mt-5 flex gap-3">
                    {socialMediaContent.map((item, index) => (
                        <SocialIcon key={index} imgUrl={item} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-auto">
                {footerLinks.map((items, index) => (
                    <div key={index} className="text-white">
                        <h5>{items.title}</h5>
                        <ul className="flex flex-col gap-2">
                            {items.links.map((link, idx) => (
                                <li key={idx}>
                                    <span>{link}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="flex flex-col gap-2">
                    <h5 className="text-white">Stay up to date</h5>
                    <div className="flex">
                        <input
                            type="email"
                            className="form-control bg-dark text-white shadow-none border-0"
                            id="exampleFormControlInput1"
                            placeholder="Your email address"
                        />
                        <button className="btn btn-dark">
                            <Image src="/inputIcon.png" height={20} width={20} alt="send" />
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FooterComponent;
