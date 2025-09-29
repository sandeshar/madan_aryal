import CounterClient from "./CounterClient";

const Stats = () => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-10 border-t-2 border-b-2 border-gray-800">
            <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-bold text-orange-500"><CounterClient end={1000} suffix="+" /></div>
                <h1 className="text-3xl font-semibold">Projects Completed</h1>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-bold text-orange-500"><CounterClient end={10} suffix="+" /></div>
                <h1 className="text-3xl font-semibold">Years of Experience</h1>
            </div>
            <div className="flex flex-col items-center gap-2">
                <div className="text-4xl font-bold text-orange-500"><CounterClient end={100} suffix="%" /></div>
                <h1 className="text-3xl font-semibold">Clients Satisfied</h1>
            </div>
        </div>
    );
};

export default Stats;