"use client"
import { useEffect } from "react";
import { useCountStore } from "../ZustandStore/zuststand";

 const CountUpSection: React.FC<{ endValue: number }> = ({ endValue }) => {
    const { count, setCount } = useCountStore();

    useEffect(() => {
        let start = 0;
        const duration = 2000; // Animation duration in milliseconds
        const step = Math.ceil((endValue - start) / (duration / 100)); // Calculate increment step

        const timer = setInterval(() => {
            start += step;
            if (start >= endValue) {
                start = endValue;
                clearInterval(timer);
            }
            setCount(start);
        }, 10);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [endValue, setCount]);

    return (
        <section className="bg-gray-200 py-10  dark:bg-slate-800" data-aos="zoom-in">
            <div className="container mx-auto text-center  dark:text-white">
                <h2 className="text-3xl font-bold mb-4">Helping a local business reinvent itself</h2>
                <p className="text-2xl font-semibold">Count: {count}</p>
            </div>
        </section>
    );
};
export default CountUpSection;