import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BreakControl = ({ breakTime, setBreakTime }) => {
    const handleBreakTimeDown = () => {
        if (breakTime == 1) return;
        setBreakTime(breakTime - 1);
    };

    const handleBreakTimeUp = () => {
        if (breakTime == 60) return;
        setBreakTime(breakTime + 1);
    };
    return (
        <div className="inline-block text-2xl text-center px-5 py-2">
            <div id="break-label" className="font-bold">
                Break Length
            </div>
            <button
                id="break-decrement"
                onClick={handleBreakTimeDown}
                className="cursor-pointer"
            >
                <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <p id="break-length" className="inline-block px-2 font-bold">
                {breakTime}
            </p>
            <button
                id="break-increment"
                onClick={handleBreakTimeUp}
                className="cursor-pointer"
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
};

export default BreakControl;
