"use client"
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Stats = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-10 border-t-2 border-b-2 border-gray-800">
            <motion.div initial={{ translateY: 100 }} whileInView={{ translateY: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true, amount: 0.2 }} className="flex flex-col items-center gap-2">
                <CountUp end={1000} suffix="+" duration={2} className="text-4xl font-bold text-orange-500" enableScrollSpy scrollSpyOnce />
                <h1 className="text-3xl font-semibold">Projects Completed</h1>
            </motion.div>
            <motion.div initial={{ translateY: 100 }} whileInView={{ translateY: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true, amount: 0.2 }} className="flex flex-col items-center gap-2">
                <CountUp end={10} suffix="+" duration={2} className="text-4xl font-bold text-orange-500" enableScrollSpy scrollSpyOnce />
                <h1 className="text-3xl font-semibold">Years of Experience</h1>
            </motion.div>
            <motion.div initial={{ translateY: 100 }} whileInView={{ translateY: 0 }} transition={{ duration: 0.3 }} viewport={{ once: true, amount: 0.2 }} className="flex flex-col items-center gap-2">
                <CountUp end={100} suffix="%" duration={2} className="text-4xl font-bold text-orange-500" enableScrollSpy scrollSpyOnce />
                <h1 className="text-3xl font-semibold">Clients Satisfied</h1>
            </motion.div>
        </div>
    );
};

export default Stats;