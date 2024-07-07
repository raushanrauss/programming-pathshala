import React from "react";
import { FaArrowUp } from "react-icons/fa"; 

const ScrollToTopButton: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div
            className="fixed bottom-4 right-4 h-20 w-20 bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md cursor-pointer items-center text-center justify-center"
            onClick={scrollToTop}
        >
            <h1 className="items-center text-center justify-center mt-3 mr-5">
                <FaArrowUp /></h1> 
        </div>
    );
};

export default ScrollToTopButton;
