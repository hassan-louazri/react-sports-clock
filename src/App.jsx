import BreakControl from "./BreakControl";
import SessionControl from "./SessionControl";
import Timer from "./Timer";
import { useState } from "react";
const App = () => {
    const [sessionTime, setSessionTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);

    return (
        <div className="flex flex-col min-h-screen justify-center items-center bg-[#1E555C] text-white">
            <div className="text-center text-5xl font-bold pb-3">
                Sports Clock 25 + 5
            </div>
            <div className="inline-block">
                <SessionControl sessionTime={sessionTime} setSessionTime={setSessionTime}/>
                <BreakControl breakTime={breakTime} setBreakTime={setBreakTime}/>
            </div>
            <Timer sessionTime={sessionTime} setSessionTime={setSessionTime} breakTime={breakTime} setBreakTime={setBreakTime}/>
        </div>
    );
};

export default App;
