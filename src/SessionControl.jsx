import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SessionControl = ({ sessionTime, setSessionTime }) => {
    const handleSessionTimeDown = () => {
        if (sessionTime === 1 ) return;
        setSessionTime(sessionTime - 1);
    };

    const handleSessionTimeUp = () => {
        if (sessionTime == 60) return;
        setSessionTime(sessionTime + 1);
    };
    return (
        <div className="inline-block text-center text-2xl px-5 py-2">
            <p id="session-label" className="font-bold">
                Session Length
            </p>
            <button
                id="session-decrement"
                onClick={handleSessionTimeDown}
                className="cursor-pointer"
            >
                <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <div id="session-length" className="inline-block px-2 font-bold">
                {sessionTime}
            </div>
            <button
                id="session-increment"
                onClick={handleSessionTimeUp}
                className="cursor-pointer"
            >
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
};

export default SessionControl;
